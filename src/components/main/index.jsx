import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, Snackbar, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import DatesPicker from './DatePicker';
import Selector from './Selector';
import { useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      flex: '1 0 auto',
      height: 900,
    },
    img: {
      alignItems: 'center',
      backgroundImage: 'url(https://i.ibb.co/gjY7qbg/background.jpg)',
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
      marginTop: 140,
      width: 380,
      marginLeft: 15,
      [theme.breakpoints.down('xs')]: {
        margin: '100px 5px 0px 10px',
        width: 240,
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
        marginLeft: 10,
        fontSize: 16,
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
      [theme.breakpoints.down('xs')]: {
        width: 225,
        fontSize: 10,
      },
    },
  };
});

const Main = ({
  startDate,
  setStart,
  endDate,
  setEnd,
  adultsCount,
  setAdultsCount,
  kidsCount,
  infantsCount,
  setKidsCount,
  setInfantsCount,
  numberOfGuests,
}) => {
  const styles = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Box className={styles.img} style={{ marginBottom: 140 }}>
        <Container maxWidth="lg" disableGutters>
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
              numberOfGuests={numberOfGuests}
            />
            {!numberOfGuests ? (
              <>
                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 30,
                  }}
                >
                  <Button onClick={handleOpen} className={styles.btn}>
                    Find a room
                  </Button>
                </Box>
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
                    Enter number of guests
                  </Alert>
                </Snackbar>
              </>
            ) : (
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: 30,
                }}
              >
                <Button
                  onClick={() => {
                    history.push('/search');
                  }}
                  className={styles.btn}
                >
                  Find a room
                </Button>
              </Box>
            )}
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default Main;
