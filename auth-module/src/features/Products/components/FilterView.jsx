import React from 'react';
import PropTypes from 'prop-types';

FilterView.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.object,
};


const Filter_List = [
  {
    id: 1,
    getLabel:'1',//element show name screen
    isActive:1,//element check active
    isVisible:1,// check element can't display
    isRemovable:1,// check  element can't remove?
    onRemove:1, // func handing remove
    onToggle:1  // func handing toggle

  },
];

function FilterView({ onChange = null, filter = {} }) {
  return <div></div>;
}

export default FilterView;
