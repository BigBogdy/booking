import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import { Box, Card, IconButton, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const conveniencesList = [
  { id: 1, name: 'Bedrooms' },
  { id: 2, name: 'Beds' },
  { id: 3, name: 'Bathrooms' },
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

      borderRadius: '4px',
      height: 46,
      padding: '0px 0px 0px 15px',
      width: 249,
      [theme.breakpoints.down('xs')]: {
        width: 310,
      },
    },
    cardGuests: {
      border: '1px solid rgba(31, 32, 65, 0.25)',
      borderRadius: '0px 0px 4px 4px',
      boxShadow: '0px 10px 20px rgba(31, 32, 65, 0.05)',
      height: 159,
      margin: '43px 0px 0px 0px',
      position: 'absolute',
      width: 264,
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
    textBold: {
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  };
});

const SelectorConveniencesSideBar = () => {
  const styles = useStyles();

  const [open, setOpen] = useState(true);
  const [bedroomsCount, setBedroomsCount] = useState(0);
  const [bedsCount, setBedsCount] = useState(0);
  const [bathroomsCount, setBathroomsCount] = useState(0);

  const handleClick = () => {
    setOpen(!open);
  };

  const onClear = () => {
    setBedroomsCount(0);
    setBedsCount(0);
    setBathroomsCount(0);
  };
  const arr = [bedroomsCount, bedsCount, bathroomsCount];
  const numberOfGuests = arr.reduce((a, b) => a + b, 0);

  return (
    <div>
      <Box style={{ marginBottom: 15.56 }}>
        <Typography className={styles.textBold} style={{ marginBottom: 4 }}>
          Conveniences of rooms
        </Typography>
        <Box
          style={{
            justifyContent: 'start',
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
              {numberOfGuests === 0
                ? 'Choose your conveniences'
                : numberOfGuests + ' conv'}
            </Typography>
            <IconButton onClick={handleClick} style={{ width: 40, height: 40 }}>
              <ExpandMoreIcon />
            </IconButton>
          </Box>
          {!open ? (
            <Card className={styles.cardGuests}>
              <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box style={{ marginTop: 13 }}>
                  {conveniencesList.map((item) => (
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
                        bedroomsCount !== 0
                          ? styles.countBtn
                          : styles.countBtnDisabled
                      }
                      onClick={
                        bedroomsCount > 0
                          ? () => setBedroomsCount(bedroomsCount - 1)
                          : null
                      }
                    >
                      -
                    </div>
                    <div className={styles.countValue}>{bedroomsCount}</div>
                    <div
                      onClick={() => setBedroomsCount(bedroomsCount + 1)}
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
                        bedsCount !== 0
                          ? styles.countBtn
                          : styles.countBtnDisabled
                      }
                      onClick={
                        bedsCount > 0 ? () => setBedsCount(bedsCount - 1) : null
                      }
                    >
                      -
                    </div>
                    <div className={styles.countValue}>{bedsCount}</div>
                    <div
                      onClick={() => setBedsCount(bedsCount + 1)}
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
                        bathroomsCount !== 0
                          ? styles.countBtn
                          : styles.countBtnDisabled
                      }
                      onClick={
                        bathroomsCount > 0
                          ? () => setBathroomsCount(bathroomsCount - 1)
                          : null
                      }
                    >
                      -
                    </div>
                    <div className={styles.countValue}>{bathroomsCount}</div>
                    <div
                      onClick={() => setBathroomsCount(bathroomsCount + 1)}
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
      </Box>
    </div>
  );
};

export default SelectorConveniencesSideBar;
