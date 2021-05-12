import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useMemo, useState } from 'react';

import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router';
import productApi from '../../../api/productsApi';
import CategorySkeleton from '../components/CategorySkeleton';
import FilterView from '../components/FilterView';
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

  const history = useHistory();
  const location = useLocation();
  const queryParam = useMemo(() => {
    const params = queryString.parse(location.search);

    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 10,
      _sort: params._sort || 'salePrice:DESC',
      isFreeShip: params.isFreeShip === 'true',
      isPromotion: params.isPromotion === 'true',
    };
  }, [location.search]);

  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [filters, setFilters] = useState(() => ({
  //   ...queryParam,
  //   _page: Number.parseInt(queryParam._page) || 1,
  //   _limit: Number.parseInt(queryParam._limit) || 10,
  //   _sort: 'salePrice:DESC',
  // }));
  const [pagination, setPagination] = useState({
    total: 10,
    limit: 10,
    page: 1,
  });

  // useEffect(() => {
  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(filters),
  //   });
  // }, [filters, history]);
  useEffect(() => {
    try {
      (async () => {
        const { data, pagination } = await productApi.getAll(queryParam);
        setProductsList(data);
        setPagination(pagination);
      })();
    } catch (error) {
      console.log('Failed to get data', error);
    }

    setLoading(false);
  }, [queryParam]);

  const handleChangePage = (e, page) => {
    // setFilters((preFilter) => ({
    //   ...preFilter,
    //   _page: page,
    // }));
    const filters = {
      ...queryParam,
      _page: page,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };
  const handleSortPrice = (newValue) => {
    // setFilters((preFilter) => ({
    //   ...preFilter,
    //   _sort: newValue,
    // }));

    const filters = {
      ...queryParam,
      _sort: newValue,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };
  const handleFilter = (newFilter) => {
    // setFilters((preFilter) => ({
    //   ...preFilter,
    //   ...newFilter,
    // }));

    const filters = {
      ...queryParam,
      ...newFilter,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const setNewFilter = (newFilter) => {
    // setFilters(newFilter);
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilter),
    });
  };
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              {loading ? (
                <CategorySkeleton />
              ) : (
                <ProductsFilter filters={queryParam} onChange={handleFilter} />
              )}
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductsSort currentValue={queryParam._sort} onChange={handleSortPrice} />

              <FilterView filter={queryParam} onChange={setNewFilter} data={productsList} />
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
