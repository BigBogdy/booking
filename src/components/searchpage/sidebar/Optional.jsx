import { Box, Checkbox, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    content: {
      marginBottom: 30,
      [theme.breakpoints.down('md')]: {
        margin: '10px 0px 5px 10px',
      },
    },
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
    textBold: {
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      marginBottom: 17,
      [theme.breakpoints.down('md')]: {
        marginBottom: 5,
        fontSize: 10,
        marginLeft: 3,
      },
    },
    checkbox: {
      marginLeft: -5,
      marginRight: 10,
      margin: '0px 10px 10.55px -5px',
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        marginRight: 5,
      },
    },
  };
});

const Optional = ({
  checkedSmoking,
  setCheckedSmoking,
  checkedPets,
  setCheckedPets,
  checkedGuests,
  setCheckedGuests,
}) => {
  const styles = useStyles();

  return (
    <>
      <Box className={styles.content}>
        <Typography className={styles.textBold}>Optional</Typography>
        <Box>
          <Box>
            <form style={{ userSelect: 'none' }}>
              <label className={styles.checkbox}>
                <input
                  className="check"
                  type="checkbox"
                  checked={checkedSmoking}
                  onChange={() => setCheckedSmoking(!checkedSmoking)}
                  style={{ marginRight: 10 }}
                />

                <Typography
                  className={styles.textRegular}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  Smoking is allowed
                </Typography>
              </label>
              <label className={styles.checkbox}>
                <input
                  className="check"
                  type="checkbox"
                  checked={checkedPets}
                  onChange={() => setCheckedPets(!checkedPets)}
                  style={{ marginRight: 10 }}
                />

                <Typography
                  className={styles.textRegular}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  Allowed with pets
                </Typography>
              </label>
              <label className={styles.checkbox}>
                <input
                  className="check"
                  type="checkbox"
                  checked={checkedGuests}
                  onChange={() => setCheckedGuests(!checkedGuests)}
                  style={{ marginRight: 10 }}
                />
                <Typography
                  className={styles.textRegular}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  Allowed to invite guests
                </Typography>
              </label>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Optional;
