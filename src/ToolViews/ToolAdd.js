import React from 'react';
import ToolForm from './ToolForm.js';
import axios from 'axios';

// const AddTool = tool => {
// //  setTools([...tools, {...tool, id: Date.now()}]);
// axios.post('https://usemytools.herokuapp.com/api/tools/', tool)
// .then(response => {
//   setTools([...tools, response.data])
// });

// .catch(err => {
//   console.log(err);
// });



// const editTool = newTool => {
// const toolsCopy = [...tools];
// const oldTool = toolsCopy.find(tool=> tool.id === newTool.id);
// Object.assign(oldTool, newTool);
// setTools(toolsCopy);
 

// return (    
//   <div className="App">
//   <Link to="/">Home</Link>
//   <Link to="/add">AddTool</Link>

//   <Route path="/add"
//   render={props => <ToolForm {...props}
//   initialTool={tools.find(tool => tool.id
//    toString() === props.match.params.id)}
//                           submitTool={addTool}
//                           buttonText="Add Tool"
//                           />}
//                       />
          
//   </div>
//   }

// )
// };


  const AddTool = tool => {

    const toolBody= {
      "id": 10,
      "userId": 1,
      "toolName": "DeWalt Hammerdrill",
      "deposit": 35,
      "price": 254.99,
      "description": "I hit things as I drill.  Good for concrete and masonry",
      "imageUrl": " https://images.homedepot-static.com/productImages/d6c60623-510a-4199-af91-d633bc88577f/svn/dewalt-hammer-drills-dcd985b-64_1000.jpg",
      "isRented": 0
    }
    axios.post('https://usemytools.herokuapp.com/api/tools/', toolBody)
   
 
  .then(response => {
    console.log('Response:',response);
  })
  .catch(err => {
    console.log(err);
  });

  return (
    <div>
      <h1>Add Tool</h1>
      {/* <ToolForm {...props} buttonText="Add Tool" submitTool={addTool} /> */}
    </div>
  );
};


export default AddTool;



