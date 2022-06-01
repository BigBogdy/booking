import { Box, Typography } from '@material-ui/core';
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
    content: {
      margin: '15px 0px 70px 5px',
    },
    textBold: {
      alignItems: 'center',
      display: 'flex',
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      marginBottom: 4,
      marginRight: 15,
      textTransform: 'uppercase',
      userSelect: 'none',
      [theme.breakpoints.down('md')]: {
        fontSize: 10,
        marginLeft: 5,
      },
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
const Additionals = (props) => {
  const styles = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box className={styles.content}>
        <Box
          style={{ display: 'flex', cursor: 'pointer', width: 260 }}
          onClick={handleClick}
        >
          <Typography className={styles.textBold}>
            Additional convenience
            <Typography
              component={'span'}
              variant={'body2'}
              style={{
                color: 'rgba(31, 32, 65, 0.5)',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              {!open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </Typography>
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

export default Additionals;
