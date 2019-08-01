import React, { useState, useEffect } from 'react';
import Form from './ToolForm';

import axios from 'axios'



const RemoveTool = props => {
  const [tools, setTools] = useState([]);

    // api.findById()
     
     
  

  useEffect(() => {
    
 
    axios
    .get('https://rent-mytools.herokuapp.com/api/tools/')
    .then(response => {
      setTools(response.data);
       }
    
  )
  .catch(error => {
          console.error('Error - Data is not flowing. Check this out: ', error);
        });
  
  }, []);




  if (!tools) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <h1>Tools</h1>
      {tools.map(tool => <Form key={tool.id} tool={tool}  />)}
    </div>
  );
};

export default RemoveTool;