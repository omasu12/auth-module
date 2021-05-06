import React from 'react';
import PropTypes from 'prop-types';
import { Tab,Tabs } from '@material-ui/core';

ProductsSort.propTypes = {
  currentValue: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductsSort({ currentValue, onChange }) {
    const handleChangeTab = (e,newValue)=>{
        if(onChange) 
        onChange(newValue);
    }
  return (
    <Tabs
      value={currentValue}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChangeTab}
      aria-label="disabled tabs example"
    >
      <Tab label="Giá giảm dần" value="salePrice:DESC" />
      <Tab label="Giá tăng dần" value="salePrice:ASC" />
    </Tabs>
  );
}

export default ProductsSort;
