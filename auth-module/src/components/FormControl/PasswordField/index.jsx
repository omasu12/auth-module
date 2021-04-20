import { makeStyles, TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

const useStyles = makeStyles({
  customBtn: {
    position: 'absolute',
    right: '0',
    top: '30%',
  },
});
function PasswordField(props) {
  const classes = useStyles();
  const { form, name, label } = props;
  const { formState } = form;
  const messagesError = formState.errors[name];

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <FormControl fullWidth margin="normal" variant="outlined">
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <>
            <TextField
              label={label}
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              error={messagesError}
              fullWidth
              helperText={formState.errors[name]?.message}
              id={name}
              margin="normal"
              {...field}
            />
            <InputAdornment position="end">
              <IconButton
                className={classes.customBtn}
                aria-label="toggle password visibility"
                onClick={togglePassword}
                // edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          </>
        )}
      />
    </FormControl>
  );
}

export default PasswordField;
