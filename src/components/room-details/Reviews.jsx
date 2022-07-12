import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Box, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => {
  return {
    content: { width: 712, marginBottom: 30 },
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
const Reviews = ({ item }) => {
  const styles = useStyles();
  return (
    <>
      <Box className={styles.content}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 22,
          }}
        >
          <Typography className={styles.label}>Guest reviews</Typography>
          <Typography
            style={{ cursor: 'pointer', marginTop: 5, marginRight: 25 }}
            className={styles.textRegular}
          >
            {item.comments?.length} reviews
          </Typography>
        </Box>
        {item.comments[0] ? (
          item.comments.map((i) => (
            <Box>
              <Box style={{ display: 'flex', marginBottom: 22 }}>
                <Box>
                  <Avatar
                    style={{
                      width: 48,
                      height: 48,
                      margin: '0px 10px 9px 0px',
                    }}
                    src={i?.avatar}
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
                      style={{
                        width: 10,
                        height: 10,
                        margin: '0px 4px 2px 5px',
                      }}
                    />
                    {i?.likes}
                  </Typography>
                </Box>
                <Box>
                  <Typography className={styles.textBold}>{i?.name}</Typography>
                  <Typography
                    style={{ marginBottom: 10 }}
                    className={styles.textRegular}
                  >
                    {i?.online}
                  </Typography>
                  <Typography className={styles.textRegular}>
                    {i?.comment}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))
        ) : (
          <Typography style={{ marginBottom: 188 }}></Typography>
        )}
      </Box>
    </>
  );
};

export default Reviews;
