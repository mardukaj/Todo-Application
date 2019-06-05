import React from "react";
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';

const Todo = ({ task, date, todonum, removeTodo }) => (
  <div>
    <li className='todo_item'>
      <div className='todo_num'>{todonum}</div>
      <div className='li_task'>{task}</div>
      <Button onClick={removeTodo} variant="secondary">X</Button>
    </li>
    <span>Date Created: </span><Moment format="DD/MM/YYYY">{date}</Moment>
  </div>
);

export default Todo;
