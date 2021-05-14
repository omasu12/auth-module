import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',

    listStyle: 'none',
    padding: 0,
    '& > li': {
      padding: theme.spacing(2, 4),
    },
    '& > li > a': {
      color: theme.palette.secondary,
    },
    '& > li > a:hover': {},
  },
}));

function ProductsDetailTab(props) {
  const classes = useStyles();
  const match = useRouteMatch();
  return (
    <Box component="ul" className={classes.root}>
      <li>
        <NavLink to={`${match.url}`} exact>
          Description
        </NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/additional`} exact>
          Additional Information
        </NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/reviews`} exact>
          Reviews
        </NavLink>
      </li>
    </Box>
  );
}

export default ProductsDetailTab;
