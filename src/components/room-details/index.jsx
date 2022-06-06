import { Box, Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogData from '../room-details/detailsData';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Empty from '../../common/Empty';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import InfoRoom from './InfoRoom';
import RateRoom from './RateRoom';
import ReceiptCard from './ReceiptCard';
import Reviews from './Reviews';
import Rules from './Rules';

const useStyles = makeStyles((theme) => {
  return {
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
const RoomDetails = () => {
  const styles = useStyles();

  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = BlogData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);
  return (
    <>
      {item ? (
        <Container>
          <Link to="/search">Go Back</Link>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              marginBottom: 70,
            }}
          >
            <img className={styles.img1} src={item.images[0]} alt="img1" />
            <Box>
              <img className={styles.img2} src={item.images[1]} alt="img2" />
              <img className={styles.img3} src={item.images[2]} alt="img3" />
            </Box>
          </Box>
          <Box style={{ display: 'flex' }}>
            <Box>
              <Box style={{ display: 'flex', marginBottom: 30 }}>
                <InfoRoom item={item} />
                <RateRoom item={item} />
              </Box>
              <Reviews />
              <Rules />
            </Box>
            <ReceiptCard />
          </Box>
        </Container>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default RoomDetails;
