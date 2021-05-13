import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import DetailPage from './pages/DetailPage';
import ListPages from './pages/ListPages';


function ProductsFeatures(props) {
    const match = useRouteMatch();
    return (
        <Box pt={4}>
            
            <Switch>
                <Route path={match.url} exact component={ListPages}></Route>
                <Route path={`${match.url}/:productID`} exact component={DetailPage}></Route>
            </Switch>
        </Box>
    );
}

export default ProductsFeatures;