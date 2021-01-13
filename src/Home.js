import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import github from './github.png';
import linkedin from './linkedin-icon.svg';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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

const Home = () => {
  
  const classes = useStyles();

  let [emailCopied, setEmailCopied] = React.useState(false);

  return (
    <div className={classes.root}>
      <Typography className={classes.h1}>nate.technology</Typography>
      <div className={classes.buttonGroup}>
        <div className={classes.buttonContainer}>
          <Button 
            variant="contained" 
            color="default" 
            className={classes.button}
            onClick={() => {window.location.href = 'https://github.com/nmyers322'}}>
            <img src={github} className={classes.github} alt="Github" />
          </Button>
        </div>
        <div className={classes.buttonContainer}>
          <Button 
            variant="contained" 
            color="default" 
            className={classes.button}
            onClick={() => {window.location.href = 'https://www.linkedin.com/in/nmyers322/'}}>
            <img src={linkedin} className={classes.linkedin} alt="LinkedIn" />
          </Button>
        </div>
        <div className={classes.buttonContainer}>
          <Button 
            variant="contained" 
            color="default" 
            className={classes.button}
            onClick={() => {window.location.href = 'tel:15032694228'}}>
            <Typography className={classes.buttonText}>Phone: +1 503 269 4228</Typography>
          </Button>
        </div>
        <div className={classes.buttonContainer}>
          <CopyToClipboard 
            text={"nmyers322@gmail.com"}
            onCopy={() => setEmailCopied(true)}>
            <Button 
              variant="contained" 
              color="default" 
              className={classes.button}>
              <Typography className={classes.buttonText}>Email: nmyers322@gmail.com</Typography>
            </Button>
          </CopyToClipboard>
        </div>
        <div className={classes.buttonContainer}>
          <Button 
            variant="contained" 
            color="default" 
            className={classes.button}
            onClick={() => {window.location.href = '/portfolio'}}>
            <Typography className={classes.buttonText}>Portfolio</Typography>
          </Button>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={emailCopied}
        autoHideDuration={6000}
        onClose={() => setEmailCopied(false)}
        message="Email copied to clipboard!"
      />
    </div>
  );
}

export default Home;
