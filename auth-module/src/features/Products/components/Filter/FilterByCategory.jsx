import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import category from '../../../../api/category';

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

const useStyle = makeStyles((theme) => ({
  root: {
    padding:theme.spacing(2)
  },

  menu: {
    padding: 0,
    margin: 0,
    listStyle: 'none',

    '&>li': {
      margin:theme.spacing(1),

      '&:hover':{
        cursor:'pointer',
      }
    },
  },
  cap: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
}));
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
    <Box className={classes.root}>
      <Typography className={classes.cap}>Danh mục sản phẩm</Typography>
      <ul className={classes.menu}>
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
