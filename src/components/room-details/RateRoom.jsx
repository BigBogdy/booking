import { Box, Typography } from '@material-ui/core';
import React from 'react';
import ChartPie from './ChartPie';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    content: {
      width: 310,
      marginRight: 108,
      [theme.breakpoints.down('xs')]: {
        width: 250,
      },
    },
    container: {
      display: 'flex',
      [theme.breakpoints.down('xs')]: {
        display: 'block',
      },
    },
    label: {
      fontFamily: 'Quicksand',
      fontSize: 19,
    },
    circle: {
      width: 10,
      height: 10,
      marginRight: 5,
      borderRadius: '50%',
    },
    circleBox: {
      marginTop: 54,
      [theme.breakpoints.down('xs')]: {
        marginTop: 10,
      },
    },
    text: {
      fontFamily: 'Montserrat',
    },
  };
});

const RateRoom = ({ item }) => {
  const styles = useStyles();
  return (
    <>
      <div>
        <Box className={styles.content}>
          <Typography className={styles.label}>Room impressions</Typography>
          <Box className={styles.container}>
            <Box>
              <ChartPie item={item} />
            </Box>
            <Box>
              <Box className={styles.circleBox}>
                <Box className={styles.circle}></Box>
              </Box>
              <Box style={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  style={{
                    background:
                      'linear-gradient(180deg, #FFE39C 0%, #FFBA9C 100%)',
                  }}
                  className={styles.circle}
                ></Box>
                <Typography className={styles.text}>Excellent</Typography>
              </Box>
              <Box style={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  style={{
                    background:
                      'linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)',
                  }}
                  className={styles.circle}
                ></Box>
                <Typography className={styles.text}>Good</Typography>
              </Box>
              <Box style={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  style={{
                    background:
                      'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
                  }}
                  className={styles.circle}
                ></Box>
                <Typography className={styles.text}>Fine</Typography>
              </Box>
              <Box style={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  style={{
                    background:
                      'linear-gradient(180deg, #919191 0%, #3D4975 100%)',
                  }}
                  className={styles.circle}
                ></Box>
                <Typography className={styles.text}>Terrible</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default RateRoom;
