import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop:'1px solid gray',
  },

  range: {
    display:'flex',
    flexGrow:'row nowrap',

    '& > span':{
        padding:theme.spacing(2)
    }
  },
}));

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const classes = useStyle();
  const [value, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (onChange) onChange(value);
  };
  return (
    <Box className={classes.root} borderTop="grey.500">
      <Typography variant="subtitle2">GIÁ</Typography>

      <Box className={classes.range}>
        <TextField name="salePrice_gte" value={value.salePrice_gte} onChange={handleChange} />
        <span>-</span>
        <TextField name="salePrice_lte" value={value.salePrice_lte} onChange={handleChange} />
      </Box>

      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
