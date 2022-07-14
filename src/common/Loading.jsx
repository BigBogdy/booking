import { Backdrop, CircularProgress } from '@material-ui/core';
import React from 'react';

const Loading = () => {
  return (
    <div>
      <Backdrop open={true}>
        <CircularProgress style={{ color: '#BC9CFF' }} />
      </Backdrop>
    </div>
  );
};

export default Loading;
