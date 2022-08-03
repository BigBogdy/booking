import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Card,
  IconButton,
  Snackbar,
  Typography,
} from '@material-ui/core';
import DatesPicker from '../main/DatePicker';
import Selector from '../main/Selector';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { UserAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';

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
    infoCard_1: {
      position: 'absolute',
      margin: '-160px 0px 0px -30px',
      width: 200,
      boxShadow: 'rgb(0 0 0 / 28%) 0px 8px 50px ',
      borderRadius: 10,
      padding: 10,
      fontSize: 14,
      fontFamily: 'Montserrat',
      zIndex: 4,
      [theme.breakpoints.down('xs')]: {
        margin: '-220px 0px 0px -20px',
        fontSize: 12,
        width: 120,
      },
    },
    infoCard_2: {
      position: 'absolute',
      margin: '130px 0px 0px -30px',
      width: 200,
      boxShadow: 'rgb(0 0 0 / 28%) 0px 8px 50px ',
      borderRadius: 10,
      padding: 10,
      fontSize: 14,
      fontFamily: 'Montserrat',
      zIndex: 4,
      [theme.breakpoints.down('xs')]: {
        width: 120,
        margin: '180px 0px 0px -18px',
      },
    },
  };
});

const ReceiptCard = ({ propDetailsObj, roomItem }) => {
  const { numberOfGuests, startDate, endDate } = propDetailsObj;
  const ref = useRef();
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openInfo, setOpenInfo] = React.useState(false);
  const [openServiceInfo, setOpenServiceInfo] = React.useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (openInfo && ref.current && !ref.current.contains(e.target)) {
        setOpenInfo(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [openInfo]);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (openServiceInfo && ref.current && !ref.current.contains(e.target)) {
        setOpenServiceInfo(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [openServiceInfo]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpenInfo = () => {
    setOpenInfo(!openInfo);
  };
  const handleOpenServiceInfo = () => {
    setOpenServiceInfo(!openServiceInfo);
  };
  const { user } = UserAuth();

  let diff = endDate.getTime() - startDate.getTime();
  const msInDay = 1000 * 3600 * 24;
  let result = diff / msInDay;

  return (
    <>
      <div>
        <Card className={styles.card}>
          <Box className={styles.roomNumBox} ref={ref}>
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

          <DatesPicker {...propDetailsObj} />

          <Selector {...propDetailsObj} />

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
                  onClick={handleOpenServiceInfo}
                  color="secondary"
                  style={{ width: 25, height: 25, marginRight: 60 }}
                />
              </div>
              {openServiceInfo ? (
                <Card className={styles.infoCard_1}>
                  <Box style={{ display: 'flex' }}>
                    <IconButton
                      style={{ width: 30, height: 30 }}
                      onClick={() => setOpenServiceInfo(false)}
                    >
                      <CloseIcon style={{ color: 'grey', width: 20 }} />
                    </IconButton>
                    <br />
                    <Typography
                      style={{
                        fontFamily: 'Montserrat',
                        fontWeight: 700,
                        fontSize: 14,
                        marginTop: 5,
                        marginLeft: 10,
                      }}
                    >
                      Service Fee
                    </Typography>
                  </Box>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit .
                  Blanditiis Lorem ipsum dolor sit amet consectetur adipisicing
                  elit . Blanditiis Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </Card>
              ) : null}
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
                    onClick={handleOpenInfo}
                    style={{ width: 25, height: 25, marginRight: 60 }}
                    color="secondary"
                  />
                </div>
                {openInfo ? (
                  <>
                    <Card className={styles.infoCard_2}>
                      <Box style={{ display: 'flex' }}>
                        <IconButton
                          style={{ width: 30, height: 30 }}
                          onClick={() => setOpenInfo(false)}
                        >
                          <CloseIcon style={{ color: 'grey', width: 20 }} />
                        </IconButton>
                        <Typography
                          style={{
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                            fontSize: 14,
                            marginTop: 5,
                            marginLeft: 10,
                          }}
                        >
                          Additional Fee
                        </Typography>
                      </Box>
                      This helps to develop our platform and offer different
                      services, such as 24/7 support while traveling. Includes
                      VAT.
                    </Card>
                  </>
                ) : null}
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
      </div>
    </>
  );
};

export default ReceiptCard;
