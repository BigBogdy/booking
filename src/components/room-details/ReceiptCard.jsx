import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, Snackbar, Typography } from '@material-ui/core';
import DatesPicker from '../main/DatePicker';
import Selector from '../main/Selector';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { UserAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => {
  return {
    card: {
      background: '#FFFFFF',
      borderRadius: 4,
      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)',
      height: 511,
      width: 380,
      [theme.breakpoints.down('md')]: {
        margin: '40px auto',
      },
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
      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },
    },
    textBold: {
      color: 'rgba(31, 32, 65, 0.5)',
      fontFamily: 'Montserrat',
      fontSize: 14,
      fontWeight: 700,
    },
    label: {
      color: '#1F2041',
      fontFamily: 'Quicksand',
      fontSize: 20,
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
      marginLeft: 30,
      padding: 0,
      width: 320,
      '&:hover': {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      [theme.breakpoints.down('xs')]: {
        width: 220,
        marginLeft: 15,
        fontSize: 10,
        marginTop: -10,
      },
    },
    type: {
      margin: '8.5px 110px 0px 0px',
      textTransform: 'uppercase',
      color: '#BC9CFF',
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: 12,
      [theme.breakpoints.down('xs')]: {
        margin: '8.5px 20px 0px 0px',
        fontSize: 10,
      },
    },
    roomNumBox: {
      display: 'flex',
      margin: '40px 0px 23px 30px',
      [theme.breakpoints.down('xs')]: {
        margin: '20px 0px 23px 15px',
      },
    },
    totalBox: {
      display: 'flex',
      margin: '0px 0px 25px 31px',
      [theme.breakpoints.down('xs')]: {
        margin: '0px 0px 25px 10px',
      },
    },
    dashedLine: {
      borderBottom: '1px dashed rgba(31, 32, 65, 0.25)',
      width: 195,
      margin: '22px 5px 0px 5px',
      height: 1,
      [theme.breakpoints.down('xs')]: {
        width: 130,
      },
    },
    fees: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '0px 0px 10px 31px',
      width: 295,
      [theme.breakpoints.down('xs')]: {
        margin: '0px 0px 10px 15px',
        width: 220,
      },
    },
  };
});

const ReceiptCard = ({
  startDate,
  endDate,
  setStart,
  setEnd,
  adultsCount,
  setAdultsCount,
  setKidsCount,
  setInfantsCount,
  kidsCount,
  infantsCount,
  roomItem,
  numberOfGuests,
}) => {
  const styles = useStyles();
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
  const { user } = UserAuth();

  let diff = endDate.getTime() - startDate.getTime();
  const msInDay = 1000 * 3600 * 24;
  let result = diff / msInDay;

  return (
    <>
      <Card className={styles.card}>
        <Box className={styles.roomNumBox}>
          <Typography
            className={styles.label}
            style={{
              marginRight: 8,
            }}
          >
            № {roomItem.number}
          </Typography>
          <Typography className={styles.type}>{roomItem.type}</Typography>
          <Typography style={{ marginTop: 5.5 }} className={styles.textBold}>
            {roomItem.price}$ per day
          </Typography>
        </Box>

        <DatesPicker
          startDate={startDate}
          endDate={endDate}
          setEnd={setEnd}
          setStart={setStart}
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

        <Box style={{ marginTop: 20 }}>
          <Box className={styles.fees}>
            <Typography className={styles.textRegular}>
              {roomItem.price}$ х {Math.round(result)} days
            </Typography>
            <Typography className={styles.textRegular}>
              {roomItem.price * Math.round(result)}$
            </Typography>
          </Box>
          <Box className={styles.fees}>
            <Typography
              style={{ marginRight: 12.5 }}
              className={styles.textRegular}
            >
              Service fee: discount 30$
            </Typography>
            <div>
              <InfoOutlinedIcon
                color="secondary"
                style={{ width: 25, height: 25, marginRight: 60 }}
              />
            </div>
            <Typography className={styles.textRegular}>0$</Typography>
          </Box>
          <Box className={styles.fees}>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                style={{ marginRight: 5 }}
                className={styles.textRegular}
              >
                Fee for additional services
              </Typography>
              <div>
                <InfoOutlinedIcon
                  style={{ width: 25, height: 25, marginRight: 60 }}
                  color="secondary"
                />
              </div>
            </Box>
            <Typography className={styles.textRegular}>5$</Typography>
          </Box>
          <Box className={styles.totalBox}>
            <Typography className={styles.label}>Total</Typography>
            <Typography className={styles.dashedLine}></Typography>
            <Typography className={styles.label}>
              {roomItem.price * Math.round(result) - 30 + 5}$
            </Typography>
          </Box>
          {!user ? (
            <Link style={{ textDecoration: 'none' }} to="/login">
              <Button className={styles.btn}>book a room</Button>
            </Link>
          ) : !numberOfGuests ? (
            <>
              <Button onClick={handleOpen} className={styles.btn}>
                book a room
              </Button>
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
            <>
              <Link style={{ textDecoration: 'none' }} to="/success">
                <Button className={styles.btn}>book a room</Button>
              </Link>
            </>
          )}
        </Box>
      </Card>
    </>
  );
};

export default ReceiptCard;
