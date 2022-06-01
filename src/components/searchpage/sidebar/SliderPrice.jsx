import { Box, Input, Slider, Tooltip, Typography } from '@material-ui/core';

import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    content: {
      marginBottom: 29,
      [theme.breakpoints.down('md')]: {
        margin: '15px 0px',
      },
    },
    slider: {
      width: 266,
      [theme.breakpoints.down('md')]: {
        width: 210,
        marginLeft: 13,
      },
    },
    textBold: {
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      [theme.breakpoints.down('md')]: {
        fontSize: 10,
        marginLeft: 10,
      },
    },
    textRegular: {
      color: 'rgba(31, 32, 65, 0.5)',
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 400,
      textTransform: 'uppercase',
      [theme.breakpoints.down('md')]: {
        fontSize: 10,
      },
    },
  };
});

const RangePrice = withStyles({
  root: {
    color: '#66D2EA',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 12,
    width: 12,
    background: '#66D2EA',
    border: '2px solid #FFFFFF',
    marginTop: -3,
    // marginLeft: -3,
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
    // active: {},
  },
  track: {
    height: 6,
  },
  rail: {
    color: '#FFF',
    opacity: 1,
    height: 4,
    border: '1px solid rgba(31, 32, 65, 0.25)',
    borderRadius: 3,
  },
})(Slider);

const SliderPrice = ({ selectedPrice, handleSliderChange }) => {
  // console.log(selectedPrice);
  const styles = useStyles();
  return (
    <>
      <Box className={styles.content}>
        <Box style={{ display: 'flex' }}>
          <Typography className={styles.textBold} style={{ marginRight: 42 }}>
            Price range
          </Typography>
          <Typography className={styles.textRegular}>
            {selectedPrice[0]} $ - {selectedPrice[1]} $
          </Typography>
        </Box>
        <Box className={styles.slider}>
          <RangePrice
            onChange={handleSliderChange}
            value={selectedPrice}
            min={0}
            max={200}
          />

          <Typography className={styles.textRegular}>
            Cost per night in the room
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SliderPrice;
