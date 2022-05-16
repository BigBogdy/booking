import { Box, Card, Divider, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Stars = withStyles({
  root: {
    color: '#BC9CFF',
  },
})(Rating);
const useStyles = makeStyles((theme) => {
  return {
    card: {
      height: 257,
      width: 270,
    },
    img: {
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      width: 270,
      height: 151,
    },
    number: {
      fontFamily: 'Quicksand',
      color: '#1F2041',
      fontWeight: 700,
    },
    textRegular: {
      color: 'rgba(31, 32, 65, 0.5)',
      fontFamily: 'Montserrat',
      fontWeight: 400,
      fontSize: 14,
    },
    textBold: {
      color: 'rgba(31, 32, 65, 0.5)',
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: 14,
    },
  };
});

const Room = () => {
  const styles = useStyles();
  return (
    <>
      <Card className={styles.card}>
        <Typography className={styles.img} style={{ marginBottom: 20 }}>
          <img src="../../img/rooms/1.png" alt="1" />
        </Typography>
        <Box style={{ padding: '0px 18.5px' }}>
          <Box
            style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}
          >
            <Typography className={styles.number} style={{ marginRight: 7 }}>
              № 888
            </Typography>
            <Typography
              style={{
                color: '#BC9CFF',
                fontFamily: 'Montserrat',
                fontWeight: 700,
                fontSize: 12,
                marginRight: 32,
                textTransform: 'uppercase',
                marginTop: 3.2,
                width: 41,
              }}
            >
              Luxury
            </Typography>
            <Typography
              className={styles.textBold}
              style={{
                marginTop: 2,
                marginRight: 3,
              }}
            >
              200$
            </Typography>
            <Typography
              className={styles.textRegular}
              style={{
                marginTop: 2,
              }}
            >
              per day
            </Typography>
          </Box>
          <Divider />
          <Box style={{ marginTop: 10, display: 'flex' }}>
            <Stars
              style={{ marginRight: 15 }}
              defaultValue={4}
              name="half-rating"
              precision={0.5}
              readOnly
              icon={<StarIcon />}
              emptyIcon={<StarBorderIcon />}
            />
            <Typography
              className={styles.textBold}
              style={{
                marginTop: 2,
                marginRight: 3,
              }}
            >
              135
            </Typography>
            <Typography className={styles.textRegular} style={{ marginTop: 2 }}>
              Comments
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Room;
