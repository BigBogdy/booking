import { Box, Hidden } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DatesPickerSideBar from './DatePickerSideBar';
import SelectorSideBar from './SelectorGuestsSideBar';
import SliderPrice from './SliderPrice';
import SelectorConveniencesSideBar from './SelectorConveniences';
import Additionals from './Additionals';
import Optional from './Optional';
import Availability from './Availability';

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

const SideBar = ({ propSearchObj }) => {
  const styles = useStyles();

  return (
    <>
      <Hidden mdDown>
        <Box className={styles.container} style={{ marginRight: 60 }}>
          <DatesPickerSideBar {...propSearchObj} />
          <SelectorSideBar {...propSearchObj} />
          <SliderPrice {...propSearchObj} />
          <Optional {...propSearchObj} />
          <Availability {...propSearchObj} />
          <SelectorConveniencesSideBar {...propSearchObj} />
          <Additionals {...propSearchObj} />
        </Box>
      </Hidden>
    </>
  );
};

export default SideBar;
