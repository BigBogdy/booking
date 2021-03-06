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

const SideBar = ({
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
  selectedPrice,
  handleSliderChange,
  checkedSmoking,
  setCheckedSmoking,
  checkedPets,
  setCheckedPets,
  checkedGuests,
  setCheckedGuests,
  checkedWideCorridor,
  setCheckedWideCorridor,
  checkedAssistant,
  setCheckedAssistant,
  checkedBreakfast,
  setCheckedBreakfast,
  checkedDesk,
  setCheckedDesk,
  checkedWorktable,
  setCheckedWorktable,
  checkedCrib,
  setCheckedCrib,
  checkedTv,
  setCheckedTv,
  checkedShampoo,
  setCheckedShampoo,
  bedroomsCount,
  setBedroomsCount,
  bedsCount,
  setBedsCount,
  bathroomsCount,
  setBathroomsCount,
}) => {
  const styles = useStyles();

  return (
    <>
      <Hidden mdDown>
        <Box className={styles.container} style={{ marginRight: 60 }}>
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
          />
          <SliderPrice
            selectedPrice={selectedPrice}
            handleSliderChange={handleSliderChange}
          />
          <Optional
            checkedSmoking={checkedSmoking}
            setCheckedSmoking={setCheckedSmoking}
            checkedPets={checkedPets}
            setCheckedPets={setCheckedPets}
            checkedGuests={checkedGuests}
            setCheckedGuests={setCheckedGuests}
          />
          <Availability
            checkedWideCorridor={checkedWideCorridor}
            setCheckedWideCorridor={setCheckedWideCorridor}
            checkedAssistant={checkedAssistant}
            setCheckedAssistant={setCheckedAssistant}
          />
          <SelectorConveniencesSideBar
            bedroomsCount={bedroomsCount}
            setBedroomsCount={setBedroomsCount}
            bedsCount={bedsCount}
            setBedsCount={setBedsCount}
            bathroomsCount={bathroomsCount}
            setBathroomsCount={setBathroomsCount}
          />
          <Additionals
            checkedBreakfast={checkedBreakfast}
            setCheckedBreakfast={setCheckedBreakfast}
            checkedDesk={checkedDesk}
            setCheckedDesk={setCheckedDesk}
            checkedWorktable={checkedWorktable}
            setCheckedWorktable={setCheckedWorktable}
            checkedCrib={checkedCrib}
            setCheckedCrib={setCheckedCrib}
            checkedTv={checkedTv}
            setCheckedTv={setCheckedTv}
            checkedShampoo={checkedShampoo}
            setCheckedShampoo={setCheckedShampoo}
          />
        </Box>
      </Hidden>
    </>
  );
};

export default SideBar;
