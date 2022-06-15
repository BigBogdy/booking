import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, Typography } from '@material-ui/core';
import DatesPicker from '../main/DatePicker';
import Selector from '../main/Selector';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { UserAuth } from '../../context/AuthContext';
import { useHistory, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
  return {
    card: {
      background: '#FFFFFF',
      borderRadius: 4,
      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)',
      height: 511,
      width: 380,
    },
    textRegular: {
      color: 'rgba(31, 32, 65, 0.75)',
      fontFamily: 'Montserrat',
      fontSize: 14,
      fontWeight: 400,
      textDecoration: 'none',
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
      borderRadius: 22,
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      height: 44,
      padding: 0,
      marginLeft: 30,
      width: 320,
      color: '#FFFFFF',
      background: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
      '&:hover': {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
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
  const { user } = UserAuth();
  const history = useHistory();

  let diff = endDate.getTime() - startDate.getTime();
  const msInDay = 1000 * 3600 * 24;
  let result = diff / msInDay;

  return (
    <>
      <Card className={styles.card}>
        <Box style={{ display: 'flex', margin: '40px 0px 23px 30px' }}>
          <Typography
            className={styles.label}
            style={{
              marginRight: 8,
            }}
          >
            № {roomItem.number}
          </Typography>
          <Typography
            style={{
              margin: '8.5px 110px 0px 0px',
              textTransform: 'uppercase',
              color: '#BC9CFF',
              fontFamily: 'Montserrat',
              fontWeight: 700,
              fontSize: 12,
            }}
          >
            {roomItem.type}
          </Typography>

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

        <Box>
          <Box
            style={{
              display: 'flex',
              margin: '20px 0px 10px 31px',
              justifyContent: 'space-between',
              width: 295,
            }}
          >
            <Typography className={styles.textRegular}>
              {roomItem.price}$ х {Math.round(result)} days
            </Typography>
            <Typography className={styles.textRegular}>
              {roomItem.price * Math.round(result)}$
            </Typography>
          </Box>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '0px 0px 10px 31px',
              width: 295,
            }}
          >
            <Typography
              style={{ marginRight: 12.5 }}
              className={styles.textRegular}
            >
              Service fee: discount 30${' '}
            </Typography>
            <div>
              <InfoOutlinedIcon
                color="secondary"
                style={{ width: 25, height: 25, marginRight: 60 }}
              />
            </div>
            <Typography className={styles.textRegular}>0$</Typography>
          </Box>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '0px 0px 30px 31px',
              width: 295,
            }}
          >
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                style={{ marginRight: 5 }}
                className={styles.textRegular}
              >
                Fee for additional services{' '}
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
          <Box style={{ display: 'flex', margin: '0px 0px 25px 31px' }}>
            <Typography className={styles.label}>Total</Typography>
            <Typography
              style={{
                borderBottom: '1px dashed rgba(31, 32, 65, 0.25)',
                width: 195,
                margin: '22px 5px 0px 5px',
                height: 1,
              }}
            ></Typography>
            <Typography className={styles.label}>
              {roomItem.price * Math.round(result) - 30 + 5}$
            </Typography>
          </Box>
          {!user ? (
            <Link style={{ textDecoration: 'none' }} to="/login">
              <Button className={styles.btn}>book a room</Button>
            </Link>
          ) : (
            <Button className={styles.btn}>book a room</Button>
          )}
        </Box>
      </Card>
    </>
  );
};

export default ReceiptCard;
