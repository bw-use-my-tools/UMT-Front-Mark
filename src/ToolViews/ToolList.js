import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ToolCard from "./ToolAdd.js"







const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



 const ToolList = props => {
  const classes = useStyles();

  const [tools, setTools] = useState([])
 
  // const { params } = match;
  // const{id}={params};

  useEffect(() => {
   
      axios
        .get('https://rent-mytools.herokuapp.com/api/tools')
        .then(response => {
          setTools(response.data);
          console.log('ToolList.js -> %cresponse.data:', 'color: aqua', response.data)
          
          
       
        })
        .catch(error => {
          console.error('Error - Data is not flowing. Check this out: ', error);
        });
    }
   
  , []);
 
  return (
   
    <div className="tool-list">
      
    

    <div>{ Array.from(tools).map((tool,index) =><ToolCard />)}</div>
  
    
   </div>
  )
  
 }
 
 export default ToolList

