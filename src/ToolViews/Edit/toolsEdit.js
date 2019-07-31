import React, { useState, useEffect } from 'react';
import axios from "axios"
import Form from "../ToolForm";
// import { update, findById } from '../../server/data/helpers/tools-model.js';


const ConsoleLog = ({ children }) => {
  console.log(children);
  return false;
};

const [tools, setTools] = useState([]);

const Edit = props => {
  const { match, history } = props;
  const id = match.params.id;
  const [initialTool, setInitialTool] = useState(null);
  useEffect(() => {
    
    
    const getTools = () => {
      axios
      .get('https://rent-mytools.herokuapp.com/api/tools/:id')
        .then(response => {
          setTools(response.data);
          console.log('toolsEdit.js -> %cresponse.data:', 'color: violet', response.data)
        
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getTools();
     
  }, [id]);

  // const editTool = newTool => {
  //   update(newTool.id, newTool)
  //     .then(response => {
  //       history.push("/");
  //     });
  // };

  if (initialTool === null) {
    return <div>loading...</div>;
  }
  return (
    <Form {...props}
          initialTool={initialTool}
          submitTool={editTool}
          buttonText="Edit Tool"
    />
  );
};

export default Edit;
