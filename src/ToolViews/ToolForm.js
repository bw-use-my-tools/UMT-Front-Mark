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
      <input placeholder="name"
             value={tool.name}
             name="name"
             onChange={inputTool}
      />
      <input placeholder="email"
             value={tool.email}
             name="email"
             onChange={inputTool}
      />
      <input placeholder="role"
             value={tool.role}
             name="role"
             onChange={inputTool}
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Form;