import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Products from './Products';

ProductsList.propTypes = {
  productList: PropTypes.array,
};

function ProductsList({ productList }) {
  console.log(productList,'s');
  return (
    <Box>
      <Grid container>
        {productList.map((products) => (
          
          <Grid item xs={12} md={3} lg={4} key={products.id}>
            <Products products={products} />
          </Grid>
        ))}

        {/* {if(productList.length >0)} */}
      </Grid>
    </Box>
  );
}

export default ProductsList;
