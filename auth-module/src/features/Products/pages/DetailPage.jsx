import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AddToCartForm from '../components/AddToCartForm';
import ProductsAdditional from '../components/ProductsAdditional';
import ProductsDescription from '../components/ProductsDescription';
import ProductsDetailTab from '../components/ProductsDetailTab';
import ProductsInfo from '../components/ProductsInfo';
import ProductThump from '../components/ProductThump';
import useProduct from '../hooks/useProduct';
const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '400px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },

  right: {
    flex: '1 1 0', // là full width còn lại của thằng cha
    padding: theme.spacing(1.5),
  },
}));

function DetailPage() {
  const classes = useStyles();
  const match = useRouteMatch();
  console.log(match.params.productID);
  const { products, loading } = useProduct(match.params.productID);
  console.log(match.url);
  if (loading) {
    return <Box>Loading</Box>;
  }
  const handleSubmitCart = (values) => {
    console.log(values, 'cart');
  };
  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThump products={products} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductsInfo products={products} />

              <AddToCartForm onSubmit={handleSubmitCart}/>
            </Grid>
          </Grid>
        </Paper>

        <ProductsDetailTab/>

        <Switch>
          <Route path={match.url} exact>
              <ProductsDescription products={products} />
          </Route>
          <Route path={`${match.url}/additional`} component={ProductsAdditional} exact/>
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
