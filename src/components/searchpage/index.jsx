import React from 'react';
import { Box, Container } from '@material-ui/core';
import SideBar from './sidebar';
import Rooms from './rooms';

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
  updatedRooms,
  isLoading,
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
  return (
    <>
      <Box>
        <Container maxWidth="lg">
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
              checkedSmoking={checkedSmoking}
              setCheckedSmoking={setCheckedSmoking}
              checkedPets={checkedPets}
              setCheckedPets={setCheckedPets}
              checkedGuests={checkedGuests}
              setCheckedGuests={setCheckedGuests}
              checkedWideCorridor={checkedWideCorridor}
              setCheckedWideCorridor={setCheckedWideCorridor}
              checkedAssistant={checkedAssistant}
              setCheckedAssistant={setCheckedAssistant}
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
              bedroomsCount={bedroomsCount}
              setBedroomsCount={setBedroomsCount}
              bedsCount={bedsCount}
              setBedsCount={setBedsCount}
              bathroomsCount={bathroomsCount}
              setBathroomsCount={setBathroomsCount}
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
              checkedSmoking={checkedSmoking}
              setCheckedSmoking={setCheckedSmoking}
              checkedPets={checkedPets}
              setCheckedPets={setCheckedPets}
              checkedGuests={checkedGuests}
              setCheckedGuests={setCheckedGuests}
              checkedWideCorridor={checkedWideCorridor}
              setCheckedWideCorridor={setCheckedWideCorridor}
              checkedAssistant={checkedAssistant}
              setCheckedAssistant={setCheckedAssistant}
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
              bedroomsCount={bedroomsCount}
              setBedroomsCount={setBedroomsCount}
              bedsCount={bedsCount}
              setBedsCount={setBedsCount}
              bathroomsCount={bathroomsCount}
              setBathroomsCount={setBathroomsCount}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SearchPage;