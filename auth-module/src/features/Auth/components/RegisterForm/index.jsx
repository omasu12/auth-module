import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar } from '@material-ui/core';
// import { LockOutlinedIcon  } from '@material-ui/icons/LockOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/FormControl/InputField';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('Please enter title').min(5, 'too short'),
  });
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });
  const handleForm = (values) => {
    const { onSubmit } = props;
    console.log(values.title);
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };
  return (
    // form.handleSubmit là hàm có sẵn của hook-form
    <div>
        <Avatar>
            {/* <LockOutlinedIcon /> */}
        </Avatar>

      <form onSubmit={form.handleSubmit(handleForm)}>
        <InputField name="title" label="animeForm" form={form} />
      </form>
    </div>
  );
}

export default RegisterForm;
