import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
// import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Container,
  Divider,
  Hidden,
  IconButton,
  List,
  ListItem,
  SwipeableDrawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const navigationLinks = [
  { id: 1, name: 'About Us', href: '' },
  { id: 2, name: 'Services', href: '' },
  { id: 3, name: 'Vacancies', href: '' },
  { id: 4, name: 'News', href: '' },
  { id: 5, name: 'Documentation', href: '' },
];

const useStyles = makeStyles((theme) => {
  return {
    link: {
      color: 'rgba(31, 32, 65, 0.5)',
      fontFamily: 'Montserrat',
      fontWeight: 400,
      marginRight: 20,
      // '&:hover': {
      //   textDecoration: 'underline',
      // },
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
    btn_1: {
      [theme.breakpoints.down('sm')]: {
        marginRight: 10,
      },
      [theme.breakpoints.up('sm')]: {
        marginRight: 20,
      },

      color: '#BC9CFF',

      '&:hover': {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        background: '#FFFFFF',
      },
      background: '#FFFFFF',

      border: 'solid 2px #BC9CFF',
    },

    btn_2: {
      [theme.breakpoints.up('sm')]: {
        width: 196,
      },
      [theme.breakpoints.down('sm')]: {
        width: 100,
      },

      color: '#FFFFFF',
      '&:hover': {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      background: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
    },
  };
});
const Header = () => {
  const styles = useStyles();
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
                src="../img/Logo.svg"
                alt="Logo"
              />
              <img
                className={styles.toxin}
                src="../img/TOXIN.svg"
                alt="toxin"
              />
            </Link>

            <Hidden mdDown>
              {navigationLinks.map((item) => (
                <Link
                  to="/"
                  key={item.id}
                  className="links"

                  // href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </Hidden>
            <Link
              style={{ textDecoration: 'none', color: '#BC9CFF' }}
              to="/login"
            >
              <Button className={classNames(styles.btn, styles.btn_1)}>
                Login
              </Button>
            </Link>
            <Link
              to="/register"
              style={{ textDecoration: 'none', color: '#FFF' }}
            >
              <Button className={classNames(styles.btn, styles.btn_2)}>
                Register
              </Button>
            </Link>
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
                <div
                  className={styles.link}
                  variant="button"
                  underline="none"
                  href={item.href}
                >
                  {item.name}
                </div>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </AppBar>
    </>
  );
};

export default Header;
