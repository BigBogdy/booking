import { Box, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SideBar from './sidebar';
import Rooms from './rooms';

const useStyles = makeStyles((theme) => {
  return {};
});

const SearchPage = ({
  startDate,
  setStart,
  endDate,
  setEnd,
  onClear,
  adultsCount,
  setAdultsCount,
  kidsCount,
  infantsCount,
  setKidsCount,
  setInfantsCount,
}) => {
  // const styles = useStyles();
  const [price, setPrice] = useState([0, 200]);

  const handleSliderChange = (event, newValue) => {
    setPrice(newValue);
  };
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
  const onPrice = () => {};

  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Box style={{ display: 'flex' }}>
            <SideBar
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
              onClear={onClear}
              price={price}
              handleSliderChange={handleSliderChange}
            />
            <Rooms rooms={rooms} isLoading={isLoading} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SearchPage;
