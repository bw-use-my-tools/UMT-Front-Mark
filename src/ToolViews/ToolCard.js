import React from 'react';
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

const ToolCard = (props) => {
console.log('ToolCard.js -> %cprops:', 'color: violet', props)
  const classes = useStyles();

  return (

  
  <Card className={classes.card}>
  <CardActionArea>
    <CardMedia
      className={classes.media}
      image={props.image_url}
      title={props.tool}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
      {props.props}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
      <em>Description:</em> {props.description}
        ID: {props.id}
        <strong> user_id: </strong>{props.user_id}
        Price: {props.price}
        Availablity:  {!props.is_rented}

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



)}

export default ToolCard