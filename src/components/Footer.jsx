import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  List,
  ListItem,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Alert } from '@material-ui/lab';

const navigationLinks = [
  { id: 1, name: 'About Us', href: '' },
  { id: 2, name: 'News', href: '' },
  { id: 3, name: 'Support', href: '' },
  { id: 4, name: 'Services', href: '' },
];
const aboutUsLinks = [
  { id: 1, name: 'About Service', href: '' },
  { id: 2, name: 'Our Team', href: '' },
  { id: 3, name: 'Vacancies', href: '' },
  { id: 4, name: 'Investors', href: '' },
];
const supportLinks = [
  { id: 1, name: 'Agreements', href: '' },
  { id: 2, name: 'Communities', href: '' },
  { id: 3, name: 'contact us', href: '' },
];

const useStyles = makeStyles((theme) => {
  return {
    content: {
      display: 'flex',
      margin: '25px 0px 0px 0px',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    column: {
      width: '15%',
      padding: '0px 25px',
      [theme.breakpoints.down('sm')]: {
        width: '30%',

        justifyContent: 'center',
      },
      [theme.breakpoints.down('xs')]: {
        width: '40%',
        padding: '0px 10px',
        justifyContent: 'center',
      },
    },
    sloganBox: {
      width: '15%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginBottom: 30,
      },
    },
    sloganText: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
    logos: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    links: {
      color: 'rgba(31, 32, 65, 0.5)',
      padding: 0,
      fontSize: 14,
      margin: '0px 0px 20px 0px',
      fontFamily: 'Montserrat',
      fontWeight: 400,
      lineHeight: '17.07px',
      '&:hover': {
        textDecoration: 'underline',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },
    },
    labels: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
      marginBottom: 21,
    },
  };
});
const Footer = () => {
  const styles = useStyles();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = React.useState(false);

  const emailValidation = () => {
    const regEx =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
    if (regEx.test(email)) {
      setMessage('email is valid');
      setOpen(true);
    } else if (!regEx.test(email) && email !== '') {
      setMessage('email is not valid');
      setOpen(true);
    } else {
      setMessage('');
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Box className={styles.content}>
            <Box className={styles.sloganBox}>
              <Typography className={styles.logos}>
                <img
                  src="../img/Logo.svg"
                  alt="Logo"
                  style={{ marginRight: 12.5 }}
                />
                <img src="../img/TOXIN.svg" alt="toxin" />
              </Typography>
              <Typography
                style={{
                  color: 'rgba(31, 32, 65, 0.75)',
                  fontFamily: 'Montserrat',
                  fontWeight: 400,
                }}
                className={styles.sloganText}
              >
                Booking rooms in the best hotel of 2019 <br /> according to the
                association "Hotel views"
              </Typography>
            </Box>
            <List className={styles.column}>
              <Typography className={styles.labels}>Navigation</Typography>
              {navigationLinks.map((item) => (
                <ListItem key={item.id} style={{ padding: 0 }}>
                  <Link
                    className={styles.links}
                    variant="button"
                    underline="none"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </ListItem>
              ))}
            </List>
            <List className={styles.column}>
              <Typography className={styles.labels}>About Us</Typography>
              {aboutUsLinks.map((item) => (
                <ListItem key={item.id} style={{ padding: 0 }}>
                  <Link
                    className={styles.links}
                    variant="button"
                    underline="none"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </ListItem>
              ))}
            </List>
            <List className={styles.column}>
              <Typography className={styles.labels}>Support</Typography>
              {supportLinks.map((item) => (
                <ListItem key={item.id} style={{ padding: 0 }}>
                  <Link
                    className={styles.links}
                    variant="button"
                    underline="none"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </ListItem>
              ))}
            </List>
            <Box>
              <List className={styles.column}>
                <Typography className={styles.labels}>Subscription</Typography>
                <Typography
                  style={{
                    color: 'rgba(31, 32, 65, 0.75)',
                    fontFamily: 'Montserrat',
                    fontWeight: 400,
                    marginBottom: 30,
                    width: 260,
                  }}
                >
                  Get special offers and service news
                </Typography>
                <form noValidate autoComplete="off">
                  <TextField
                    style={{ width: 260 }}
                    id="input-with-icon-textfield"
                    type={'text'}
                    label="Email"
                    variant="outlined"
                    color="secondary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={emailValidation}>
                            <ArrowForwardIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </form>
                {message === 'email is valid' ? (
                  <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      sx={{ width: '100%' }}
                    >
                      Thanks for subscribing
                    </Alert>
                  </Snackbar>
                ) : (
                  <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      sx={{ width: '100%' }}
                      style={{ marginTop: 5 }}
                      severity="error"
                    >
                      Email is not valid
                    </Alert>
                  </Snackbar>
                )}
              </List>
            </Box>
          </Box>
          <Divider style={{ width: '100%', marginTop: 26 }} />
          <Box
            style={{
              height: 70,
              display: 'flex',
              justifyContent: 'start',
              width: '100%',
            }}
          >
            <Container
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <Typography
                variant="body1"
                style={{
                  fontFamily: 'Montserrat',
                  fontWeight: 400,
                  color: 'rgba(31, 32, 65, 0.75)',
                  fontSize: 14,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Copyright © {new Date().getFullYear()} Toxin hotel. All rights
                reserved.
              </Typography>
              <Box style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton href="https://www.instagram.com/bogdun17/">
                  <InstagramIcon />
                </IconButton>
                <IconButton href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <YouTubeIcon />
                </IconButton>

                <IconButton href="https://twitter.com/?lang=c/">
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
