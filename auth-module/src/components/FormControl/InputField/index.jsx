import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

function InputField(props) {
  const { form, name, label, disabled, type } = props;
  const { formState } = form;
  const messagesError = formState.errors[name];
  console.log(formState);
  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            label={label}
            type={type}
            variant="outlined"
            error={messagesError}
            fullWidth
            helperText={formState.errors[name]?.message}
            margin="normal"
            {...field}
          />
        )}
        name={name}
        control={form.control}
        disabled={disabled}
        // !! là phủ định ?.là syntax
      ></Controller>
    </>
  );
}

export default InputField;
