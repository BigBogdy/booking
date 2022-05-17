import { Box, Container } from '@material-ui/core';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Rooms from './Rooms';
import SideBar from './SideBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    content: {
      display: 'flex',
      justifyContent: 'center',
    },
  };
});

const SearchPage = () => {
  const styles = useStyles();
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Box className={styles.content}>
            <SideBar />
            <Rooms />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SearchPage;
