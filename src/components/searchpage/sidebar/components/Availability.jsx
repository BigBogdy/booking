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

const Availability = () => {
  const styles = useStyles();
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Box style={{ marginLeft: 26, marginBottom: 30 }}>
        <Typography className={styles.textBold}>Availability</Typography>
        <Box style={{ display: 'flex' }}>
          <div>
            <input
              className="check"
              type="checkbox"
              checked={checked}
              onChange={handleChange}
            />
          </div>
          <Box style={{ width: 233, marginTop: 8 }}>
            <Typography
              className={styles.textBold}
              style={{
                fontSize: 14,
                color: 'rgba(31, 32, 65, 0.75)',
              }}
            >
              Wide corridor
            </Typography>
            <Typography className={styles.textRegular}>
              The width of the corridors in the room is at least 91 cm.
            </Typography>
          </Box>
        </Box>
        <Box style={{ display: 'flex' }}>
          <div>
            <input
              className="check"
              type="checkbox"
              checked={checked}
              onChange={handleChange}
            />
          </div>

          <Box style={{ width: 266, marginTop: 8 }}>
            <Typography
              className={styles.textBold}
              style={{
                fontSize: 14,
                color: 'rgba(31, 32, 65, 0.75)',
              }}
            >
              Assistant for the disabled
            </Typography>
            <Typography className={styles.textRegular}>
              A specialist will meet you on the 1st floor and take you to your
              room
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Availability;
