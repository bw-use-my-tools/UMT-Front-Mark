import React  from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Add from './ToolViews/ToolAdd.js';
import Remove from './ToolViews/ToolRemove.js'
import Edit from './ToolViews/ToolEdit.js';
import ToolList from "./ToolViews/ToolList"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// import Form from  "./ToolViews/ToolForm.js"


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const App = () => {

  const classes = useStyles();
  return (

   <main>

  <section className="nav">

    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="navBar">
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h7" className={classes.title} id="lynx">
        <Link to="/"  className="menuLink"> View Tools </Link>
        <Link to="/add"  className="menuLink"> Add Tool  </Link> 
        <Link to="/edit"  className="menuLink">  Edit Tool  </Link>
        <Link to="/remove"  className="menuLink">  Remove Tool  </Link>
        </Typography>
        <Typography variant="h4" className={classes.title}>
            Use My Tools - Tool List
          </Typography>
          <Button color="inherit" className="loginBtn">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    </section>

    <section className="links">
     

      <Route exact path="/" component={ToolList}/>
      <Route exact path="/add" component={Add} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/remove" component={Remove} />
      

   
    </section>

    </main>
  );
}

export default App;