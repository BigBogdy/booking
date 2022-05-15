import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import '../../Main/DatePickerStyles/datepicker.scss';
import { Box, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    dates: {
      border: '1px solid rgba(31, 32, 65, 0.25)',
      borderRadius: 4,
      height: 40,
      paddingLeft: 15,
      width: 247,
      [theme.breakpoints.down('xs')]: {
        width: 140,
      },
    },
  };
});

const DatesPickerSideBar = () => {
  const styles = useStyles();

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  // const selectionRange = {
  //   startDate: startDate,
  //   endDate: endDate,
  //   key: 'selection',
  // };

  return (
    <>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'start',
          marginBottom: 19.4,
        }}
      >
        <Box>
          <DatePicker
            className={styles.dates}
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
            dateFormat="dd MMMM"
            placeholderText="DD.MM.YYYY"
          />
        </Box>
      </Box>
    </>
  );
};
export default DatesPickerSideBar;
