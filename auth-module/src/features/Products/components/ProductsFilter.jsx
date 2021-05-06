import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './Filter/FilterByCategory';
import FilterByPrice from './Filter/FilterByPrice';
import FilterByService from './Filter/FilterByService';

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
  }

  const handleChange = (values)=>{
    if(onChange) onChange(values)
  }
  return (
    <Box>
      <FilterByCategory onChange={handleChangeCategory} />

      <FilterByPrice onChange={handleChange} />

      <FilterByService onChange={handleChange} filter={filters}/>
    </Box>
  );
}

export default ProductsFilter;
