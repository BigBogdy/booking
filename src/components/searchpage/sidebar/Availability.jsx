import { Box, Checkbox, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    content: {
      marginLeft: 26,
      marginBottom: 21,
      [theme.breakpoints.down('md')]: {
        margin: '15px 0px 5px 10px',
      },
    },
    textBold: {
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      [theme.breakpoints.down('md')]: {
        fontSize: 10,
        marginLeft: 5,
        marginBottom: 10,
      },
    },
    textRegular: {
      color: 'rgba(31, 32, 65, 0.5)',
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 400,
      textTransform: 'uppercase',
      [theme.breakpoints.down('md')]: {
        margin: '0px 0px 0px 0px',
        fontSize: 10,
      },
    },
  };
});

const Availability = ({
  checkedWideCorridor,
  setCheckedWideCorridor,
  checkedAssistant,
  setCheckedAssistant,
}) => {
  const styles = useStyles();

  return (
    <>
      <Box className={styles.content}>
        <Typography className={styles.textBold} style={{ marginBottom: 16 }}>
          Availability
        </Typography>
        <Box>
          <Box>
            <label
              style={{ display: 'flex', marginBottom: 10, marginLeft: -5 }}
            >
              <input
                className="check"
                type="checkbox"
                checked={checkedWideCorridor}
                onChange={() => setCheckedWideCorridor(!checkedWideCorridor)}
              />
              <Box style={{ marginLeft: 5, userSelect: 'none', width: 203 }}>
                <Typography
                  className={styles.textBold}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 10,
                    marginTop: 5,
                  }}
                >
                  Wide corridor
                </Typography>
                <Typography className={styles.textRegular}>
                  The width of the corridors in the room is at least 91 cm.
                </Typography>
              </Box>
            </label>
          </Box>
          <Box>
            <label
              style={{ display: 'flex', marginBottom: 10, marginLeft: -5 }}
            >
              <input
                className="check"
                type="checkbox"
                checked={checkedAssistant}
                onChange={() => setCheckedAssistant(!checkedAssistant)}
              />
              <Box style={{ marginLeft: 5, userSelect: 'none', width: 203 }}>
                <Typography
                  className={styles.textBold}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 10,
                    marginTop: 5,
                  }}
                >
                  Assistant for the disabled
                </Typography>
                <Typography className={styles.textRegular}>
                  A specialist will meet you on the 1st floor and take you to
                  your room
                </Typography>
              </Box>
            </label>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Availability;
