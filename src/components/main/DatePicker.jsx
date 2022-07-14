import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import '../main/datePickerStyles/datepicker.scss';
import { Box, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    arrivingDate: {
      border: '1px solid rgba(31, 32, 65, 0.25)',
      borderRadius: 4,
      height: 40,
      marginRight: 20,
      paddingLeft: 15,
      width: 131,
      [theme.breakpoints.down('xs')]: {
        marginRight: 5,
        width: 90,
      },
      cursor: 'default',
      fontSize: 14,
      fontFamily: 'Montserrat',
      color: 'rgba(31, 32, 65, 0.75)',
    },
    departureDate: {
      border: '1px solid rgba(31, 32, 65, 0.25)',
      borderRadius: 4,
      height: 40,
      paddingLeft: 15,
      width: 131,
      [theme.breakpoints.down('xs')]: {
        width: 90,
      },
      cursor: 'default',
      fontSize: 14,
      fontFamily: 'Montserrat',
      color: 'rgba(31, 32, 65, 0.75)',
    },
    label: {
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 5,
      },
    },
  };
});

const DatesPicker = ({ startDate, endDate, setStart, setEnd }) => {
  const styles = useStyles();
  return (
    <>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 19.4,
        }}
      >
        <Box>
          <Typography className={styles.label}>Arriving</Typography>
          <DatePicker
            className={styles.arrivingDate}
            selected={startDate}
            onChange={setStart}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD.MM.YYYY"
            // isClearable={true}
          />
        </Box>
        <Box>
          <Typography className={styles.label}>Departure</Typography>
          <DatePicker
            className={styles.departureDate}
            selected={endDate}
            onChange={setEnd}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD.MM.YYYY"
            // isClearable={true}
          />
        </Box>
      </Box>
    </>
  );
};
export default DatesPicker;
