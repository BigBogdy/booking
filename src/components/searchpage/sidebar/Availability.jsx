import { Box, Checkbox, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AvailabilityItem from './AvailabilityItem';

const availabilityLinks = [
  {
    id: 1,
    title: 'Wide corridor',
    text: ' The width of the corridors in the room is at least 91 cm.',
  },
  {
    id: 2,
    title: ' Assistant for the disabled',
    text: ' A specialist will meet you on the 1st floor and take you to your room',
  },
];

const useStyles = makeStyles((theme) => {
  return {
    content: {
      marginLeft: 26,
      marginBottom: 21,
      [theme.breakpoints.down('md')]: {
        margin: '15px 0px 5px 5px',
      },
    },
    textBold: {
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      marginBottom: 16,
      textTransform: 'uppercase',
      [theme.breakpoints.down('md')]: {
        fontSize: 10,
        marginLeft: 5,
        marginBottom: 10,
      },
    },
  };
});

const Availability = () => {
  const styles = useStyles();

  return (
    <>
      <Box className={styles.content}>
        <Typography className={styles.textBold}>Availability</Typography>
        <Box>
          {availabilityLinks.map((obj) => (
            <AvailabilityItem title={obj.title} text={obj.text} key={obj.id} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Availability;
