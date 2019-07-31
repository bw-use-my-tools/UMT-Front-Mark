import React, { useState, useEffect } from 'react';
import axios from 'axios';






const ToolList = props => {
  const [tools, setTools] = useState([])
 
  // const { params } = match;
  // const{id}={params};

  useEffect(() => {
   
      axios
        .get('https://rent-mytools.herokuapp.com/api/tools')
        .then(response => {
          setTools(response.data);
          console.log('toolManager.js -> %cresponse.data:', 'color: green', response.data)
       
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
   
  , []);
 
  return (
   
    <div className="tool-list">
        
    { Array.from(tools).map(tool =>
    
       
  <div className="plums">
        <image src={tool.image_url}></image>
        <h2>{tool.tool}</h2>
        <em>Description:</em> {tool.description}
          ID: {tool.id}
          <strong> user_id: </strong>{tool.user_id}
      Price: {tool.price}
         Availablity:  {!tool.is_rented}
        }
   </div>
   

    )}
   </div>
  )

 }
 

export default ToolList;
