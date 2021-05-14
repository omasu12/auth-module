import { Paper } from '@material-ui/core';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import React from 'react';
ProductsDescription.propTypes = {
  products: PropTypes.object,
};

function ProductsDescription({ products }) {
    const safeDescription = DOMPurify.sanitize(products.description)
  return (
    <Paper elevation={0} style={{padding:'15px'}}>
        <div dangerouslySetInnerHTML={{__html:safeDescription}}  />
    </Paper>
  );
}

export default ProductsDescription;
