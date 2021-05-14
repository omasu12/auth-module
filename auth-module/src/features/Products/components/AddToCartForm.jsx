import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import QualityField from '../../../components/FormControl/QuantityField';
AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit }) {
  const schema = yup.object().shape({
    quantity: yup.number().min(1, 'Please enter at least 1').required(),
  });

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });
  const handleForm = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  return (
    <Box>
      <form onSubmit={form.handleSubmit(handleForm)}>
        <QualityField name="quantity" label="Quantity" form={form} />

        <Button type="submit" fullWidth color="primary" variant="contained">
          Buy
        </Button>
      </form>
    </Box>
  );
}

export default AddToCartForm;
