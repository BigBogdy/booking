import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
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
    },
    title: {
      fontSize: 24,
      color: '#1F2041',
      fontFamily: 'Quicksand',
      fontWeight: 700,
    },
    textRegular: {
      color: 'rgba(31, 32, 65, 0.75)',
      fontFamily: 'Montserrat',
      fontSize: 14,
      fontWeight: 400,
      textDecoration: 'none',
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
    btnRegister: {
      borderRadius: 22,
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      height: 44,
      padding: 0,
      width: 320,
      color: '#FFFFFF',
      background: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
      '&:hover': {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
    btnLogin: {
      color: '#BC9CFF',
      '&:hover': {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        background: '#FFFFFF',
      },
      background: '#FFFFFF',
      border: 'solid 2px #BC9CFF',
      borderRadius: 22,
      width: 99,
      height: 44,
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
    },
  };
});

const Login = () => {
  const styles = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Box className={styles.img}>
        <Container>
          <Card className={styles.card}>
            <Typography
              style={{ margin: '40px 0px 20px 30px' }}
              variant="h1"
              className={styles.title}
            >
              Login
            </Typography>

            <Box style={{ margin: '0px 0px 20px 30px' }}>
              <form noValidate autoComplete="off">
                <TextField
                  inputProps={{
                    style: {
                      padding: 15,
                      height: 14,
                    },
                  }}
                  style={{ width: 320, marginBottom: 10 }}
                  id="input-email"
                  type="email"
                  variant="outlined"
                  color="secondary"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </form>
              <form noValidate autoComplete="off">
                <TextField
                  inputProps={{
                    style: {
                      padding: 15,
                      height: 14,
                    },
                  }}
                  style={{ width: 320 }}
                  id="new-password"
                  type="password"
                  variant="outlined"
                  color="secondary"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </form>
            </Box>

            <Button
              style={{ margin: '0px 0px 30px 30px' }}
              className={styles.btnRegister}
            >
              Login
            </Button>
            <Box style={{ display: 'flex', margin: '0px 0px 0px 30px' }}>
              <Typography
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: 30,
                }}
                className={styles.textRegular}
              >
                You don't have an account
              </Typography>
              <Link style={{ textDecoration: 'none' }} to="/register">
                <Button className={styles.btnLogin}>Create</Button>
              </Link>
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default Login;
