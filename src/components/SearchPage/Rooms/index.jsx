import { Box, Typography } from '@material-ui/core';
import React from 'react';
import Room from './Room';

const rooms = [
  {
    id: 1,
    number: 888,
    type: 'Luxury',
    rate: 5,
    imageUrl: '../../img/rooms/1.png',
    price: 153,
    comments: 145,
  },
  {
    id: 2,
    number: 840,
    type: null,
    rate: 4,
    imageUrl: '../../img/rooms/2.png',
    price: 150,
    comments: 65,
  },
  {
    id: 3,
    number: 980,
    type: 'Luxury',
    rate: 3,
    imageUrl: '../../img/rooms/3.png',
    price: 132,
    comments: 35,
  },
  {
    id: 4,
    number: 856,
    type: null,
    rate: 5,
    imageUrl: '../../img/rooms/4.png',
    price: 113,
    comments: 19,
  },
  {
    id: 5,
    number: 740,
    type: null,
    rate: 4,
    imageUrl: '../../img/rooms/5.png',
    price: 93,
    comments: 44,
  },
  {
    id: 6,
    number: 982,
    type: null,
    rate: 3,
    imageUrl: '../../img/rooms/6.png',
    price: 90,
    comments: 56,
  },
  {
    id: 7,
    number: 678,
    type: null,
    rate: 5,
    imageUrl: '../../img/rooms/7.png',
    price: 85,
    comments: 45,
  },
  {
    id: 8,
    number: 450,
    type: null,
    rate: 4,
    imageUrl: '../../img/rooms/8.png',
    price: 82,
    comments: 39,
  },
  {
    id: 9,
    number: 350,
    type: null,
    rate: 3,
    imageUrl: '../../img/rooms/9.png',
    price: 77,
    comments: 77,
  },
  {
    id: 10,
    number: 666,
    type: null,
    rate: 5,
    imageUrl: '../../img/rooms/10.png',
    price: 77,
    comments: 25,
  },
  {
    id: 11,
    number: 444,
    type: null,
    rate: 3,
    imageUrl: '../../img/rooms/11.png',
    price: 77,
    comments: 15,
  },
  {
    id: 12,
    number: 352,
    type: null,
    rate: 3,
    imageUrl: '../../img/rooms/12.png',
    price: 77,
    comments: 53,
  },
];

const Rooms = () => {
  return (
    <>
      <Box style={{ marginTop: 30 }}>
        <Typography
          variant="h1"
          style={{
            fontFamily: 'Quicksand',
            fontSize: 24,
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          The rooms that we have chosen for you
        </Typography>
        <Room />
      </Box>
    </>
  );
};

export default Rooms;
