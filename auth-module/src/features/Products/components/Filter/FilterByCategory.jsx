import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import category from '../../../../api/category';

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

const useStyle = makeStyles(theme=>({
  root:{},


}))
function FilterByCategory({ onChange }) {
  const [listCate, setListCate] = useState([]);
  const classes = useStyle();
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
      <Typography>Danh mục sản phẩm</Typography>
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
