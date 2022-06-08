import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    rules: {
      minWidth: 292,
      marginRight: 108,
      height: 160,
    },
    cancellation: {
      width: 341,
      height: 140,
    },
    label: {
      fontFamily: 'Quicksand',
      fontSize: 19,
      color: '#1F2041',
    },
    circle: {
      width: 10,
      height: 10,
      marginRight: 10,
      borderRadius: '50%',
      background: 'rgba(31, 32, 65, 0.25)',
    },
    textRegular: {
      color: 'rgba(31, 32, 65, 0.75)',
      fontFamily: 'Montserrat',
      fontSize: 14,
      fontWeight: 400,
      textDecoration: 'none',
    },
  };
});

const Rules = () => {
  const styles = useStyles();
  return (
    <>
      <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box className={styles.rules}>
          <Typography
            style={{ marginLeft: 20, marginBottom: 20 }}
            className={styles.label}
          >
            Rules
          </Typography>
          <Box
            style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}
          >
            <Box className={styles.circle}></Box>
            <Typography className={styles.textRegular}>
              Not allowed with pets
            </Typography>
          </Box>
          <Box
            style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}
          >
            <Box style={{}} className={styles.circle}></Box>
            <Typography className={styles.textRegular}>
              No parties and events
            </Typography>
          </Box>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Box className={styles.circle}></Box>
            <Typography className={styles.textRegular}>
              Arrival time is after 13:00,
              <br /> and departure time is before 12:00
            </Typography>
          </Box>
        </Box>
        <Box className={styles.cancellation}>
          <Typography style={{ marginBottom: 20 }} className={styles.label}>
            Cancellation
          </Typography>
          <Typography className={styles.textRegular}>
            Free cancellation within 48 hours. After that, if canceled no later
            than 5 days in advance before arrival, you will receive a full
            refund minus the service fee.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Rules;
