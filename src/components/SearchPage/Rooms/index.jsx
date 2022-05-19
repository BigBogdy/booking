import { Box, Grid, Typography } from '@material-ui/core';
import { Repeat } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Room from './components/Room';
import Skeleton from './components/Skeleton';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://6284b002a48bd3c40b73d00d.mockapi.io/rooms')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setRooms(json);
        setIsLoading(false);
      });
  }, []);

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
                <Room
                  number={item.number}
                  type={item.type}
                  rate={item.rate}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  comments={item.comments}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Rooms;
