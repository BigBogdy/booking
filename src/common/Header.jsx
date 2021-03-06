import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { UserAuth } from '../context/AuthContext';
import {
  Button,
  Container,
  Divider,
  Hidden,
  IconButton,
  List,
  ListItem,
  SwipeableDrawer,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const navigationLinks = [
  { id: 1, name: 'About Us', to: '/about' },
  { id: 2, name: 'Services', to: '/services' },
  { id: 3, name: 'Vacancies', to: '/vacancies' },
  { id: 4, name: 'News', to: '/news' },
  { id: 5, name: 'Documentation', to: '/documentation' },
];

const useStyles = makeStyles((theme) => {
  return {
    link: {
      color: 'rgba(31, 32, 65, 0.5)',
      fontFamily: 'Montserrat',
      fontWeight: 400,
      marginRight: 20,
    },
    logos: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.up('xs')]: {
        marginRight: 185,
      },
      [theme.breakpoints.down('md')]: {
        marginRight: 'auto',
      },
    },
    toxin: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    btn: {
      borderRadius: 22,
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      height: 34,
      padding: 0,
    },
    btn_login: {
      [theme.breakpoints.down('sm')]: {
        marginRight: 10,
      },
      [theme.breakpoints.up('sm')]: {
        marginRight: 20,
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 10,
      },
      color: '#BC9CFF',

      '&:hover': {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        background: '#FFFFFF',
      },
      background: '#FFFFFF',

      border: 'solid 2px #BC9CFF',
    },
    btn_logout: {
      width: 100,
      color: '#FFFFFF',
      '&:hover': {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      background: 'linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)',
      [theme.breakpoints.down('xs')]: {
        fontSize: 10,
      },
    },
    btn_register: {
      [theme.breakpoints.up('sm')]: {
        width: 196,
      },
      [theme.breakpoints.down('sm')]: {
        width: 100,
      },
      [theme.breakpoints.down('xs')]: {
        width: 80,
        fontSize: 10,
      },
      color: '#FFFFFF',
      '&:hover': {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      background: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
    },
    userName: {
      marginLeft: 10,
      fontFamily: 'Montserrat',
      fontSize: 14,
      width: 300,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      [theme.breakpoints.down('xs')]: {
        width: 200,
        fontSize: 10,
        marginLeft: 0,
      },
    },
  };
});
const Header = () => {
  const history = useHistory();
  const styles = useStyles();
  const { user, logout } = UserAuth();
  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (e) {
      console.log(e.message);
    }
  };
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        className={styles.appbar}
        position="sticky"
        style={{
          alignItems: 'center',
          height: 70,
          justifyContent: 'center',
          width: '100%',
          zIndex: 100,
        }}
      >
        <Container>
          <Toolbar disableGutters style={{ justifyContent: 'center' }}>
            <Link to="/" className={styles.logos}>
              <img
                style={{ marginRight: 12.5 }}
                src="https://i.ibb.co/0ndS9tn/1.png"
                alt="Logo"
              />
              <img
                className={styles.toxin}
                src="https://i.ibb.co/vqqyNTs/2.png"
                alt="toxin"
              />
            </Link>

            <Hidden mdDown>
              {navigationLinks.map((item) => (
                <Link className="links" to={item.to} key={item.id}>
                  {item.name}
                </Link>
              ))}
            </Hidden>
            {user ? (
              <>
                <Typography className={styles.userName}>
                  User: {user?.email}
                </Typography>
                <Button
                  style={{ marginLeft: 5 }}
                  className={classNames(styles.btn, styles.btn_logout)}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  style={{ textDecoration: 'none', color: '#BC9CFF' }}
                  to="/login"
                >
                  <Button className={classNames(styles.btn, styles.btn_login)}>
                    Login
                  </Button>
                </Link>
                <Link
                  to="/register"
                  style={{ textDecoration: 'none', color: '#FFF' }}
                >
                  <Button
                    className={classNames(styles.btn, styles.btn_register)}
                  >
                    Register
                  </Button>
                </Link>
              </>
            )}

            <Hidden lgUp>
              <IconButton
                onClick={handleDrawerOpen}
                style={{ marginLeft: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={handleDrawerOpen}
          onClose={handleDrawerClose}
        >
          <div>
            <IconButton onClick={handleDrawerClose}>
              <ChevronRightIcon style={{ focus: 'none' }} />
            </IconButton>
          </div>
          <Divider />
          <List>
            {navigationLinks.map((item) => (
              <ListItem key={item.id}>
                <Link
                  className="links"
                  variant="button"
                  underline="none"
                  to={item.to}
                >
                  {item.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </AppBar>
    </>
  );
};

export default Header;
