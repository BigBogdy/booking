import React from 'react';
import DatePicker from 'react-datepicker';
import '../../../components/main/datePickerStyles/datepicker.scss';
import { Box, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    dates: {
      [theme.breakpoints.down('xs')]: {
        width: 140,
      },
      border: '1px solid rgba(31, 32, 65, 0.25)',
      borderRadius: 4,
      color: 'rgba(31, 32, 65, 0.75)',
      cursor: 'default',
      fontFamily: 'Montserrat',
      fontSize: 14,
      height: 40,
      paddingLeft: 15,
      width: 104,
    },
    textBold: {
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  };
});

const DatesPickerSideBar = ({ startDate, setStart, endDate, setEnd }) => {
  const styles = useStyles();

  return (
    <>
      <Box style={{ marginBottom: 19.5 }}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'start',
            marginBottom: 19.4,
          }}
        >
          <Box>
            <Typography className={styles.textBold} style={{ marginBottom: 5 }}>
              dates of stay at the hotel
            </Typography>
            <Box style={{ display: 'flex' }}>
              <DatePicker
                className={styles.dates}
                selected={startDate}
                onChange={setStart}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                dateFormat="dd MMMM"
                placeholderText="DD.MM.YYYY"
                // isClearable={true}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: 5,
                  color: 'rgba(31, 32, 65, 0.75)',
                }}
              >
                –
              </div>
              <DatePicker
                className={styles.dates}
                selected={endDate}
                onChange={setEnd}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="dd MMMM"
                placeholderText="DD.MM.YYYY"
                // isClearable={true}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default DatesPickerSideBar;
