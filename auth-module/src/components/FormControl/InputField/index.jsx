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
  const { formState } = form;
  // console.log();
  // const messagesError = formState.touchedFields[name] && formState.errors[name];
  return (
    <>
      <Controller
        render={({ field }) => <TextField {...field} />}
        name={name}
        control={form.control}
        label={label}
        fullWidth
        disabled={disabled}
        // !! là phủ định
      >
      </Controller>
      <p>{formState.errors[name]?.message}</p>
    </>
  );
}

export default InputField;
