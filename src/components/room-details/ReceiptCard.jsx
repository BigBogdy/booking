import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, Typography } from '@material-ui/core';
import DatesPicker from '../main/DatePicker';
import Selector from '../main/Selector';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import DatePickerDetails from './DatePickerDetails';

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

const ReceiptCard = () => {
  const styles = useStyles();
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
            № 888
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
            Luxury
          </Typography>

          <Typography style={{ marginTop: 5.5 }} className={styles.textBold}>
            153$ per day
          </Typography>
        </Box>

        <DatePickerDetails />

        <Selector />

        <Box>
          <Box style={{ display: 'flex', margin: '20px 0px 10px 31px' }}>
            <Typography
              style={{ marginRight: 175 }}
              className={styles.textRegular}
            >
              153$ х 4 days
            </Typography>
            <Typography className={styles.textRegular}>612$</Typography>
          </Box>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '0px 0px 10px 31px',
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
                style={{ width: 30, height: 30, marginRight: 60 }}
              />
            </div>
            <Typography className={styles.textRegular}>0$</Typography>
          </Box>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '0px 0px 30px 31px',
            }}
          >
            <Typography
              style={{ marginRight: 5 }}
              className={styles.textRegular}
            >
              Fee for additional services{' '}
            </Typography>
            <div>
              <InfoOutlinedIcon
                style={{ width: 30, height: 30, marginRight: 60 }}
                color="secondary"
              />
            </div>
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
            <Typography className={styles.label}>587$</Typography>
          </Box>
          <Button className={styles.btn}>book a room</Button>
        </Box>
      </Card>
    </>
  );
};

export default ReceiptCard;
