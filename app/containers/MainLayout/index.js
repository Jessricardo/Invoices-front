/*
 *
 * MainLayout
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import TaskItem from 'components/TaskItem';
import makeSelectMainLayout from './selectors';
import messages from './messages';
import { changeData, reset } from './actions';
import {
  Container,
  SearchBar,
  Input,
  Logout,
  Signs,
  Results,
  Tasks,
  InputContainer,
  Items,
  LabelItem,
  List,
  Labels,
  Item,
  Add,
  SubLoader,
  Submit,
  Empty,
  Delete,
} from './styledComponents';

export class MainLayout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    selectedList: 0,
    text: '',
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(reset());
  }
  componentWillReceiveProps(nextProps) {
    const { selectedList } = this.state;
    if (!selectedList && nextProps.MainLayout.list.length) {
      this.setState({ selectedList: nextProps.MainLayout.list[0].id });
    } else if (!selectedList && !nextProps.MainLayout.list.length) {
      this.setState({ selectedList: 0 });
    }
  }
  handleEnter = (event) => {
    const { text, selectedList } = this.state;
    if (event.key === 'Enter' && text && selectedList) {
      const data = {
        listId: selectedList,
        title: text,
      };
      this.handleUpdateItem(data, 'update');
      this.setState({ text: '' });
    } else if (event.key === 'Enter' && text && !selectedList) {
      this.handleUpdateItem({ name: text }, 'listAdd');
      this.setState({ text: '' });
    }
  }
  handleUpdateList = (add) => () => {
    const { text, selectedList } = this.state;
    if (text && add) {
      this.handleUpdateItem({ name: text }, 'listAdd');
      this.setState({ text: '' });
    } else if (!add && selectedList) {
      this.handleUpdateItem({ id: selectedList }, 'listRemove');
      this.setState({ selectedList: 0 });
    }
  }
  logout = () => {
    sessionStorage.clear();
    localStorage.clear();
    browserHistory.replace('/');
  }
  handleUpdateItem = (body, method) => {
    const { dispatch } = this.props;
    dispatch(changeData(body, method));
  }
  handleInputChange = (event) => {
    this.setState({ text: event.target.value });
  }
  render() {
    const { selectedList, text } = this.state;
    const { MainLayout: { list, subloading } } = this.props;
    const activeList = list.length ?
      list.find((item) => item.id === selectedList) :
      null;
    const subtotal = activeList && activeList.items.length ?
      activeList.items.reduce((total, item) => total + (item.quantity * item.price), 0)
      : 0;
    const tax = subtotal * 0.05;
    const total = subtotal + tax;
    return (
      <Container>
        <SearchBar>
          <InputContainer>
            <Input
              value={text}
              onChange={this.handleInputChange}
              autoFocus
              placeholder={selectedList ? messages.input : messages.create}
              onKeyPress={this.handleEnter}
            />
            <Submit active={text} />
          </InputContainer>
          <List>
            <Items>
              {list.map((item, index) =>
                <Item
                  onClick={() => this.setState({ selectedList: item.id })}
                  key={index}
                  selected={item.id === selectedList}
                >
                  {item.name}
                </Item>
              )}
            </Items>
            <Signs>
              <Delete onClick={this.handleUpdateList(0)}>-</Delete>
              <Add onClick={this.handleUpdateList(1)}>+</Add>
            </Signs>
          </List>
          {activeList &&
            <Tasks>
              <Labels visible={activeList.items.length}>
                <LabelItem align="left">
                  Item
                </LabelItem>
                <LabelItem>
                  Qty
                </LabelItem>
                <LabelItem>
                  Price
                </LabelItem>
                <LabelItem align="right">
                  Total
                </LabelItem>
              </Labels>
              {activeList.items.length ?
                activeList.items.map((item, index) =>
                  <TaskItem
                    update={this.handleUpdateItem}
                    id={item.id}
                    key={index}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                  />) :
                    <Empty>
                      {messages.emptyTasks}
                    </Empty>
              }
            </Tasks>
          }
        </SearchBar>
        <Results visible={activeList && activeList.items.length}>
          <div>Subtotal: ${subtotal.toFixed(2)}</div>
          <div>Tax (5%): ${tax.toFixed(2)}</div>
          <div>Total: ${total.toFixed(2)}</div>
        </Results>
        <SubLoader active={subloading} size={22} thickness={3} />
        <Logout onClick={this.logout}>
          {messages.logout}
        </Logout>
      </Container>
    );
  }
}

MainLayout.propTypes = {
  MainLayout: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  MainLayout: makeSelectMainLayout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
