import React, {useState} from 'react';
import '../stylesheets/style.css';
import ToDoList from './ToDoList';
import Uncheck from './Uncheck';
import Introduction from './Introduction';

const App = () => {
  const [introOpen, setIntroOpen] = useState(false);
  
  return(
  <>
  <header>
    <a className="header-logo" onClick={() => setIntroOpen(true)}>おでかけチェック</a>
    { introOpen && <Introduction setIntroOpen={setIntroOpen} /> }
  </header>
  <div className="container">
    <ToDoList />
    <Uncheck />
  </div>
  </>
)}

export default App;