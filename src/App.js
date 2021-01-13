import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import laurelhurst from './laurelhurst.jpg';
import Home from './Home';
import Portfolio from './Portfolio';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const useStyles = makeStyles({
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
    objectFit: 'cover',
    width: '100%',
  },
});

const App = () => {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
