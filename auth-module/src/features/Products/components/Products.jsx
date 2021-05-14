import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_IMAGE, STATIC_HOST } from '../../../constants/index';
import { formatPrice } from '../../../utils';

Products.propTypes = {
  products: PropTypes.object,
};

const useStyle = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    '&:hover': {},
  },
}));
function Products({ products }) {
  const classes = useStyle();
  const thumbnailUrl = products.thumbnail ? STATIC_HOST + products.thumbnail?.url : DEFAULT_IMAGE;
  return (
    <Link to={`/products/${products.id}`}>
      <Box padding={1} className={classes.root}>
        <Box padding={1} minHeight="215px">
          <img src={thumbnailUrl} alt={products.name} width="200px" />
        </Box>
        <Typography variant="body2">{products.name}</Typography>
        <Typography variant="body2">
          <Box mr={1} component="span" fontSize="15px" fontWeight="bold">
            {formatPrice(products.salePrice)}
          </Box>
          {products.promotionPercent > 0 ? `-${products.promotionPercent}%` : ''}
        </Typography>
      </Box>
    </Link>
  );
}

export default Products;
