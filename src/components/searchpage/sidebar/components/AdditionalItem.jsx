import React, { useState } from 'react';
import { Box, Checkbox, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../../../index.scss';

const useStyles = makeStyles((theme) => {
  return {
    textBold: {
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    textRegular: {
      color: 'rgba(31, 32, 65, 0.5)',
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 400,
      textTransform: 'uppercase',
    },
    container: {
      marginTop: 30,
    },
    checkboxn: {
      backgroundColor: '#FFF',
      border: '#fefefe',
    },
  };
});
const AdditionalItem = (props) => {
  const [checked, setChecked] = useState(false);
  const styles = useStyles();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Box style={{ display: 'flex', marginBottom: 10 }}>
        <input
          className="check"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />

        <Typography
          className={styles.textRegular}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          {props.name}
        </Typography>
      </Box>
    </>
  );
};
export default AdditionalItem;
