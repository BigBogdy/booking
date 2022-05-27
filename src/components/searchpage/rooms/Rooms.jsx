import { Box, Grid, Typography } from '@material-ui/core';
import { Repeat } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Room from './components/Room';
import Skeleton from './components/Skeleton';
import { Link } from 'react-router-dom';

const Rooms = ({ rooms, isLoading }) => {
  // console.log(rooms);
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

        <Box>
          <Grid
            container
            style={{
              gridGap: '20px 12px',
              gridTemplateColumns: 'repeat(auto-fit, 1fr)',
            }}
          >
            {isLoading && <Skeleton cards={12} />}
            {rooms.map((item) => (
              <Grid key={item.id} item>
                <Link
                  style={{ textDecoration: 'none' }}
                  to={'/details/' + item.id}
                >
                  <Room
                    number={item.number}
                    type={item.type}
                    rate={item.rate}
                    imageUrl={item.imageUrl}
                    price={item.price}
                    comments={item.comments}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Rooms;
