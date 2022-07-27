import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => {
  return {
    container: {
      flex: '1 0 auto',
      height: 900,
    },
    contentBox: {
      margin: '40px 0px 20px 30px',
      [theme.breakpoints.down('sm')]: {
        margin: '20px 0px 20px 15px',
      },
      [theme.breakpoints.down('xs')]: {
        margin: '15px 0px 10px 10px',
      },
    },
    img: {
      alignItems: 'center',
      backgroundImage: 'url(img/background2.jpg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      diaplay: 'flex',
      height: 772,
      marginBottom: 100,
      justifyContent: 'center',
      position: 'relative',
      width: '100%',
    },
    card: {
      border: '1px solid rgba(0, 0, 0, 0.12)',
      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)',
      borderRadius: 4,
      height: 358,
      width: 378,
      margin: '0 auto',
      marginTop: 163,
      [theme.breakpoints.down('sm')]: {
        width: 320,
      },
      [theme.breakpoints.down('xs')]: {
        width: 220,
        height: 340,
      },
    },
    title: {
      fontSize: 24,
      color: '#1F2041',
      fontFamily: 'Quicksand',
      fontWeight: 700,
      marginBottom: 20,
      [theme.breakpoints.down('sm')]: {
        fontSize: 20,
        marginBottom: 15,
      },
    },
    textRegular: {
      color: 'rgba(31, 32, 65, 0.75)',
      fontFamily: 'Montserrat',
      fontSize: 14,
      fontWeight: 400,
      textDecoration: 'none',
      [theme.breakpoints.down('sm')]: {
        fontSize: 12,
      },
    },
    label: {
      color: '#1F2041',
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    birthDate: {
      border: '1px solid rgba(31, 32, 65, 0.25)',
      borderRadius: 4,
      height: 40,
      marginRight: 20,
      paddingLeft: 15,
      width: 301,
    },
    btnLogin: {
      background: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
      borderRadius: 22,
      color: '#FFFFFF',
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      height: 44,
      padding: 0,
      width: 320,
      '&:hover': {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      [theme.breakpoints.down('sm')]: {
        width: 290,
      },
      [theme.breakpoints.down('xs')]: {
        width: 200,
      },
    },
    btnRegister: {
      color: '#BC9CFF',
      '&:hover': {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        background: '#FFFFFF',
      },
      background: '#FFFFFF',
      border: 'solid 2px #BC9CFF',
      borderRadius: 22,
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      height: 34,
      width: 88,
      [theme.breakpoints.down('sm')]: {
        width: 70,
      },
      [theme.breakpoints.down('xs')]: {
        width: 40,
        fontSize: 10,
      },
    },
    input: {
      width: 320,
      marginBottom: 3,
      [theme.breakpoints.down('sm')]: {
        width: 290,
      },
      [theme.breakpoints.down('xs')]: {
        width: 200,
      },
    },
    textBtn: {
      display: 'flex',
      margin: '15px 0px 0px 30px',
      width: 320,
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        width: 290,
        margin: '15px 0px 0px 10px',
      },
      [theme.breakpoints.down('xs')]: {
        width: 200,
      },
    },
    errText: {
      color: 'crimson',
      fontFamily: 'Montserrat',
      fontSize: 14,
      marginBottom: 5,
      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },
    },
  };
});

const Login = () => {
  const styles = useStyles();
  const history = useHistory();
  const { signIn } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setEmailError] = useState('');
  const [errorPassword, setPasswordError] = useState('');

  const handleSubmit = async (err) => {
    err.preventDefault();
    setEmailError('');
    setPasswordError('');
    try {
      await signIn(email, password);
      history.push('/booking');
    } catch (err) {
      switch (err.code) {
        case 'auth/invalid-email':
        case 'auth/user-disabled':
        case 'auth/user-not-found':
          setEmailError(err.message);
          break;
        case 'auth/wrong-password':
          setPasswordError(err.message);
          break;
      }
    }
  };
  return (
    <>
      <Box className={styles.img}>
        <Container>
          <Card className={styles.card}>
            <Box className={styles.contentBox}>
              <Typography variant="h1" className={styles.title}>
                Login
              </Typography>

              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  inputProps={{
                    style: {
                      padding: 15,
                      height: 14,
                    },
                  }}
                  className={styles.input}
                  id="input-email"
                  type="email"
                  name="email"
                  variant="outlined"
                  color="secondary"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errorEmail === 'Firebase: Error (auth/invalid-email).' ? (
                  <div className={styles.errText}>This is not valid email</div>
                ) : 'Firebase: Error (auth/user-not-found).' ? (
                  <div className={styles.errText}>User is not found</div>
                ) : 'Firebase: Error (auth/user-disabled).' ? (
                  <div className={styles.errText}>User is disabled</div>
                ) : (
                  <Typography className={styles.errText}>
                    {errorEmail}
                  </Typography>
                )}
                <TextField
                  inputProps={{
                    style: {
                      padding: 15,
                      height: 14,
                    },
                  }}
                  className={styles.input}
                  id="new-password"
                  name="password"
                  type="password"
                  variant="outlined"
                  color="secondary"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Typography className={styles.errText}>
                  {errorPassword}
                </Typography>
                <Button
                  style={{ marginTop: 20 }}
                  type="submit"
                  className={styles.btnLogin}
                >
                  Login
                </Button>
              </form>
            </Box>

            <Box className={styles.textBtn}>
              <Typography
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
                className={styles.textRegular}
              >
                Don't have an account?
              </Typography>
              <Link style={{ textDecoration: 'none' }} to="/register">
                <Button className={styles.btnRegister}>Create</Button>
              </Link>
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default Login;
