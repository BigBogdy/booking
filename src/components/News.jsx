import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';

const News = () => {
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
        News
      </Typography>
      <Box style={{ display: 'flex', marginBottom: 30 }}>
        <Typography style={{ fontFamily: 'Montserrat', marginRight: 30 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quam, sed repellat nisi dignissimos sapiente qui quasi hic? Vitae
          officiis sunt dignissimos ducimus quo. Quam eius assumenda
          exercitationem deleniti laborum.Lorem Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Necessitatibus sapiente adipisci
          molestiae aliq
        </Typography>
        <Typography style={{ fontFamily: 'Montserrat' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quam, sed repellat nisi dignissimos sapiente qui quasi hic? Vitae
          officiis sunt dignissimos ducimus quo. Quam eius assumenda
          exercitationem deleniti laborum.Lorem Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Necessitatibus sapiente adipisci
          molestiae al
        </Typography>
      </Box>
      <Typography style={{ fontFamily: 'Montserrat', marginRight: 30 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        quam, sed repellat nisi dignissimos sapiente qui quasi hic? Vitae
        officiis sunt dignissimos ducimus quo. Quam eius assumenda
        exercitationem deleniti laborum.Lorem Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Necessitatibus sapiente adipisci molestiae
        aliquid cupiditate tempore consequatur itaque dignissimos dicta et.
        Minima, quae voluptas. Aut consectetur quibusdam rem quis id nam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa
        facilis deserunt voluptate, aut reprehenderit eius fuga, doloribus iure
        tenetur natus enim, repudiandae ipsam incidunt modi fugiat nostrum unde
        quidem! Lorem ipsum dolor sit amet consect
      </Typography>
    </Container>
  );
};

export default News;
