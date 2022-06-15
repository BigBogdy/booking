import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';

const Empty = () => {
  return (
    <>
      <Box style={{ height: '70vh' }}>
        <Container>
          <Typography style={{ fontSize: 24, marginTop: 20 }}>
            Page not found
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Empty;
