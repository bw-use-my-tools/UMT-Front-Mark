import React, { useState, useEffect } from 'react';
import Form from './ToolForm';
import  "../server/data/helpers/tools-model.js"
import axios from 'axios'


const api =  "../../server/data/helpers/tools-model.js"
const RemoveTool = props => {
  const [tools, setTools] = useState([]);

  const updateTools = () => {
    api.findById()
      .then(res => {
        setTools(res.data);
      });
  };

  useEffect(() => {
    axios.get('https://rent-mytools.herokuapp.com/api/tools/')
    console.log("first home render");
    updateTools();
  }, []);

  const deleteTool = id => {
    return api.remove(id)
      .then(() => api.update());
  };

  if (!tools) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <h1>Tools</h1>
      {tools.map(tool => <Form key={tool.id} tool={tool} deleteTool={deleteTool} />)}
    </div>
  );
};

export default RemoveTool;