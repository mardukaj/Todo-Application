import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { addTodo, removeTodo, getTodos } from "./actionCreators";
import { Route } from "react-router-dom";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
    this.handleAdd = this.handleAdd.bind(this)
  }
  componentDidMount() {
    this.props.getTodos();
  }
  removeTodo(id) {
    this.props.removeTodo(id);
  }
  handleAdd(val) {
    this.props.addTodo(val);
  }
  render() {
    let todos = this.props.todos.map((val, index) => (
      <Todo removeTodo={this.removeTodo.bind(this, val._id)} date={val.insertDate} todonum={++index} task={val.task} key={val._id} />
    ));
    return (
        <div>
          <Route path='/todos/new' component={props => (
            <NewTodoForm {...props} handleSubmit={this.handleAdd} />
            )}
          />
          <Route exact path='/todos' component = { () => <div>{todos}</div> }></Route>
        </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  }
}

export default connect(mapStateToProps, { addTodo, removeTodo, getTodos })(TodoList);
