import { Box, Container } from '@material-ui/core';
import React from 'react';

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
  const styles = useStyles();
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
            />
            <Rooms />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SearchPage;
