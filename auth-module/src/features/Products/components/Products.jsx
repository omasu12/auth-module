import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

Products.propTypes = {
  products: PropTypes.object,
};

function Products({products}) {
    console.log(products);
  return (
    <Box padding={1}>
      <Skeleton variant="rect" width="100%" height={118} />
      <Typography variant='body2'>{products.name}</Typography>
      <Typography variant='body2'>{products.salePrice} - {products.promotionPercent}</Typography>
    </Box>
  );
}

export default Products;
