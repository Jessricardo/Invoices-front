/**
*
* FullPageLoader
*
*/

import React, { PropTypes } from 'react';
import {
  TaskContainer,
  Text,
  Remove,
  Input,
} from './styledComponents';

class TaskItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      price: props.price,
      quantity: props.quantity,
      title: props.title,
      editing: false,
    };
  }
  setEdit = (editing) => () => {
    this.setState({ editing });
    if (!editing) {
      const { update, id } = this.props;
      const { title, price, quantity } = this.state;
      update({ title, price, quantity, id }, 'update');
    }
  }
  hover = (hover) => () => {
    this.setState({ hover });
  }
  remove = () => {
    const { update, id } = this.props;
    update({ id }, 'remove');
  }
  update = () => {
    const { update, id } = this.props;
    update({ id }, 'update');
  }
  changeValue = (event) => {
    let value = event.target.value;
    switch (event.target.name) {
      case 'price':
        value = event.target.value.replace(/[^0-9.]+/g, '');
        if (!(/^\d+\.*\d{0,2}$/g.test(value)) && value) {
          return;
        }
        break;
      case 'quantity':
        value = event.target.value.replace(/[^0-9.]+/g, '');
        break;
      default:
    }
    this.setState({ [event.target.name]: value });
  }
  handleKeyPress = (event) => {
    const { editing } = this.state;
    if (event.key === 'Enter' && editing) {
      this.setEdit(0)();
      event.target.blur();
    }
  }
  render() {
    const { title, price, quantity, hover, editing } = this.state;
    return (
      <TaskContainer onMouseEnter={this.hover(1)} onMouseLeave={this.hover(0)}>
        <Input onKeyPress={this.handleKeyPress} name="title" onChange={this.changeValue} onBlur={this.setEdit(0)} onClick={this.setEdit(1)} readonly={!editing} value={title} align="left" />
        <Input onKeyPress={this.handleKeyPress} name="quantity" onChange={this.changeValue} onBlur={this.setEdit(0)} onClick={this.setEdit(1)} readonly={!editing} value={quantity} />
        <Input onKeyPress={this.handleKeyPress} name="price" onChange={this.changeValue} onBlur={this.setEdit(0)} onClick={this.setEdit(1)} readonly={!editing} value={`$ ${price}`} />
        <Text align="right">
          ${(quantity * price).toFixed(2)}
        </Text>
        <Remove onClick={this.remove} hover={hover}>x</Remove>
      </TaskContainer>
    );
  }
}

TaskItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  update: PropTypes.func,
};

export default TaskItem;
