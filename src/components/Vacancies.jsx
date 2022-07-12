import { Box, Container, List, Typography } from '@material-ui/core';
import React from 'react';

const Vacancies = () => {
  return (
    <Container style={{ marginTop: 50, marginBottom: 118 }}>
      <Typography
        style={{
          display: 'flex',
          fontFamily: 'Montserrat',
          fontSize: 24,
          fontWeight: 700,
          justifyContent: 'center',
          marginBottom: 10,
        }}
      >
        Vacancies
      </Typography>
      <Box style={{ fontFamily: 'Montserrat' }}>
        <List>
          1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dignissimos quaerat dolores optio ducimus debitis molestiae, nemo
          distinctio, non dolor dolore aspernatur officia? Animi nobis eum
          nostrum, maiores architecto sunt officia.
        </List>
        <List>
          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dignissimos quaerat dolores optio ducimus debitis molestiae, nemo
          distinctio, non dolor dolore aspernatur officia? Animi nobis eum
          nostrum, maiores architecto sunt officia
        </List>
        <List>
          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dignissimos quaerat dolores optio ducimus debitis molestiae, nemo
          distinctio, non dolor dolore aspernatur officia? Animi nobis eum
          nostrum, maiores architecto sunt officia
        </List>
      </Box>
    </Container>
  );
};

export default Vacancies;
