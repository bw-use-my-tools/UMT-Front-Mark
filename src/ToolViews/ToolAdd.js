import React, {useEffect, useState} from 'react';
import axios from "axios"
import Form from "./ToolForm"

import ToolCard from "./ToolCard.js"



const Add = props => {
  const { history } = props;

  const addTool = tool => {
    axios.post('https://rent-mytools.herokuapp.com/api/tools/', tool)
  


    // return create(tool) 
  
    .then(() => history.push("/"));
  };

  return (
    <div>
      <h1>Add Tool</h1>
      <Form {...props} buttonText="Add Tool" submitTool={addTool} />
    </div>
  );

}

export default Add;



