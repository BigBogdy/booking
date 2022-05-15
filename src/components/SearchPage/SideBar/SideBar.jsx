import { Box, Checkbox, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DatesPickerSideBar from './DatePickerSideBar';
import SelectorSideBar from './SelectorGuestsSideBar';
import SliderPrice from './SliderPrice';
import SelectorConveniencesSideBar from './SelectorConveniencesSideBar';

const useStyles = makeStyles((theme) => {
  return {
    textBold: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: 12,
      textTransform: 'uppercase',
    },
    textRegular: {
      fontFamily: 'Montserrat',
      fontWeight: 400,
      fontSize: 12,
      color: 'rgba(31, 32, 65, 0.5)',
      textTransform: 'uppercase',
    },
    container: {
      marginTop: 30,
    },
  };
});

const SideBar = () => {
  const styles = useStyles();
  return (
    <>
      <Box className={styles.container}>
        <Box style={{ marginBottom: 19.5 }}>
          <Typography className={styles.textBold} style={{ marginBottom: 5 }}>
            dates of stay at the hotel
          </Typography>
          <DatesPickerSideBar />
        </Box>
        <Box style={{ marginBottom: 30 }}>
          <Typography
            className={styles.textBold}
            style={{ marginBottom: 4.56 }}
          >
            Guests
          </Typography>
          <SelectorSideBar />
        </Box>
        <Box style={{ marginBottom: 29 }}>
          <Box style={{ display: 'flex' }}>
            <Typography className={styles.textBold} style={{ marginRight: 42 }}>
              Price range
            </Typography>
            <Typography className={styles.textRegular}>500$ - 1000$</Typography>
          </Box>
          <SliderPrice />
          <Typography className={styles.textRegular}>
            Cost per night in the room
          </Typography>
        </Box>
        <Box style={{ marginLeft: 26, marginBottom: 30 }}>
          <Typography className={styles.textBold}>Optional</Typography>
          <Box style={{ display: 'flex' }}>
            <Checkbox />
            <Typography
              className={styles.textRegular}
              style={{ fontSize: 14, alignItems: 'center', display: 'flex' }}
            >
              Smoking is allowed
            </Typography>
          </Box>
          <Box style={{ display: 'flex' }}>
            <Checkbox defaultChecked />
            <Typography
              className={styles.textRegular}
              style={{ fontSize: 14, alignItems: 'center', display: 'flex' }}
            >
              Allowed with pets
            </Typography>
          </Box>
          <Box style={{ display: 'flex' }}>
            <Checkbox defaultChecked />
            <Typography
              className={styles.textRegular}
              style={{ fontSize: 14, alignItems: 'center', display: 'flex' }}
            >
              Allowed to invite guests
            </Typography>
          </Box>
        </Box>
        <Box style={{ marginLeft: 26, marginBottom: 30 }}>
          <Typography className={styles.textBold}>Availability</Typography>
          <Box style={{ display: 'flex' }}>
            <div>
              <Checkbox />
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
              <Checkbox />
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
        <Box style={{ marginBottom: 15.56 }}>
          <Typography className={styles.textBold} style={{ marginBottom: 4 }}>
            Conveniences of rooms
          </Typography>
          <SelectorConveniencesSideBar />
        </Box>
        <Box>
          <Typography>Additional convenience</Typography>
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
