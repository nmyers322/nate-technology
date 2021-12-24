import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  buttonContainer: {
    flex: 1,
    marginTop: '3vh'
  },
  buttonGroup: {
    marginTop: '20vh',
    textAlign: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  buttonText: {
    fontFamily: '\'JetBrains Mono\', monospace',
    fontSize: '2vh',
    fontWeight: 'bold',
    color: "#000000"
  },
  github: {
    maxWidth: '20vw'
  },
  h1: {
    color: '#FFFFFF',
    backdropFilter: 'blur(10px)',
    textAlign: 'center',
    fontFamily: '\'JetBrains Mono\', monospace',
    fontSize: '16pt',
    fontWeight: 'bold',
    letterSpacing: '1vh',
    textShadow: '1vh 1vh #000000',
    padding: '2vh'
  },
  linkedin: {
    maxWidth: '20vw',
    marginTop: '10px',
    marginBottom: '10px'
  },
  root: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-start',
    marginTop: '0',
    paddingTop: '5vh',
    width: '100%',
  },
});

const Portfolio = () => {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.h1}>Recent Projects</Typography>
      <div className={classes.buttonGroup}>
        <div className={classes.buttonContainer}>
          <Button 
            variant="contained" 
            color="default" 
            className={classes.button}
            onClick={() => window.location.href = "/"}>
            <Typography className={classes.buttonText}>Go Back</Typography>
          </Button>
        </div>
        <div className={classes.buttonContainer}>
          <Button 
            variant="contained" 
            color="default" 
            className={classes.button}
            onClick={() => window.location.href = "https://dev.to/nmyers322/virtual-bar-video-chat-app-for-twilio-hackaton-12mg"}>
            <Typography className={classes.buttonText}>Virtual Bar</Typography>
          </Button>
        </div>
        <div className={classes.buttonContainer}>
          <Button 
            variant="contained" 
            color="default" 
            className={classes.button}
            onClick={() => window.location.href = "https://kaos.pw"}>
            <Typography className={classes.buttonText}>Kaos.pw - Cryptographically secure random password generator</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
