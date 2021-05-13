import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import ProductThump from '../components/ProductThump';
const useStyles = makeStyles((theme) => ({
    root: {},
  
    left: {
      width: '400px',
      padding:theme.spacing(1.5),
      borderRight:`1px solid ${theme.palette.grey[300]}`
    },
  
    right: {
      flex: '1 1 0', // là full width còn lại của thằng cha
      padding:theme.spacing(1.5),
    },
  }));

function DetailPage() {
    const classes = useStyles();

  return(
    <Box>
        <Container>
            <Paper elevation={0}>
                <Grid container>
                    <Grid item className={classes.left}>
                        <ProductThump products={{}}/>
                    </Grid>
                    <Grid item className={classes.right}>Detail</Grid>
                </Grid>
            </Paper>
        </Container>
    </Box>  
    );
}

export default DetailPage;
