import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import { Box, Card, IconButton, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const guestList = [
  { id: 1, name: 'Adults' },
  { id: 2, name: 'Kids' },
  { id: 3, name: 'Infants' },
];

const useStyles = makeStyles((theme) => {
  return {
    list: {
      margin: '0px 0px 22px 15px',
    },
    label: {
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      height: 15,
      textTransform: 'uppercase',
    },
    select: {
      border: '1px solid rgba(31, 32, 65, 0.25)',

      borderRadius: '4px 4px 0px 0px',
      height: 44,
      padding: '0px 0px 0px 15px',
      width: 340,
      [theme.breakpoints.down('xs')]: {
        width: 310,
      },
    },
    cardGuests: {
      border: '1px solid rgba(31, 32, 65, 0.25)',
      borderRadius: '0px 0px 4px 4px',
      boxShadow: '0px 10px 20px rgba(31, 32, 65, 0.05)',
      height: 159,
      margin: '45px 0px 0px 0px',
      position: 'absolute',
      width: 355,
      zIndex: 3,
      [theme.breakpoints.down('xs')]: {
        width: 330,
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

const Selector = () => {
  const styles = useStyles();

  const [open, setOpen] = useState(true);
  const [AdultsCount, setAdultsCount] = useState(0);
  const [KidsCount, setKidsCount] = useState(0);
  const [InfantsCount, setInfantsCount] = useState(0);

  const handleClick = () => {
    setOpen(!open);
  };

  const onClear = () => {
    setAdultsCount(0);
    setKidsCount(0);
    setInfantsCount(0);
  };

  return (
    <div>
      <Typography
        style={{ marginLeft: 10, marginBottom: 5 }}
        className={styles.label}
      >
        Guests
      </Typography>
      <Box
        style={{
          justifyContent: 'center',
          display: 'flex',
          marginBottom: 33.44,
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
            {AdultsCount + KidsCount + InfantsCount === 0
              ? 'How many guests'
              : AdultsCount + KidsCount + InfantsCount + ' guests'}
          </Typography>
          <IconButton onClick={handleClick} style={{ width: 40, height: 40 }}>
            <ExpandMoreIcon />
          </IconButton>
        </Box>
        {!open ? (
          <Card className={styles.cardGuests}>
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box style={{ marginTop: 13 }}>
                {guestList.map((item) => (
                  <Typography
                    className={classNames(styles.list, styles.label)}
                    key={item.id}
                  >
                    {item.name}
                  </Typography>
                ))}
              </Box>
              <Box>
                <Box
                  style={{
                    display: 'flex',
                    margin: '5.56px 7px 7px 0px',
                    width: 92,
                    height: 30,
                  }}
                >
                  <div
                    className={
                      AdultsCount !== 0
                        ? styles.countBtn
                        : styles.countBtnDisabled
                    }
                    onClick={
                      AdultsCount > 0
                        ? () => setAdultsCount(AdultsCount - 1)
                        : null
                    }
                  >
                    -
                  </div>
                  <div className={styles.countValue}>{AdultsCount}</div>
                  <div
                    onClick={() => setAdultsCount(AdultsCount + 1)}
                    className={styles.countBtn}
                  >
                    +
                  </div>
                </Box>
                <Box
                  style={{
                    display: 'flex',
                    margin: '5.56px 7px 7px 0px',
                    width: 92,
                    height: 30,
                  }}
                >
                  <div
                    className={
                      KidsCount !== 0
                        ? styles.countBtn
                        : styles.countBtnDisabled
                    }
                    onClick={
                      KidsCount > 0 ? () => setKidsCount(KidsCount - 1) : null
                    }
                  >
                    -
                  </div>
                  <div className={styles.countValue}>{KidsCount}</div>
                  <div
                    onClick={() => setKidsCount(KidsCount + 1)}
                    className={styles.countBtn}
                  >
                    +
                  </div>
                </Box>
                <Box
                  style={{
                    display: 'flex',
                    margin: '5.56px 7px 7px 0px',
                    width: 92,
                    height: 30,
                  }}
                >
                  <div
                    className={
                      InfantsCount !== 0
                        ? styles.countBtn
                        : styles.countBtnDisabled
                    }
                    onClick={
                      InfantsCount > 0
                        ? () => setInfantsCount(InfantsCount - 1)
                        : null
                    }
                  >
                    -
                  </div>
                  <div className={styles.countValue}>{InfantsCount}</div>
                  <div
                    onClick={() => setInfantsCount(InfantsCount + 1)}
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
