import React  from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Add from './ToolViews/ToolAdd.js';
import Remove from './ToolViews/ToolRemove.js'
import Edit from './ToolViews/ToolEdit.js';
import ToolList from "./ToolViews/ToolList"
// import Form from  "./ToolViews/ToolForm.js"

const App = () => {


  return (
    <div className="App">
      <Link to="/"> View Tools  </Link>
      <Link to="/add"> Add Tool  </Link>
      <Link to="/edit">  Edit Tool  </Link>
      <Link to="/remove">  Remove Tool  </Link>

      <Route exact path="/" component={ToolList}/>
      <Route exact path="/add" component={Add} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/remove" component={Remove} />
      

   
    </div>
  );
}

export default App;