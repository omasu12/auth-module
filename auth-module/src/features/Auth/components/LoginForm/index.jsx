import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/FormControl/InputField';
import PasswordField from '../../../../components/FormControl/PasswordField';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(2),
  },

  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    textAlign: 'center',
  },

  submit: {
    padding: '5 10',
    margin: theme.spacing(3, 0, 2, 0),
  },
  progress: {
    position: 'absolute',
    top: '-10px',
    left: 0,
    right: 0,
  },
}));

function LoginForm(props) {
  const schema = yup.object().shape({
    identifier: yup.string().required('Please enter title').email('Please enter email'),
    password: yup
      .string()
      .required('Please enter your password')
      .min(5, 'Please enter at least 6 characters'),
  });
  const classes = useStyles();
  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const handleForm = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    form.reset();
  };
  const { isSubmitting } = form.formState;
  return (
    // form.handleSubmit là hàm có sẵn của hook-form
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h6">
        Sign In
      </Typography>
      <form onSubmit={form.handleSubmit(handleForm)}>
        <InputField name="identifier" label="Email" type="email" form={form} />
        <PasswordField name="password" label="Password" type="password" form={form} />

        <Button
          disabled={isSubmitting}
          type="submit"
          fullWidth
          color="primary"
          variant="contained"
          className={classes.submit}
        >
         Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
