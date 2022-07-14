import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Box, Divider, Typography } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const useStyles = makeStyles((theme) => {
  return {
    content: {
      height: 273,

      width: 291,
      marginRight: 70,
      [theme.breakpoints.down('xs')]: {
        width: 250,
        height: 290,
      },
      [theme.breakpoints.down('lg')]: {
        marginTop: 15,
      },
    },
    img1: {
      height: 485,
      minWidth: 900,
    },
    img2: {
      height: 243,
      width: 461,
    },
    img3: {
      height: 243,
      marginTop: -5.5,
      width: 461,
    },
    label: {
      fontFamily: 'Quicksand',
      fontWeight: 700,
      marginBottom: 20,
      fontSize: 19,
    },
    icon: {
      color: '#BC9CFF',
      height: 48,
      marginRight: 10,
      width: 48,
      marginTop: -5,
    },
    text: {
      color: 'rgba(31, 32, 65, 0.75)',
      fontFamily: 'Montserrat',
      fontSize: 14,
    },
  };
});

const InfoRoom = ({ item }) => {
  const styles = useStyles();
  return (
    <Box className={styles.content}>
      <Typography className={styles.label}>Room information</Typography>
      <Box style={{ display: 'flex', marginBottom: 17 }}>
        <InsertEmoticonIcon className={styles.icon} />
        <Box>
          <Typography style={{ fontWeight: 700 }} className={styles.text}>
            Comfort
          </Typography>
          <Typography className={styles.text}>{item.info[0]}</Typography>
        </Box>
      </Box>
      <Divider />
      <Box style={{ display: 'flex', marginBottom: 17, marginTop: 20 }}>
        <LocationCityIcon className={styles.icon} />
        <Box>
          <Typography style={{ fontWeight: 700 }} className={styles.text}>
            Convenience
          </Typography>
          <Typography className={styles.text}>{item.info[1]}</Typography>
        </Box>
      </Box>
      <Divider />
      <Box style={{ display: 'flex', marginTop: 20 }}>
        <WhatshotIcon className={styles.icon} />
        <Box>
          <Box>
            <Typography style={{ fontWeight: 700 }} className={styles.text}>
              Cosiness
            </Typography>
          </Box>
          <Typography className={styles.text}>{item.info[2]}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoRoom;
