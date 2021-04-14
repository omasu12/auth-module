import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  return (
    <Controller
      render={({ field }) => <TextField {...field} />}
      name={name}
      control={form.control}
      label={label}
      fullWidth
    >
      {/* <TextField fullWidth/> */}
    </Controller>
  );
}

export default InputField;