import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { themeInstance } from '../../App';

const useStyles = makeStyles((theme: typeof themeInstance) => ({
  root: {
    background: theme.background,
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  }
}));

const ThemeButton = () => {
  const classes = useStyles();

  return (
    <button type="button" className={classes.root}>
      Theming
    </button>
  );
};

export default ThemeButton;
