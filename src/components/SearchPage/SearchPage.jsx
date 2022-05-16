import { Container } from '@material-ui/core';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Rooms from './Rooms';
import SideBar from './SideBar';

const SearchPage = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        // style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div style={{ display: 'flex' }}>
          <SideBar />
          <Rooms />
        </div>
      </Container>
    </>
  );
};

export default SearchPage;
