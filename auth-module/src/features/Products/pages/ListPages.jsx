import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productsApi';
import ProductsList from '../components/ProductsList';
import ProductsSkeleton from '../components/ProductsSkeleton';

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 0', // là full width còn lại của thằng cha
  },
}));

function ListPages(props) {
  const classes = useStyles();
  const [productsList,setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        const {data} = await productApi.getAll({ _page: 1, _limit: 10 });
            setProductsList(data);
      })();
    } catch (error) {
        console.log('Failed to get data', error);
    }

    setLoading(false)
  }, []);
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Fillter</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
                {loading ? <ProductsSkeleton /> : <ProductsList productList={productsList}/>}
            </Paper> 
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPages;
