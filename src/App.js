import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import laurelhurst from './laurelhurst.jpg';

const useStyles = makeStyles({
  buttonContainer: {
    flex: 1,
    marginTop: '1vh'
  },
  buttonGroup: {
    marginTop: '20vh',
    textAlign: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  h1: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: '\'JetBrains Mono\', monospace',
    fontSize: '4vh',
    fontWeight: 'bold',
    letterSpacing: '1vh',
    textShadow: '1vh 1vh #000000'
  },
  root: {
    background: `url(${laurelhurst})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-start',
    marginTop: '0',
    paddingTop: '5vh',
    objectFit: 'cover',
    width: '100%',
  },
});

const App = () => {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1 className={classes.h1}>nate.technology</h1>
        <div className={classes.buttonGroup}>
          <div className={classes.buttonContainer}>
            <Button 
              variant="contained" 
              color="default" 
              className={classes.button}
              onClick={() => {window.location.href = 'https://www.linkedin.com/in/nmyers322/'}}>
              LinkedIn
            </Button>
          </div>
          <div className={classes.buttonContainer}>
            <Button 
              variant="contained" 
              color="default" 
              className={classes.button}
              onClick={() => {window.location.href = 'tel:15032694228'}}>
              Phone: +1 503 269 4228
            </Button>
          </div>
          <div className={classes.buttonContainer}>
            <Button 
              variant="contained" 
              color="default" 
              className={classes.button}
              onClick={() => {window.location.href = 'mailto:nmyers322@gmail.com'}}>
              Email: nmyers322@gmail.com
            </Button>
          </div>
        </div>
    </div>
  );
}

export default App;
