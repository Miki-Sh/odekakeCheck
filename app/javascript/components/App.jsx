import React from 'react';
import '../stylesheets/style.css';
import Header from './Header';
import ToDoList from './ToDoList';
import Uncheck from './Uncheck';

const App = () => {
  return(
  <>
  <Header />
  <div className="container">
    <ToDoList />
    <Uncheck />
  </div>
  </>
)};

export default App;