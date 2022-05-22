import { Box, Input, Slider, Tooltip, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';

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

const SliderPrice = () => {
  const [value, setValue] = useState([30, 40]);
  const styles = useStyles();
  const handleSliderChange = (e, data) => {
    setValue(data);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  return (
    <>
      <Box style={{ marginBottom: 29 }}>
        <Box style={{ display: 'flex' }}>
          <Typography className={styles.textBold} style={{ marginRight: 42 }}>
            Price range
          </Typography>
          <Typography className={styles.textRegular}>500$ - 1000$</Typography>
        </Box>
        <Box width={266}>
          {/* <Typography onChange={handleInputChange} value={value}>
          {value}
        </Typography> */}
          <RangePrice
            onChange={handleSliderChange}
            value={value}
            getAriaLabel={(index) =>
              index === 0 ? 'Minimum price' : 'Maximum price'
            }
            defaultValue={[20, 40]}
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