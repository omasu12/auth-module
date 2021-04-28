import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Products from './Products';

ProductsList.propTypes = {
  productList: PropTypes.array,
};

function ProductsList({ productList }) {
  return (
    <Box>
      <Grid container>
        {productList.map((products) => (
          <Grid item xs={12} md={3} lg={4} key={products.id}>
            <Products products={products} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductsList;
