import React from 'react';
import Form from '../../components/Form.js';
import api from '../../services/api';

const Add = props => {
  const { history } = props;
  const addTool = tool => {
    // axios.post('http://localhost:4000/api/team-member/', tool)
    return api.addTeamMember(tool)
      .then(() => history.push("/"));
  };

  return (
    <div>
      <h1>Add Tool</h1>
      <Form {...props} buttonText="Add Tool" submitTool={addTool} />
    </div>
  );
};

export default Add;