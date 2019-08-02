import React from 'react';
import ToolForm from './ToolForm.js';
import axios from 'axios';

const Add = props => {
  const { history } = props;
  const addTool = tool => {
    axios.post('http://localhost:4000/api/team-member/', tool)
    // return api.addTeamMember(tool)
      .then(() => history.push("/"));
  };

  return (
    <div>
      <h1>Add Tool</h1>
      <ToolForm {...props} buttonText="Add Tool" submitTool={addTool} />
    </div>
  );
};


export default Add;



