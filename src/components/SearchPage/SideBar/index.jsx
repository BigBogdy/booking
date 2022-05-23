import { Box, Checkbox, IconButton, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DatesPickerSideBar from './components/DatePickerSideBar';
import SelectorSideBar from './components/SelectorGuestsSideBar';
import SliderPrice from './components/SliderPrice';
import SelectorConveniencesSideBar from './components/SelectorConveniences';
import Additionals from './components/Additionals';
import Optional from './components/Optional';
import Availability from './components/Availability';

const useStyles = makeStyles((theme) => {
  return {
    textBold: {
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    textRegular: {
      color: 'rgba(31, 32, 65, 0.5)',
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 400,
      textTransform: 'uppercase',
    },
    container: {
      marginTop: 30,
    },
  };
});

const SideBar = ({
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
      <Box
        className={styles.container}
        style={{ marginBottom: 500, marginRight: 60, marginLeft: 50 }}
      >
        <DatesPickerSideBar
          startDate={startDate}
          setStart={setStart}
          endDate={endDate}
          setEnd={setEnd}
        />
        <SelectorSideBar
          adultsCount={adultsCount}
          setAdultsCount={setAdultsCount}
          setKidsCount={setKidsCount}
          setInfantsCount={setInfantsCount}
          kidsCount={kidsCount}
          infantsCount={infantsCount}
          onClear={onClear}
        />
        <SliderPrice />
        {/* <SliderP /> */}
        <Optional />
        <Availability />
        <SelectorConveniencesSideBar />
        <Additionals />
      </Box>
    </>
  );
};

export default SideBar;
