import React, { useState, useEffect } from 'react';
import ToolList from "./ToolList"
import Button from '@material-ui/core/Button';


const Form = (props) => {
  console.log('These are the props', props);
  // const {id, userId, props.toolName, deposit, price, description, imageUrl, isRented } = props.props.tool
  const { submitTool, initialTool, buttonText } = props;


  const inputTool = event => {
    props.setTool({...props.props.tool, [event.target.name]: event.target.value});
  };

  useEffect(() => {
    console.log("first render");
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    submitTool(props.tool);
    props.setTool({ id: "", userId: "", toolName: "", deposit: "", price: "", description: "", imageUrl: "", isRented: ""})};
  
   return (
     <div>
  
    <form onSubmit={onSubmit}
          style={{display: "flex", flexDirection: "column", maxWidth: "500px", margin: "0 auto"}}>
      <input placeholder="Tool ID"
            label="Tool ID"
             value={props.tool.id}
             name="id"
             onChange={inputTool}
      />
      <input placeholder="User Id"
             value={props.tool.userId}
             name="userId"
             onChange={inputTool}
      />
      <input placeholder="Tool Name"
             value={props.toolName}
             name="props.toolName"
             onChange={inputTool}
      />
       <input placeholder="Deposit Required"
             value={props.tool.deposit}
             name="deposit"
             onChange={inputTool}
      />
       <input placeholder="Price"
             value={props.tool.price}
             name="price"
             onChange={inputTool}
      />
       <input placeholder="Tool Description"
             value={props.tool.description}
             name="description"
             onChange={inputTool}
      />
       <input placeholder="Image URL"
             value={props.tool.imageUrl}
             name="imageUrl"
             onChange={inputTool}
      />
       <input placeholder="Availability"
             value={props.tool.isRented}
             name="isRented"
             onChange={inputTool}
      />


      <button type="submit">{buttonText}</button>
      <Button size="small" color="primary">
Remove Tool    </Button>
    </form>
    </div>
  );
};

export default Form;