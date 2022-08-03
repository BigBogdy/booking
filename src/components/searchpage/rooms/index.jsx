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
        display: 'flex',
        fontSize: 20,
        justifyContent: 'center',
      },
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        fontSize: 14,
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
      borderRadius: 7,
      color: '#fff',
      display: 'flex',
      fontFamily: 'Montserrat',
      fontWeight: 700,
      height: 25,
      marginBottom: 15,
      width: 200,
      '&:hover': {
        background: '#FFFFFF',
        color: '#BC9CFF',
      },
    },
  };
});

const Rooms = ({ propSearchObj }) => {
  const { updatedRooms, isLoading } = propSearchObj;
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
              <Optional {...propSearchObj} />
              <Divider />
              <SliderPrice {...propSearchObj} />
              <Divider />
              <Availability {...propSearchObj} />
              <Divider />
              <SelectorConveniencesSideBar {...propSearchObj} />
              <Divider />
              <Additionals {...propSearchObj} />
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
            {isLoading ? (
              <SkeletonRoom cards={12} />
            ) : updatedRooms.length !== 0 ? (
              updatedRooms.map((item) => (
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
              ))
            ) : (
              <Typography
                className={styles.label}
                style={{
                  fontSize: 20,
                  color: 'rgba(31, 32, 65, 0.55)',
                }}
                variant="h1"
              >
                Nothing found
              </Typography>
            )}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Rooms;
