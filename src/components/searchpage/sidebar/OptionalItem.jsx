import React, { useState } from 'react';
import { Box, Checkbox, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../../index.scss';

const useStyles = makeStyles((theme) => {
  return {
    textRegular: {
      color: 'rgba(31, 32, 65, 0.5)',
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 400,
      textTransform: 'uppercase',
      [theme.breakpoints.down('md')]: {
        fontSize: 10,
      },
    },
    container: {
      marginTop: 30,
    },
    checkbox: {
      marginLeft: -5,
      marginRight: 10,
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        marginRight: 5,
      },
    },
  };
});
const OptionalItem = ({ text, checked, setChecked }) => {
  const styles = useStyles();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Box>
        <label
          style={{ display: 'flex', marginBottom: 10, userSelect: 'none' }}
        >
          <Box className={styles.checkbox}>
            <input
              className="check"
              type="checkbox"
              checked={checked}
              onChange={handleChange}
            />
          </Box>
          <Typography
            className={styles.textRegular}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {text}
          </Typography>
        </label>
      </Box>
    </>
  );
};
export default OptionalItem;
