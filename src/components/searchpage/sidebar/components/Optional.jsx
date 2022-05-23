import { Box, Checkbox, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
  };
});

const Optional = () => {
  const styles = useStyles();
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Box style={{ marginLeft: 26, marginBottom: 30 }}>
        <Typography className={styles.textBold}>Optional</Typography>
        <Box style={{ display: 'flex' }}>
          <input
            className="check"
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          />
          <Typography
            className={styles.textRegular}
            style={{ fontSize: 14, alignItems: 'center', display: 'flex' }}
          >
            Smoking is allowed
          </Typography>
        </Box>
        <Box style={{ display: 'flex' }}>
          <input
            className="check"
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          />
          <Typography
            className={styles.textRegular}
            style={{ fontSize: 14, alignItems: 'center', display: 'flex' }}
          >
            Allowed with pets
          </Typography>
        </Box>
        <Box style={{ display: 'flex' }}>
          <input
            className="check"
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          />
          <Typography
            className={styles.textRegular}
            style={{ fontSize: 14, alignItems: 'center', display: 'flex' }}
          >
            Allowed to invite guests
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Optional;
