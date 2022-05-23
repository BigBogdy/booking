import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import DatesPicker from './DatePicker';
import Selector from './Selector';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      flex: '1 0 auto',
      height: 900,
    },
    img: {
      alignItems: 'center',
      backgroundImage: 'url(img/background.jpg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      diaplay: 'flex',
      height: 900,
      justifyContent: 'center',
      position: 'relative',
      width: '100%',
    },
    card: {
      height: 374,
      marginLeft: 140,
      marginTop: 140,
      width: 380,
      [theme.breakpoints.down('xs')]: {
        margin: '100px 5px 0px 10px',
        width: 340,
        height: 350,
      },
    },

    cardTitle: {
      fontFamily: 'Quicksand',
      fontSize: 24,
      fontWeight: 700,
      marginBottom: 20,
      marginLeft: 30,
      marginTop: 40,
      [theme.breakpoints.down('xs')]: {
        marginTop: 20,
        fontSize: 18,
      },
    },
    slogan: {
      color: 'rgba(31, 32, 65, 0.75)',
      fontFamily: 'Montserrat',
      fontSize: 14,
      margin: '834px 134px 0px 0px',
      textAlign: 'right',
      [theme.breakpoints.down('sm')]: {
        fontSize: 10,
        display: 'flex',
        marginRight: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
    },

    select: {
      border: '1px solid rgba(31, 32, 65, 0.5)',
      borderRadius: 4,
      height: 44,
      width: 358,
    },
    btn: {
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
  };
});

const Main = ({
  startDate,
  setStart,
  endDate,
  setEnd,
  onClear,
  adultsCount,
  setAdultsCount,
  kidsCount,
  infantsCount,
  setKidsCount,
  setInfantsCount,
}) => {
  const history = useHistory();
  const styles = useStyles();
  return (
    <>
      <Box className={styles.img}>
        <Container maxWidth="xl" disableGutters>
          <Card className={styles.card}>
            <Typography variant="h1" className={styles.cardTitle}>
              We will find rooms <br /> according to your wishes
            </Typography>
            <DatesPicker
              startDate={startDate}
              setStart={setStart}
              endDate={endDate}
              setEnd={setEnd}
            />
            <Selector
              adultsCount={adultsCount}
              setAdultsCount={setAdultsCount}
              setKidsCount={setKidsCount}
              setInfantsCount={setInfantsCount}
              kidsCount={kidsCount}
              infantsCount={infantsCount}
              onClear={onClear}
            />
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={() => {
                  history.push('/search');
                }}
                className={styles.btn}
                style={{}}
              >
                Find a room
              </Button>
            </Box>
          </Card>
        </Container>
        {/* <div className={styles.slogan}>
          The best rooms for your work,
          <br /> leisure and just inspiration
        </div> */}
      </Box>
    </>
  );
};

export default Main;
