import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
  appbarStyles: {
    marginBottom: 10,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.appbarStyles}>
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          This is header
        </Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
