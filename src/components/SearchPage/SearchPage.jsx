import { Container } from '@material-ui/core';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import SideBar from './SideBar/SideBar';

const SearchPage = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        // style={{ display: 'flex', justifyContent: 'center' }}
      >
        <SideBar />
      </Container>
    </>
  );
};

export default SearchPage;
