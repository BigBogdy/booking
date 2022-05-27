import { Box, Checkbox, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OptionalItem from './OptionalItem';

const optionalItems = [
  { id: 1, text: 'Smoking is allowed' },
  { id: 2, text: 'Allowed with pets' },
  { id: 3, text: 'Allowed to invite guests' },
];

const useStyles = makeStyles((theme) => {
  return {
    textBold: {
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    textRegular: {
      color: 'rgba(31, 32, 65, 0.5)',
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 400,
      textTransform: 'uppercase',
    },
  };
});

const Optional = () => {
  const styles = useStyles();

  return (
    <>
      <Box style={{ marginLeft: 26, marginBottom: 30 }}>
        <Typography style={{ marginBottom: 17 }} className={styles.textBold}>
          Optional
        </Typography>
        <Box>
          {optionalItems.map((obj) => (
            <OptionalItem text={obj.text} key={obj.id} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Optional;
