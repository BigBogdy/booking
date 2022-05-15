import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import './DatePickerStyles/datepicker.scss';
import { Box, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    arrivingDate: {
      border: '1px solid rgba(31, 32, 65, 0.25)',
      borderRadius: 4,
      height: 44,
      marginRight: 20,
      paddingLeft: 15,
      width: 150,
      [theme.breakpoints.down('xs')]: {
        marginRight: 5,
        width: 140,
      },
    },
    departureDate: {
      border: '1px solid rgba(31, 32, 65, 0.25)',
      borderRadius: 4,
      height: 44,
      paddingLeft: 15,
      width: 150,
      [theme.breakpoints.down('xs')]: {
        width: 140,
      },
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

const DatesPicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const styles = useStyles();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

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
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            className={styles.arrivingDate}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD.MM.YYYY"
          />
        </Box>
        <Box>
          <Typography className={styles.label}>Departure</Typography>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className={styles.departureDate}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD.MM.YYYY"
          />
        </Box>
      </Box>
    </>
  );
};
export default DatesPicker;
