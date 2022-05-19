import { Grid } from '@material-ui/core';
import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <div key={i}>
        <ContentLoader
          speed={2}
          width={270}
          height={251}
          viewBox="0 0 270 251"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="95" y="100" rx="0" ry="0" width="2" height="2" />
          <rect x="0" y="0" rx="0" ry="0" width="270" height="151" />
          <rect x="18" y="165" rx="0" ry="0" width="55" height="24" />
          <rect x="81" y="172" rx="0" ry="0" width="41" height="15" />
          <rect x="147" y="167" rx="0" ry="0" width="99" height="20" />
          <rect x="19" y="213" rx="0" ry="0" width="119" height="24" />
          <rect x="151" y="216" rx="0" ry="0" width="90" height="18" />
        </ContentLoader>
      </div>
    ));
};

export default Skeleton;
