import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './Filter/FilterByCategory';

ProductsFilter.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function ProductsFilter({ filters, onChange }) {
  const handleChangeCategory = (newCategoryId) => {
    if (onChange) {
      const newFilter = {
        ...filters,
        'category.id': newCategoryId,
      };
      onChange(newFilter);
    }
  };
  return (
    <Box>
      <FilterByCategory onChange={handleChangeCategory} />
    </Box>
  );
}

export default ProductsFilter;
