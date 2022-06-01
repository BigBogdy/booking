import React, { useState } from 'react';
import { Box, Checkbox, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../../index.scss';

const useStyles = makeStyles((theme) => {
  return {
    textBold: {
      fontFamily: 'Montserrat',
      fontSize: 14,
      fontWeight: 700,
      textTransform: 'uppercase',
      color: 'rgba(31, 32, 65, 0.75)',
      [theme.breakpoints.down('md')]: {
        margin: '0px 0px 0px 0px',
        fontSize: 12,
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
    container: {
      marginTop: 30,
    },
    checkbox: {
      marginRight: 10,
      marginLeft: -5,
      [theme.breakpoints.down('md')]: {
        marginRight: 5,
      },
    },
  };
});
const AvailabilityItem = (props) => {
  const [checked, setChecked] = useState(false);
  const styles = useStyles();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Box style={{ display: 'flex', marginBottom: 10 }}>
        <Box className={styles.checkbox}>
          <input
            className="check"
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Typography
            className={styles.textBold}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {props.title}
          </Typography>
          <Typography style={{ width: 203 }} className={styles.textRegular}>
            {props.text}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default AvailabilityItem;
