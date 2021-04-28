import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import category from '../../../../api/category';

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const [listCate, setListCate] = useState([]);
  useEffect(() => {
    try {
      (async () => {
        const list = await category.getAll();
        setListCate(
          list.map((x) => ({
            name: x.name,
            id: x.id,
          }))
        );
      })();
    } catch (error) {
      console.log('Fail to get data', error);
    }
  }, []);
  const handleClickCategory = (category) => {
    if (onChange) onChange(category.id);
  };
  return (
    <Box>
      <ul>
        {listCate.map((category) => (
          <li key={category.id} onClick={() => handleClickCategory(category)}>
            {category.name}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
