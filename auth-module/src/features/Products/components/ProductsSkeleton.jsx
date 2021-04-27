import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

ProductsSkeleton.propTypes = {
  length: PropTypes.number,
};

ProductsSkeleton.defaultProps = {
  length: 6,
};

function ProductsSkeleton({ length }) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) =>
         <Grid item xs={12} md={3} lg={4} key={index}>
            <Box padding={1}>
              <Skeleton variant="rect" width="100%" height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default ProductsSkeleton;
