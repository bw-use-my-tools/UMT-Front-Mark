import React, { useState, useEffect } from 'react';
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

function ToolDetails({ props   }) {
  const { image_url, description, id, user_id, price, is_rented } = props;
  const classes = useStyles();

 
  return (

  <section className="cards">
  <Card className={classes.card}>
  <CardActionArea>
    <CardMedia
      className={classes.media}
      image={image_url}
      title={props.tool}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
      {props.tool}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
      <em>Description:</em> {props.description}
        ID: {props.id}
        <strong> user_id: </strong>{props.user_id}
        Price: {props.price}
        Availablity:  {props.is_rented}

      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
    <Button size="small" color="primary">
      Rent
    </Button>
    <Button size="small" color="primary">
      Add a Tool
    </Button>
  </CardActions>
</Card>
</section>


)}      


 const ToolList = props => {
 
  const [tools, setTools] = useState([])
 
  // const { params } = match;
  // const{id}={params};

  useEffect(() => {
    const getTools = () => {
      axios
        .get('https://usemytools.herokuapp.com/api/tools')
        .then(response => {
          setTools(response.data);
        })
        .catch(error => {
         
          console.error('ToolList.js -> %cData is not coming through. Check this out -', 'color: maroon', error)
        });
    }
    
    getTools();
  }, []);
 

    return (
      <div className="tool-list">
        {Array.from(tools).map(tool => (
          <div>
           
            <ToolDetails key={tool.id} tool={tool} />
  
  
      
          </div>
  
        ))}
  
        </div>
    )
  }
      

 
            

 export default ToolList

