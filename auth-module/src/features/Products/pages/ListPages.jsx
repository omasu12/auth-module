import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productsApi';
import ProductsFilter from '../components/ProductsFilter';
import ProductsList from '../components/ProductsList';
import ProductsSkeleton from '../components/ProductsSkeleton';
import ProductsSort from '../components/ProductsSort';

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 0', // là full width còn lại của thằng cha
  },

  pagination: {
    display: 'flex',
    flexGrow: 'row nowrap',
    justifyContent: 'center',
  },
}));

function ListPages(props) {
  const classes = useStyles();
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
    _sort: 'salePrice:DESC',
  });
  const [pagination, setPagination] = useState({
    total: 10,
    limit: 10,
    page: 1,
  });

  useEffect(() => {
    try {
      (async () => {
        const { data, pagination } = await productApi.getAll(filters);
        setProductsList(data);
        setPagination(pagination);
      })();
    } catch (error) {
      console.log('Failed to get data', error);
    }

    setLoading(false);
  }, [filters]);

  const handleChangePage = (e, page) => {
    setFilters((preFilter) => ({
      ...preFilter,
      _page: page,
    }));
  };
  const handleSortPrice = (newValue) => {
    setFilters((preFilter) => ({
      ...preFilter,
      _sort: newValue,
    }));
  };
  const handleFilter = (newFilter) => {
    setFilters((preFilter) => ({
      ...preFilter,
      ...newFilter,
    }));
  };
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductsFilter filters={filters} onChange={handleFilter}/>
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductsSort currentValue={filters._sort} onChange={handleSortPrice} />
              {loading ? <ProductsSkeleton /> : <ProductsList productList={productsList} />}

              <Box className={classes.pagination}>
                <Pagination
                  count={Math.ceil(pagination.total / pagination.limit)}
                  color="primary"
                  page={pagination.page}
                  onChange={handleChangePage}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPages;
