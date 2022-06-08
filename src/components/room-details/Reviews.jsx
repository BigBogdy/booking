import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Box, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => {
  return {
    content: { width: 712, height: 306, marginBottom: 30 },
    label: {
      color: '#1F2041',
      fontFamily: 'Quicksand',
      fontSize: 20,
      fontWeight: 700,
    },
    textRegular: {
      color: 'rgba(31, 32, 65, 0.75)',
      fontFamily: 'Montserrat',
      fontSize: 14,
      fontWeight: 400,
      textDecoration: 'none',
    },
    textBold: {
      color: 'rgba(31, 32, 65, 0.75)',
      fontFamily: 'Montserrat',
      fontSize: 14,
      fontWeight: 700,
    },
  };
});
const Reviews = () => {
  const styles = useStyles();
  return (
    <>
      <Box className={styles.content}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
        >
          <Typography className={styles.label}>Guest reviews</Typography>
          <Typography
            style={{ cursor: 'pointer' }}
            className={styles.textRegular}
          >
            2 reviews
          </Typography>
        </Box>
        <Box>
          <Box style={{ display: 'flex', marginBottom: 22 }}>
            <Box>
              <Avatar
                style={{ width: 48, height: 48, margin: '0px 10px 9px 0px' }}
                src=""
                alt=""
              />
              <Typography
                style={{
                  width: 35.7,
                  height: 16,
                  border: '2px solid #BC9CFF',
                  borderRadius: 10,
                  marginLeft: 4,
                  fontSize: 10,
                  color: '#BC9CFF',
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Montserrat',
                }}
              >
                <FavoriteIcon
                  style={{ width: 10, height: 10, margin: '0px 4px 2px 5px' }}
                />
                12
              </Typography>
            </Box>
            <Box>
              <Typography className={styles.textBold}>
                Marat Bulvaria
              </Typography>
              <Typography
                style={{ marginBottom: 10 }}
                className={styles.textRegular}
              >
                5 days ago
              </Typography>
              <Typography className={styles.textRegular}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat beatae ad hic iusto dolorum quod. Sequi quis obcaecati
                cumque iure dolorem nulla dicta ducimus voluptas, cum odit,
                incidunt laudantium consequatur.
              </Typography>
            </Box>
          </Box>
          <Box style={{ display: 'flex' }}>
            <Box>
              <Avatar
                style={{ width: 48, height: 48, margin: '0px 10px 9px 0px' }}
                src=""
                alt=""
              />
              <Typography
                style={{
                  width: 35.7,
                  height: 16,
                  border: '2px solid #BC9CFF',
                  borderRadius: 10,
                  marginLeft: 4,
                  fontSize: 10,
                  color: '#BC9CFF',
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Montserrat',
                }}
              >
                <FavoriteIcon
                  style={{ width: 10, height: 10, margin: '0px 4px 2px 5px' }}
                />
                2
              </Typography>
            </Box>
            <Box>
              <Typography className={styles.textBold}>
                Gulchatai Nurov
              </Typography>
              <Typography
                style={{ marginBottom: 10 }}
                className={styles.textRegular}
              >
                yesterday
              </Typography>
              <Typography className={styles.textRegular}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat beatae ad hic iusto dolorum quod. Sequi quis obcaecati
                cumque iure dolorem nulla dicta ducimus voluptas, cum odit,
                incidunt laudantium consequatur.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Reviews;
