import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';
import { Box, makeStyles, Typography } from '@material-ui/core';

CategorySkeleton.propTypes = {
  length: PropTypes.number,
};
CategorySkeleton.defaultProps = {
  length: 6,
};
const useStyle = makeStyles((theme) => ({
    root: {
      padding:theme.spacing(2)
    },
    cap: {
        textAlign: 'center',
        fontWeight: 'bold',
      },
  }));
function CategorySkeleton({ length }) {
    const classes = useStyle()
  return (
    <Box className={classes.root}>
      <Typography className={classes.cap} >Danh mục sản phẩm</Typography>
      {Array.from(new Array(length)).map((x, index) => (
        <Skeleton  key={index}/>
      ))}
    </Box>
  );
}

export default CategorySkeleton;
