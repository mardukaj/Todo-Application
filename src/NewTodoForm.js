import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      task: ""
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.task);
    e.target.reset();
    this.props.history.push("/todos");
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Label htmlFor="task">Insert new todo</Form.Label>
          <Form.Group>
            <Form.Control autoComplete="off" name='task' id='task' onChange={this.handleChange} />
            <Button type='submit'>Add</Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
