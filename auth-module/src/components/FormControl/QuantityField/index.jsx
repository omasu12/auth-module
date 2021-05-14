import { Box, IconButton, makeStyles, TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
};

const useStyles = makeStyles({
  root: {},

  box: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 'row nowrap',
    maxWidth: '200px',
  },
});
function QuantityField(props) {
  const classes = useStyles();
  const { form, name, label } = props;
  const { formState, setValue } = form;
  const messagesError = formState.errors[name];

  return (
    <FormControl fullWidth margin="normal" variant="outlined">
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <Box className={classes.box}>
            <IconButton
              onClick={() => {
                setValue(name, Number.parseInt(field.value) - 1);
              }}
            >
              <RemoveCircleOutline />
            </IconButton>
            <TextField
              label={label}
              type="number"
              variant="outlined"
              error={messagesError}
              fullWidth
              helperText={formState.errors[name]?.message}
              id={name}
              margin="normal"
              {...field}
            />
            <IconButton  onClick={() => {
                setValue(name, Number.parseInt(field.value) + 1);
              }}>
              <AddCircleOutline />
            </IconButton>
          </Box>
        )}
      />
    </FormControl>
  );
}

export default QuantityField;
