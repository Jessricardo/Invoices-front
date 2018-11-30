/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { TextField, FlatButton, CircularProgress } from 'material-ui';
import makeSelectLogin from './selectors';
import messages from './messages';
import { sendLogin, reset } from './actions';
import { Container, LoginDiv, Icon, styles, Alert, Title } from './styledComponents';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    email: '',
    password: '',
    emailUnfocused: false,
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(reset());
  }
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }
  checkEmail = () => {
    const { email, emailUnfocused } = this.state;
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    return !regex.test(email) && email && emailUnfocused ? 'Correo incorrecto' : '';
  }
  handleLogin = () => {
    const { password, email } = this.state;
    const { dispatch } = this.props;
    if (password && !this.checkEmail()) {
      dispatch(sendLogin({ password, email }));
    }
  }
  handleEnter = (event) => {
    const { password } = this.state;
    if (event.key === 'Enter' && password) {
      this.handleLogin();
    }
  }
  render() {
    const { Login: { error, loading } } = this.props;
    const { email, password } = this.state;
    return (
      <Container>
        <Title>
          Invoices
        </Title>
        <LoginDiv>
          <Icon src="http://cdn.onlinewebfonts.com/svg/img_215059.png" />
          <div>
            <TextField
              id="email"
              autoFocus
              fullWidth
              onFocus={() => this.setState({ emailUnfocused: false })}
              onBlur={() => this.setState({ emailUnfocused: !!email })}
              errorText={this.checkEmail()}
              onChange={this.handleChange}
              floatingLabelText={messages.user}
              value={email}
            />
            <TextField
              id="password"
              fullWidth
              onChange={this.handleChange}
              type="password"
              onKeyPress={this.handleEnter}
              floatingLabelText={messages.password}
              value={password}
            />
          </div>
          <Alert active={error}>{error || '...'}</Alert>
          {loading ?
            <CircularProgress style={styles.registerButton} size={30} thickness={5} />
            :
            <div style={{ width: '100%' }}>
              <FlatButton onClick={this.handleLogin} disabled={this.checkEmail() || !password} primary style={styles.registerButton} label="Ingresar" fullWidth />
              <FlatButton onClick={() => browserHistory.push('/registrar')} style={styles.registerButton2} label="Registrar" fullWidth />
            </div>
          }
        </LoginDiv>
      </Container>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  Login: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  Login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
