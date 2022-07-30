import {
  Box,
  Divider,
  Grid,
  Hidden,
  IconButton,
  SwipeableDrawer,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import Room from './Room';
import SkeletonRoom from './SkeletonRoom';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Additionals from '../sidebar/Additionals';
import Optional from '../sidebar/Optional';
import SliderPrice from '../sidebar/SliderPrice';
import Availability from '../sidebar/Availability';
import SelectorConveniencesSideBar from '../sidebar/SelectorConveniences';

const useStyles = makeStyles((theme) => {
  return {
    content: {
      marginTop: 30,
      [theme.breakpoints.down('md')]: {
        marginTop: 20,
        margin: '0px auto',
      },
      [theme.breakpoints.down('sm')]: {
        marginTop: 15,
      },
    },
    label: {
      fontFamily: 'Quicksand',
      fontSize: 24,
      fontWeight: 700,
      marginBottom: 15,

      [theme.breakpoints.down('md')]: {
        fontSize: 20,
        display: 'flex',
        justifyContent: 'center',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 14,
        display: 'flex',
        justifyContent: 'center',
      },
    },
    rooms: {
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    btn: {
      background: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
      border: 'solid 2px #BC9CFF',
      color: '#fff',
      fontFamily: 'Montserrat',
      borderRadius: 7,
      height: 25,
      width: 200,
      marginBottom: 15,
      display: 'flex',

      fontWeight: 700,
      '&:hover': {
        background: '#FFFFFF',
        color: '#BC9CFF',
      },
    },
  };
});

const Rooms = ({
  updatedRooms,
  isLoading,
  selectedPrice,
  handleSliderChange,
  checked,
  setChecked,
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
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box className={styles.content}>
        <Typography className={styles.label} variant="h1">
          The rooms that we have chosen for you
        </Typography>
        <Hidden lgUp>
          <Typography
            component={'span'}
            variant={'body2'}
            style={{
              width: 100,
              margin: '0 auto',
              display: 'flex',
              cursor: 'pointer',
            }}
          >
            <Typography
              style={{
                alignItems: 'center',
              }}
              className={styles.btn}
              onClick={handleDrawerOpen}
            >
              <FilterListIcon style={{ marginRight: 5 }} />
              Filters
            </Typography>
            <SwipeableDrawer
              anchor="right"
              open={open}
              onOpen={handleDrawerOpen}
              onClose={handleDrawerClose}
            >
              <div>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronRightIcon style={{ focus: 'none' }} />
                </IconButton>
              </div>
              <Divider />
              <Optional
                checkedSmoking={checkedSmoking}
                setCheckedSmoking={setCheckedSmoking}
                checkedPets={checkedPets}
                setCheckedPets={setCheckedPets}
                checkedGuests={checkedGuests}
                setCheckedGuests={setCheckedGuests}
              />
              <Divider />
              <SliderPrice
                selectedPrice={selectedPrice}
                handleSliderChange={handleSliderChange}
              />
              <Divider />
              <Availability
                checkedWideCorridor={checkedWideCorridor}
                setCheckedWideCorridor={setCheckedWideCorridor}
                checkedAssistant={checkedAssistant}
                setCheckedAssistant={setCheckedAssistant}
              />
              <Divider />
              <SelectorConveniencesSideBar
                bedroomsCount={bedroomsCount}
                setBedroomsCount={setBedroomsCount}
                bedsCount={bedsCount}
                setBedsCount={setBedsCount}
                bathroomsCount={bathroomsCount}
                setBathroomsCount={setBathroomsCount}
              />
              <Divider />
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
            </SwipeableDrawer>
          </Typography>
        </Hidden>

        <Box>
          <Grid
            className={styles.rooms}
            container
            style={{
              gridGap: '20px 12px',
              gridTemplateColumns: 'repeat(auto-fit, 1fr)',
            }}
          >
            {isLoading && <SkeletonRoom cards={12} />}

            {updatedRooms.map((item) => (
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
