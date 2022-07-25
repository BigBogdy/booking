import React, { useState, useRef, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Box, Card, IconButton, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const guestList = [
  { id: 1, name: 'Adults', text: 'Ages 13 or above' },
  { id: 2, name: 'Kids', text: 'Ages 2–12' },
  { id: 3, name: 'Infants', text: 'Under 2' },
];

const useStyles = makeStyles((theme) => {
  return {
    textList: {
      margin: '0px 0px 5px 15px',
    },
    btnList: {
      display: 'flex',
      margin: '10px 7px 0px 0px',
      width: 92,
      height: 30,
    },
    label: {
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      height: 15,
      textTransform: 'uppercase',
    },
    underLabel: {
      fontFamily: 'Montserrat',
      fontSize: 10,
      height: 15,
      textTransform: 'uppercase',
    },
    select: {
      border: '1px solid rgba(31, 32, 65, 0.25)',

      borderRadius: '4px',
      height: 42,
      padding: '0px 0px 0px 15px',
      width: 303,
      [theme.breakpoints.down('xs')]: {
        width: 205,
      },
    },
    cardGuests: {
      border: '1px solid rgba(31, 32, 65, 0.25)',
      borderRadius: '0px 0px 4px 4px',
      boxShadow: '0px 10px 20px rgba(31, 32, 65, 0.05)',
      height: 159,
      margin: '42px 0px 0px 0px',
      position: 'absolute',
      width: 318,
      zIndex: 3,
      [theme.breakpoints.down('xs')]: {
        width: 220,
      },
    },
    btn: {
      color: '#1F204180',
      cursor: 'pointer',
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      height: 15,
      padding: 0,
      textTransform: 'uppercase',
      userSelect: 'none',
      '&:hover': {
        color: 'rgba(31, 32, 65, 0.8)',
      },
    },
    countBtn: {
      alignItems: 'center',
      border: '1px solid rgba(31, 32, 65, 0.5)',
      '&:hover': {
        border: '1px solid rgba(31, 32, 65, 0.8)',
        color: 'rgba(31, 32, 65, 0.8)',
      },
      '&:active': {
        transform: 'translateY(0.5px)',
      },
      borderRadius: '50%',
      color: 'rgba(31, 32, 65, 0.5)',
      cursor: 'pointer',
      display: 'flex',
      height: 30,
      justifyContent: 'center',
      userSelect: 'none',
      width: 30,
    },
    countBtnDisabled: {
      alignItems: 'center',
      border: '1px solid rgba(31, 32, 65, 0.25);',
      borderRadius: '50%',
      color: 'rgba(31, 32, 65, 0.25)',
      cursor: 'pointer',
      display: 'flex',
      height: 30,
      justifyContent: 'center',
      userSelect: 'none',
      width: 30,
    },
    countValue: {
      height: 30,
      width: 15,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0px 9px 0px 9px',
      color: '#1F2041',
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: 12,
    },
  };
});

const Selector = ({
  adultsCount,
  setAdultsCount,
  kidsCount,
  infantsCount,
  setKidsCount,
  setInfantsCount,
  numberOfGuests,
}) => {
  const styles = useStyles();
  const ref = useRef();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const onClear = () => {
    setAdultsCount(0);
    setKidsCount(0);
    setInfantsCount(0);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [open]);

  return (
    <div ref={ref}>
      <Typography
        style={{ marginLeft: 31, marginBottom: 5 }}
        className={styles.label}
      >
        Guests
      </Typography>
      <Box
        style={{
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <Box
          style={{ alignItems: 'center', display: 'flex' }}
          className={styles.select}
          onClick={handleClick}
        >
          <Typography
            style={{
              color: 'rgba(31, 32, 65, 0.75)',
              fontFamily: 'Montserrat',
              fontSize: 14,
              marginRight: 'auto',
              userSelect: 'none',
            }}
            onClick={handleClick}
          >
            {numberOfGuests === 0
              ? 'How many guests'
              : numberOfGuests + ' guests'}
          </Typography>
          <IconButton onClick={handleClick} style={{ width: 40, height: 40 }}>
            <ExpandMoreIcon />
          </IconButton>
        </Box>
        {open ? (
          <Card className={styles.cardGuests}>
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box style={{ marginTop: 13 }}>
                {guestList.map((item) => (
                  <Box className={styles.textList} key={item.id}>
                    <Typography
                      component={'span'}
                      variant={'body2'}
                      className={styles.label}
                    >
                      {item.name}
                      <Typography className={styles.underLabel}>
                        {item.text}
                      </Typography>
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box>
                <Box className={styles.btnList}>
                  <div
                    className={
                      adultsCount !== 0
                        ? styles.countBtn
                        : styles.countBtnDisabled
                    }
                    onClick={
                      adultsCount > 0
                        ? () => setAdultsCount(adultsCount - 1)
                        : null
                    }
                  >
                    -
                  </div>
                  <div className={styles.countValue}>{adultsCount}</div>
                  <div
                    onClick={() => setAdultsCount(adultsCount + 1)}
                    className={styles.countBtn}
                  >
                    +
                  </div>
                </Box>
                <Box className={styles.btnList}>
                  <div
                    className={
                      kidsCount !== 0
                        ? styles.countBtn
                        : styles.countBtnDisabled
                    }
                    onClick={
                      kidsCount > 0 ? () => setKidsCount(kidsCount - 1) : null
                    }
                  >
                    -
                  </div>
                  <div className={styles.countValue}>{kidsCount}</div>
                  <div
                    onClick={() => setKidsCount(kidsCount + 1)}
                    className={styles.countBtn}
                  >
                    +
                  </div>
                </Box>
                <Box className={styles.btnList}>
                  <div
                    className={
                      infantsCount !== 0
                        ? styles.countBtn
                        : styles.countBtnDisabled
                    }
                    onClick={
                      infantsCount > 0
                        ? () => setInfantsCount(infantsCount - 1)
                        : null
                    }
                  >
                    -
                  </div>
                  <div className={styles.countValue}>{infantsCount}</div>
                  <div
                    onClick={() => setInfantsCount(infantsCount + 1)}
                    className={styles.countBtn}
                  >
                    +
                  </div>
                </Box>
              </Box>
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                style={{ padding: '5px 15px 5px 15px' }}
                onClick={onClear}
                className={styles.btn}
              >
                Clear
              </Typography>
              <Typography
                style={{ padding: '5px 15px 5px 15px' }}
                className={styles.btn}
                onClick={handleClick}
              >
                Apply
              </Typography>
            </Box>
          </Card>
        ) : null}
      </Box>
    </div>
  );
};

export default Selector;
