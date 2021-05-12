import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, makeStyles } from '@material-ui/core';
import productApi from '../../../api/productsApi';
FilterView.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.object,
  data: PropTypes.array,
};

const useStyles = makeStyles((theme) => ({
  root: {
    listStyle: 'none',
    display: 'flex',
    flexGrow: 'row',
    margin: '10px 0 0 10px',
    padding: 0,
    '& > li': {
      padding: '0 5px',
    },
  },
}));

const Filter_List = [
  {
    id: 1,
    getLabel: () => 'Vận chuyển miễn phí', //element show name screen
    isActive: (filter) => filter.isFreeShip, //element check active
    isVisible: () => true, // check element can't display
    isRemovable: false, // check  element can't remove?
    onRemove: () => {}, // func handing remove
    onToggle: (filter) => {
      const newFilter = { ...filter };

      if (filter.isFreeShip) {
        delete newFilter.isFreeShip;
      } else {
        newFilter.isFreeShip = true;
      }
      return newFilter;
    }, // func handing toggle
  },
  {
    id: 2,
    getLabel: () => 'Có khuyến mãi',
    isActive: () => true,
    isVisible: (filter) => filter.isPromotion,
    isRemovable: true,
    onRemove: (filter) => {
      const newFilter = { ...filter };
      delete newFilter.isPromotion;
      return newFilter;
    },
    onToggle: () => {},
  },
  {
    id: 3,
    getLabel: (filter, data) => `Từ ${filter.salePrice_gte} đến ${filter.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filter) =>
      Object.keys(filter).includes('salePrice_gte') &&
      Object.keys(filter).includes('salePrice_lte'),
    isRemovable: true,
    onRemove: (filter) => {
      const newFilter = { ...filter };
      delete newFilter.salePrice_gte;
      delete newFilter.salePrice_lte;
      return newFilter;
    },
    onToggle: () => {},
  },
  // {
  //   id: 4,
  //   getLabel:async (filter, data) => {
  //     const dataCate = await productApi.getNameCategoryById(filter['category.id'])
  //     console.log(dataCate.data);
  //     // return dataCate[0].name
  //   },
  //   isActive: () => true,
  //   isVisible: (filter) => {
  //     return Object.keys(filter).includes('category.id');
  //   },
  //   isRemovable: true,
  //   onRemove: (filter) => {
  //     const newFilter = { ...filter };
  //     delete newFilter['category.id'];
  //     return newFilter;
  //   },
  //   onToggle: () => {},
  // },
];

function FilterView({ onChange = null, filter = {}, data }) {
  const classes = useStyles();

  const visibleFilter = useMemo(()=>{
    return Filter_List.filter((x) => x.isVisible(filter))
  },[filter])
  return (
    <Box component="ul" className={classes.root}>
      {visibleFilter.map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filter, data)}
            color={x.isActive(filter) ? 'primary' : 'default'}
            clickable={!x.isRemovable}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return;

                    const newFilter = x.onToggle(filter);
                    onChange(newFilter);
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return;

                    const newFilter = x.onRemove(filter);

                    onChange(newFilter);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterView;
