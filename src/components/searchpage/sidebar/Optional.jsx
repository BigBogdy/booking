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
    content: {
      marginBottom: 30,
      [theme.breakpoints.down('md')]: {
        margin: '10px 0px 5px 10px',
      },
    },

    textBold: {
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      marginBottom: 17,
      [theme.breakpoints.down('md')]: {
        marginBottom: 5,
        fontSize: 10,
        marginLeft: 3,
      },
    },
  };
});

const Optional = ({ checked, setChecked }) => {
  const styles = useStyles();

  return (
    <>
      <Box className={styles.content}>
        <Typography className={styles.textBold}>Optional</Typography>
        <Box>
          {optionalItems.map((obj) => (
            <OptionalItem
              setChecked={setChecked}
              checked={checked}
              text={obj.text}
              key={obj.id}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Optional;
