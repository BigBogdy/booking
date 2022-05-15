import { Box, Input, Slider, Tooltip, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const AirbnbSlider = withStyles({
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

  const handleSliderChange = (e, data) => {
    setValue(data);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  return (
    <>
      <Box width={266}>
        {/* <Typography onChange={handleInputChange} value={value}>
          {value}
        </Typography> */}
        <AirbnbSlider
          onChange={handleSliderChange}
          value={value}
          getAriaLabel={(index) =>
            index === 0 ? 'Minimum price' : 'Maximum price'
          }
          defaultValue={[20, 40]}
        />
      </Box>
    </>
  );
};

export default SliderPrice;
