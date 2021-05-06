import React from 'react';
import PropTypes from 'prop-types';

FilterView.propTypes = {
    onChange:PropTypes.func,
    filter:PropTypes.object,
};

function FilterView({onChange = null, filter={}}) {
    return (
        <div>
            
        </div>
    );
}

export default FilterView;