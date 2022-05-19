import { Box, Container } from '@material-ui/core';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

import { makeStyles } from '@material-ui/core/styles';
import SideBar from './sidebar';
import Rooms from './rooms';

const useStyles = makeStyles((theme) => {
  return {};
});

const SearchPage = () => {
  const styles = useStyles();
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Box style={{ display: 'flex' }}>
            <SideBar />
            <Rooms />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SearchPage;
