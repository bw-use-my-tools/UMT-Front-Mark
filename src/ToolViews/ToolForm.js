import React, { useState, useEffect } from 'react';

const Form = (props) => {
  console.log(props);
  const { submitTool, initialTool, buttonText } = props;
  const [tool, setTool] = useState(initialTool || { id: "", userId: "", toolName: "", deposit: "", price: "", description: "", imageUrl: "",isRented: ""});
  const inputTool = event => {
    setTool({...tool, [event.target.name]: event.target.value});
  };

  useEffect(() => {
    console.log("first render");
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    submitTool(tool);
    setTool({ id: "", userId: "", toolName: "", deposit: "", price: "", description: "", imageUrl: "", isRented: ""})};
  

  return (
    <form onSubmit={onSubmit}
          style={{display: "flex", flexDirection: "column", maxWidth: "500px", margin: "0 auto"}}>
      <input placeholder="Tool ID"
            label="Tool ID"
             value={tool.id}
             name="id"
             onChange={inputTool}
      />
      <input placeholder="User Id"
             value={tool.userId}
             name="userId"
             onChange={inputTool}
      />
      <input placeholder="Tool Name"
             value={tool.toolName}
             name="toolName"
             onChange={inputTool}
      />
       <input placeholder="Deposit Required"
             value={tool.deposit}
             name="deposit"
             onChange={inputTool}
      />
       <input placeholder="Price"
             value={tool.price}
             name="price"
             onChange={inputTool}
      />
       <input placeholder="Tool Description"
             value={tool.description}
             name="description"
             onChange={inputTool}
      />
       <input placeholder="Image URL"
             value={tool.imageUrl}
             name="imageUrl"
             onChange={inputTool}
      />
       <input placeholder="Availability"
             value={tool.isRented}
             name="isRented"
             onChange={inputTool}
      />


      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Form;