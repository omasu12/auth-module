import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Register from '../../features/Auth/components/Register';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
}));

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeOutlinedIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              Home
            </Link>
          </Typography>
          <NavLink className={classes.link} to="hentaiz">
            <Button color="inherit">Hanime.tv</Button>
          </NavLink>
          <NavLink className={classes.link} to="hanime">
            <Button color="inherit">Hanime.tv</Button>
          </NavLink>
          <Button onClick={handleClickOpen} color="inherit">
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
