import React from 'react';
import AddTodo from './components/addTodo/addTodo';

const App = () => (
  <div className="container">
    <h1>Todo List</h1>
    <AddTodo submitTodo={() => {}} />
  </div>
);

export default App;
