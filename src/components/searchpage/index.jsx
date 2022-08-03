import React from 'react';
import { Box, Container } from '@material-ui/core';
import SideBar from './sidebar';
import Rooms from './rooms';

const SearchPage = ({ propSearchObj }) => {
  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <Box style={{ display: 'flex' }}>
            <SideBar propSearchObj={propSearchObj} />
            <Rooms propSearchObj={propSearchObj} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SearchPage;
