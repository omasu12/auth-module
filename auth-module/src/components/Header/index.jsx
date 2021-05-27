import { Box, IconButton, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close } from '@material-ui/icons';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/Auth/userSlice';
import { cartItemsCountSelector } from '../../features/Cart/selector';

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
  closeBtn: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 1,
    color: theme.palette.grey,
  },
}));
const StatusDialog = {
  LOGIN: 'login',
  REGISTER: 'register',
};
export default function Header() {
  const loginUser = useSelector((state) => state.user.current);
  const isLogin = !!loginUser.id;
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(StatusDialog.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);
  const countItemCart = useSelector(cartItemsCountSelector);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    const action = logout();
    dispatch(action);
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
          <NavLink className={classes.link} to="/hentaiz" exact>
            <Button color="inherit">Hanime.tv</Button>
          </NavLink>
          <NavLink className={classes.link} to="/hanime" exact>
            <Button color="inherit">Hanime.tv</Button>
          </NavLink>
          <NavLink className={classes.link} to="/products" exact>
            <Button color="inherit">Products</Button>
          </NavLink>
          {!isLogin && (
            <Button onClick={handleClickOpen} color="inherit">
              Login
            </Button>
          )}
          {isLogin && (
            <Button color="inherit" onClick={handleUserClick}>
              <AccountCircle />
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <IconButton className={classes.closeBtn} onClick={handleClose}>
          <Close></Close>
        </IconButton>
        <DialogContent>
          {mode === StatusDialog.REGISTER && (
            <>
              <Register closeDialog={handleClose} />

              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(StatusDialog.LOGIN)}>
                  Already have an account. Login in
                </Button>
              </Box>
            </>
          )}

          {mode === StatusDialog.LOGIN && (
            <>
              <Login closeDialog={handleClose} />

              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(StatusDialog.REGISTER)}>
                  Don't have an account, Register
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
