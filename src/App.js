import React  from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Add from './ToolViews/Add/ToolAdd.js';
import Remove from './ToolViews/Remove/toolsRemove'
import Edit from './ToolViews/Edit/toolsEdit.js';
import ToolList from "./toolManager"
import Form from  "./ToolViews/ToolForm.js"

function App() {


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