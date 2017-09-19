import React from 'react';
import { connect } from 'react-redux';

import { addList } from '@src/actions/listActions';
import { addTodo } from '@src/actions/todoActions';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.state = {
      value: ''
    };
  }

  addItem(event) {
    event.preventDefault();

    const { value } = this.state;
    if (value === '') {
      return;
    }

    const { listMode, addList, addTodo } = this.props;
    if (listMode) {
      addList(value);
    } else {
      addTodo(value);
    }

    this.setState({
      value: ''
    });
  };

  updateValue(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const { listMode, editable } = this.props;
    const { value } = this.state;
    const placeholder = `Add new ${listMode ? 'List' : 'To-To'}`;
  
    return (
      <form onSubmit={this.addItem} hidden={editable}>
        <input onBlur={this.addItem} onChange={this.updateValue} value={value} placeholder={placeholder}/>
      </form>
    );
  }
  
};

const mapDispatchToProps = {
  addList,
  addTodo
};

export default connect(
  null,
  mapDispatchToProps
)(AddItem);