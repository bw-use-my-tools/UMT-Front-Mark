// import React from 'react';
// import TeamForm from "./ToolForm.js";
import axios from 'axios';
import { list } from 'postcss';

// const Edit = props => {
//   const { history } = props;
//   const addTool = tool => {
//   axios.post('https://usemytools.herokuapp.com/api/tools/', tool)
//     return api.addTeamMember(tool)
//       .then(() => history.push("/"));
//   };

// const Edit = async (id, body) => {
//   try {
//     const response = await axios.put('https://usemytools.herokuapp.com/api/tools/:id', );
//     console.log('Returned data:', response);
//   } catch (e) {
//     console.log(`Axios request failed: ${e}`);
//   }
// }
const updateTool = (e) => {
  e.preventDefault
{
  e.id
  e.userId
  e.toolName
  e.deposit
  e.price
  e.description
  e.imageUrl
  e.isRented
}
  this.state
{
  this.id
  this.userId
  this.toolName
  this.deposit
  this.price
  this.description
  this.imageUrl
  this.isRented
}
axios.post('https://usemytools.herokuapp.com/api/tools/`$(id)`)
}


//   return (
//     <div>
//       <h1>Add Tool</h1>
//       <TeamForm {...props} buttonText="Add Tool" submitTool={addTool} />
//     </div>
//   );
// ;
export default Edit;