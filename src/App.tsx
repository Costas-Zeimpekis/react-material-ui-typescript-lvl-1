import React from 'react';
import Typography from '@material-ui/core/Typography';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { ThemeProvider } from '@material-ui/styles';
import ThemeButton from './components/ThemeButton/ThemeButton';

export const themeInstance = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
};

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  }
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography variant="h1" component="h2">
        This is Material Ui
      </Typography>
      <ThemeProvider theme={themeInstance}>
        <ThemeButton />
      </ThemeProvider>
    </div>
  );
};

export default App;
