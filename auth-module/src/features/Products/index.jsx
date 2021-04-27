import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPages from './pages/ListPages';
import { Box } from '@material-ui/core';

ProductsFeatures.propTypes = {
    
};

function ProductsFeatures(props) {
    const match = useRouteMatch();
    return (
        <Box pt={4}>
            
            <Switch>
                <Route path={match.url} exact component={ListPages}></Route>
            </Switch>
        </Box>
    );
}

export default ProductsFeatures;