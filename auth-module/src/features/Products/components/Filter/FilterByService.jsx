import React from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from '@material-ui/core';

FilterByService.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.object,
};

const useStyle = makeStyles((theme) => ({
  root: {
      padding:theme.spacing(2)
  },
  checkbox:{
      listStyle:'none',
      margin:0,
      padding:0,
      '& > li':{
        padding:0,
        margin:0
      }
  }
}));
function FilterByService({ onChange, filter }) {
  const classes = useStyle();

  const handleChange = (e) => {
    const { name, checked } = e.target;

    if (!onChange) return;

    onChange({ [name]: checked });
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">GIÁ</Typography>
      <ul className={classes.checkbox}>
        {[
          { value: 'isPromotion', label: 'Có khuyến mãi' },
          { value: 'isFreeShip', label: 'Free ship' },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filter[service.value])}
                  onChange={handleChange}
                  name={service.value}
                  color="primary"
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
