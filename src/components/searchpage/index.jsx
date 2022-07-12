import { Box, Container, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import TuneIcon from '@material-ui/icons/Tune';
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
  checked,
  setChecked,
  adultsCount,
  setAdultsCount,
  kidsCount,
  infantsCount,
  setKidsCount,
  setInfantsCount,
  rooms,
  updatedRooms,
  isLoading,
  selectedPrice,
  handleSliderChange,
}) => {
  // const styles = useStyles();

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
              checked={checked}
              setChecked={setChecked}
              // applyFilters={applyFilters}
            />
            <Rooms
              updatedRooms={updatedRooms}
              isLoading={isLoading}
              selectedPrice={selectedPrice}
              handleSliderChange={handleSliderChange}
              adultsCount={adultsCount}
              setAdultsCount={setAdultsCount}
              setKidsCount={setKidsCount}
              setInfantsCount={setInfantsCount}
              kidsCount={kidsCount}
              infantsCount={infantsCount}

              // applyFilters={applyFilters}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SearchPage;
