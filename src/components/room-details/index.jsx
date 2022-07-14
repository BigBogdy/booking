import { Box, Container, Divider, Hidden } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FakeData from '../room-details/detailsData';
import { makeStyles } from '@material-ui/core/styles';
import Empty from '../../common/Empty';

import InfoRoom from './InfoRoom';
import RateRoom from './RateRoom';
import ReceiptCard from './ReceiptCard';
import Reviews from './Reviews';
import Rules from './Rules';
import Loading from '../../common/Loading';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      marginBottom: 70,
      [theme.breakpoints.down('xs')]: {
        padding: 0,
      },
    },
    content: {
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        display: 'block',
        margin: '0px auto',
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
    roomRates: {
      display: 'flex',
      marginBottom: 30,
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
  };
});
const RoomDetails = ({
  startDate,
  setStart,
  endDate,
  setEnd,
  adultsCount,
  setAdultsCount,
  setKidsCount,
  setInfantsCount,
  kidsCount,
  infantsCount,
  numberOfGuests,
  rooms,
  details,
}) => {
  const styles = useStyles();

  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [roomItem, setRoomItem] = useState([]);

  useEffect(() => {
    let roomItem = rooms.find(
      (roomItem) => roomItem.id === Number.parseInt(id)
    );
    if (roomItem) {
      setRoomItem(roomItem);
    }
  }, [rooms, id]);

  useEffect(() => {
    let item = details.find((item) => item.id === Number.parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [details, id]);

  return (
    <>
      {item ? (
        <>
          <Container className={styles.container}>
            <Hidden mdDown>
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
                  <img
                    className={styles.img2}
                    src={item.images[1]}
                    alt="img2"
                  />
                  <img
                    className={styles.img3}
                    src={item.images[2]}
                    alt="img3"
                  />
                </Box>
              </Box>
            </Hidden>
            <Box className={styles.content}>
              <Box>
                <Box className={styles.roomRates}>
                  <InfoRoom item={item} />
                  <RateRoom item={item} />
                </Box>
                <Reviews item={item} />
                <Rules />
              </Box>
              <ReceiptCard
                startDate={startDate}
                setStart={setStart}
                endDate={endDate}
                setEnd={setEnd}
                adultsCount={adultsCount}
                setAdultsCount={setAdultsCount}
                setKidsCount={setKidsCount}
                setInfantsCount={setInfantsCount}
                kidsCount={kidsCount}
                infantsCount={infantsCount}
                roomItem={roomItem}
                numberOfGuests={numberOfGuests}
              />
            </Box>
          </Container>
          <Divider style={{ marginBottom: 110 }} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default RoomDetails;
