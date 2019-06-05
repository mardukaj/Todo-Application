import React from 'react';
import './App.css';
import TodoList from './TodoList';
import { Link, Route, Redirect } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header>
          <h1>Todo List App</h1>
      </header>
      <section id="p_content">
        <div className="col-md-12 links">
            <Link to="/todos"><Button>List todos</Button></Link>
            <Link to="/todos/new"><Button variant="success">Add a todo</Button></Link>
        </div>
        <div className='col-md-12 todos_li'>
          <div className='col-lg-4 todos_items'>
            <Route path='/todos' component = {TodoList} />
            <Route exact path='/' render = { () => <Redirect to="/todos" /> } />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
