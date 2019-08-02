import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


function ToolDetails({ tool   }) {


  const { imageUrl, toolName, description, id, userId, price, isRented } = tool;

  // console.log('ToolList.js -> %ctool:', 'color: orange', tool)
  const classes = useStyles();

 
  return (
<section className= "cards">
<Card className={classes.card} >
  <CardActionArea>
    <CardMedia
      className={classes.media}
      image={imageUrl}
      title={toolName}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
      {toolName}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
      <em>Description:</em> {description}
        ID: {id}
        <strong> userId: </strong>{userId}
        Price: {price}
        Availablity:  {isRented}

      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
    <Button size="small" color="primary">
      Rent
    </Button>
    <Button size="small" color="primary">
      Add One Like This
    </Button>
    <Link to={`/edit/${id}`}  className="menuLink">    <Button size="small" color="primary">
      Edit This Tool
    </Button></Link>
    </CardActions>
</Card>

</section>

)}      


 const ToolList = props => {
 
  const [tools, setTools] = useState([])
 
  useEffect(() => {
    const getTools = () => {
      axios
        .get('https://usemytools.herokuapp.com/api/tools')
        .then(response => {
          setTools(response.data);
          console.log('ToolList.js -> %cresponse.data:', 'color: indigo', response.data)
        })
        .catch(error => {
         
          console.error('ToolList.js -> %cData is not coming through. Check this out -', 'color: maroon', error)
        });
    }
    
    getTools();
  }, []);
 
  console.log('ToolList.js -> %ctools:', 'color: dodgerblue', tools)
    return (
      
         
  
     <div className="tool-list">


  

       
       { tools.tools && tools.tools.map(tool => (
          <div>
           
            <ToolDetails key={tool.id} tool={tool} />
        
      
          </div>
  
        ))}
  
        </div>

     
    )
  }
      

 
            

 export default ToolList

