import React, {useEffect, useState} from 'react';

import ToolForm from "./ToolForm.js"
import axios from "axios"


const ToolEdit = props => {
 
  // const [tool, setTool] = useState([]);

  const toolBody =  {
         "id":"id",
         "userId": "userId" ,
         "toolName": "toolName" ,
         "deposit": "deposit",
         "price":"price" ,
         "description":"description",
         "imageUrl": "imageUrl" ,
         "isRented": "isRented" 
       } 
   
    useEffect(() => {
  axios.put(`https://usemytools.herokuapp.com/api/tools/`, toolBody)
  // ${id}
    .then(response => {
      console.log('Put Response :', response);
    })
    .catch(error => {
         
      console.error('ToolList.js -> %cData is not coming through. Check this out -', 'color: maroon', error)
    });



}, []);
console.log('ToolEdit')
  return (
    <div>
      <h1>Add Tool</h1>
      <ToolForm {...props} tool={props.tool} setTool={props.setTool} buttonText="Add Tool" />
    </div>
  );
};


export default ToolEdit;