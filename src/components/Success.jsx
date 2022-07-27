import {
  Button,
  Card,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import React, { useEffect } from 'react';
import { runFireworks } from './utils';

const useStyles = makeStyles((theme) => {
  return {
    card: {
      background: '#FFFFFF',
      borderRadius: 4,
      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)',
      height: 350,
      width: 380,
      margin: '0 auto',
      marginTop: 50,
      marginBottom: 50,
      [theme.breakpoints.down('xs')]: {
        width: 250,
      },
    },
    textRegular: {
      color: 'rgba(31, 32, 65, 0.75)',
      fontFamily: 'Montserrat',
      fontSize: 14,
      fontWeight: 400,
      textDecoration: 'none',
    },
    textBold: {
      color: 'rgba(31, 32, 65, 0.8)',
      fontFamily: 'Montserrat',
      fontSize: 16,
      fontWeight: 700,
    },
    btn: {
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
      [theme.breakpoints.down('xs')]: {
        width: 220,
        marginTop: -15,
      },
    },
  };
});

const Success = () => {
  useEffect(() => {
    runFireworks();
  }, []);
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <Container style={{ margin: '30px 0px 0px 0px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <DoneOutlineRoundedIcon
            style={{
              color: 'green',
              height: 50,
              width: 50,
              marginBottom: 5,
            }}
          />
        </div>
        <Typography
          style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: 5,
          }}
          className={styles.textBold}
        >
          Thank you for booking on our site!
        </Typography>
        <Typography
          style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
          className={styles.textRegular}
        >
          Check your email inbox for the receipt
        </Typography>
        <Typography
          style={{ textAlign: 'center', margin: '30px 0px 40px 0' }}
          className={styles.textRegular}
        >
          If you have any questions, please email on&nbsp;
          <a
            style={{ textDecoration: 'none', color: 'red' }}
            href="mailto:karabimba@example.com"
          >
            karabimba@example.com
          </a>
        </Typography>
        <Link style={{ textDecoration: 'none' }} to="/booking/">
          <Button className={styles.btn}>Continue</Button>
        </Link>
      </Container>
    </Card>
  );
};

export default Success;
