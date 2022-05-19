import { Box, Checkbox, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles';
import AdditionalItem from './AdditionalItem';

const additionalLinks = [
  { id: 1, name: 'Breakfast' },
  { id: 2, name: 'Desk' },
  { id: 3, name: 'Work table' },
  { id: 4, name: 'Crib' },
  { id: 5, name: 'TV' },
  { id: 6, name: 'Shampoo' },
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
    container: {
      marginTop: 30,
    },
  };
});
const Additional = (props) => {
  const styles = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box>
        <Box
          style={{ display: 'flex', cursor: 'pointer', width: 260 }}
          onClick={handleClick}
        >
          <Typography
            className={styles.textBold}
            style={{
              marginBottom: 4,
              display: 'flex',
              marginRight: 15,
              alignItems: 'center',
              userSelect: 'none',
            }}
          >
            Additional convenience
          </Typography>
          <Typography
            style={{
              color: 'rgba(31, 32, 65, 0.5)',
              marginBottom: 4,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            {!open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </Typography>
        </Box>
        {!open ? (
          <Box>
            {additionalLinks.map((obj) => (
              <AdditionalItem name={obj.name} key={obj.id} />
            ))}
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Additional;
