import React from 'react';
import TeamForm from "./ToolForm.js"
import axios from "axios"


const Add = props => {
  const { history } = props;
  const addTool = tool => {
  axios.post('https://usemytools.herokuapp.com/api/tools/', tool)
    // return api.addTeamMember(tool)
      .then(() => history.push("/"));
  };

  return (
    <div>
      <h1>Add Tool</h1>
      <TeamForm {...props} buttonText="Add Tool" submitTool={addTool} />
    </div>
  );
};

export default Add;