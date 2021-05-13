import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { DEFAULT_IMAGE, STATIC_HOST } from '../../../constants/index';

ProductThump.propTypes = {
    products: PropTypes.object,
};

function ProductThump({products}) {
    const thumbnailUrl = products.thumbnail ? STATIC_HOST + products.thumbnail?.url : DEFAULT_IMAGE;
    return (
        <Box>
            <img src={thumbnailUrl} alt={products.name} width="100%" />
        </Box>
    );
}

export default ProductThump;