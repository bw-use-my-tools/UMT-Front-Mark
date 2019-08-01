import React  from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Add from './ToolViews/ToolAdd.js/index.js';
import Remove from './ToolViews/ToolRemove.js'
import Edit from './ToolViews/toolEdit.js/index.js';
import ToolList from "./ToolViews/toolManager"
// import Form from  "./ToolViews/ToolForm.js"

const App = () => {


  return (
    <div className="App">
      <Link to="/">Add Tool</Link>
      <Link to="/edit">Edit Tool</Link>
      <Link to="/remove">Remove Tool</Link>

      <Route exact path="/" component={Add} />
      <Route path="/remove" component={Remove} />
      <Route path="/edit/:id" component={Edit} />

      <ToolList/>
    </div>
  );
}

export default App;