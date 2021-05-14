import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { formatPrice } from '../../../utils/common';
const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },

  description: {
    margin: theme.spacing(2, 0),
  },
  boxPrice: {
    background: theme.palette.grey[100],
    padding: theme.spacing(3),
  },
  salePrice: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: 'bold',
  },
  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: 'line-thought',
  },
}));
ProductsInfo.propTypes = {
  products: PropTypes.object,
};

function ProductsInfo({ products }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = products;
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h5">
        {name}
      </Typography>
      <Typography className={classes.description} variant="body2">
        {shortDescription}
      </Typography>
      <Box className={classes.boxPrice}>
        <Box className={classes.salePrice} component="span">
          {formatPrice(salePrice)}
        </Box>
        {promotionPercent > 0 && (
          <>
            <Box className={classes.originalPrice} component="span">
              {formatPrice(originalPrice)}
            </Box>
            <Box component="span">-{promotionPercent}%</Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductsInfo;
