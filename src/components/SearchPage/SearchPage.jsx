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

  adultsCount,
  setAdultsCount,
  kidsCount,
  infantsCount,
  setKidsCount,
  setInfantsCount,
}) => {
  // const styles = useStyles();
  const [selectedPrice, setSelectedPriced] = useState([0, 200]);

  const handleSliderChange = (event, newValue) => {
    setSelectedPriced(newValue);
  };
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const applyFilters = () => {
    const updatedRooms = rooms;
    //Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedRooms.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    setRooms(updatedRooms);
  };
  useEffect(() => {
    applyFilters();
  }, [selectedPrice]);

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
              selectedPrice={selectedPrice}
              handleSliderChange={handleSliderChange}
              applyFilters={applyFilters}
            />
            <Rooms
              rooms={rooms}
              isLoading={isLoading}
              selectedPrice={selectedPrice}
              handleSliderChange={handleSliderChange}
              applyFilters={applyFilters}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SearchPage;
