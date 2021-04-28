import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React from 'react';
import { DEFAULT_IMAGE, STATIC_HOST } from '../../../constants/index';

Products.propTypes = {
  products: PropTypes.object,
};

function Products({ products }) {
  const thumbnailUrl = products.thumbnail ? STATIC_HOST + products.thumbnail?.url : DEFAULT_IMAGE;
  return (
    <Box padding={1}>
      <Box padding={1} minHeight="215px">
        <img src={thumbnailUrl} alt={products.name} width="200px" />
      </Box>
      <Typography variant="body2">{products.name}</Typography>
      <Typography variant="body2">
        <Box mr={1} component="span" fontSize="15px" fontWeight="bold">
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
            products.salePrice
          )}
        </Box>
        {products.promotionPercent > 0 ? `-${products.promotionPercent}%` : ''}
      </Typography>
    </Box>
  );
}

export default Products;
