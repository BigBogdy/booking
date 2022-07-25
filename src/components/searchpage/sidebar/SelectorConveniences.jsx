import React, { useEffect, useRef, useState } from 'react';
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
    content: {
      marginBottom: 34,
      [theme.breakpoints.down('md')]: {
        margin: '15px 0px 15px 10px ',
      },
    },
    list: {
      margin: '13px 0px 22px 15px',

      [theme.breakpoints.down('md')]: {
        margin: '10px 0px 12px 15px',
      },
    },
    btnList: {
      display: 'flex',
      margin: '5.56px 7px 7px 0px',
      alignItems: 'center',
      width: 92,
      height: 30,
      [theme.breakpoints.down('md')]: {
        height: 20,
      },
    },
    textConv: {
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      height: 15,
      textTransform: 'uppercase',
      [theme.breakpoints.down('md')]: {
        fontSize: 10,
      },
    },
    displayText: {
      color: 'rgba(31, 32, 65, 0.75)',
      fontFamily: 'Montserrat',
      fontSize: 14,
      marginRight: 'auto',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      [theme.breakpoints.down('md')]: {
        fontSize: 10,
      },
    },
    select: {
      border: '1px solid rgba(31, 32, 65, 0.25)',
      borderRadius: '4px',
      height: 46,
      padding: '0px 0px 0px 15px',
      width: 249,
      [theme.breakpoints.down('md')]: {
        width: 200,
        height: 35,
      },
    },
    cardConv: {
      border: '1px solid rgba(31, 32, 65, 0.25)',
      borderRadius: '0px 0px 4px 4px',
      boxShadow: '0px 10px 20px rgba(31, 32, 65, 0.05)',
      height: 159,
      margin: '43px 0px 0px 0px',
      position: 'absolute',
      width: 264,
      zIndex: 3,
      [theme.breakpoints.down('md')]: {
        width: 215,
        margin: '35px 0px 0px 0px',
        height: 115,
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
      [theme.breakpoints.down('md')]: {
        fontSize: 10,
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
      [theme.breakpoints.down('md')]: {
        width: 20,
        height: 20,
      },
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
      [theme.breakpoints.down('md')]: {
        width: 20,
        height: 20,
      },
    },
    countValue: {
      height: 20,
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
      [theme.breakpoints.down('md')]: {
        fontSize: 10,
      },
    },
  };
});

const SelectorConveniencesSideBar = ({
  bedroomsCount,
  setBedroomsCount,
  bedsCount,
  setBedsCount,
  bathroomsCount,
  setBathroomsCount,
}) => {
  const styles = useStyles();
  const ref = useRef();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const onClear = () => {
    setBedroomsCount(0);
    setBedsCount(0);
    setBathroomsCount(0);
  };

  function bedrooms() {
    if (bedroomsCount > 1) {
      return bedroomsCount + ' bedrooms, ';
    }
    if (bedroomsCount === 1) {
      return bedroomsCount + ' bedroom, ';
    }
    if (bedroomsCount === 0) {
      return null;
    }
  }
  function beds() {
    if (bedsCount > 1) {
      return bedsCount + ' beds, ';
    }
    if (bedsCount === 1) {
      return bedsCount + ' bed, ';
    }
    if (bedsCount === 0) {
      return null;
    }
  }
  function bathrooms() {
    if (bathroomsCount > 1) {
      return bathroomsCount + ' bathrooms ';
    }
    if (bathroomsCount === 1) {
      return bathroomsCount + ' bathroom ';
    }
    if (bathroomsCount === 0) {
      return null;
    }
  }

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
      <Box className={styles.content}>
        <Typography className={styles.textBold} style={{ marginBottom: 4 }}>
          Conveniences of rooms
        </Typography>
        <Box
          style={{
            justifyContent: 'start',
            display: 'flex',
          }}
        >
          <Box
            style={{ alignItems: 'center', display: 'flex' }}
            className={styles.select}
            onClick={handleClick}
          >
            <Typography className={styles.displayText} onClick={handleClick}>
              {bedrooms()}
              {beds()}
              {bathrooms()}
            </Typography>

            <IconButton onClick={handleClick} style={{ width: 40, height: 40 }}>
              <ExpandMoreIcon />
            </IconButton>
          </Box>
          {open ? (
            <Card className={styles.cardConv}>
              <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  {conveniencesList.map((item) => (
                    <Typography
                      className={classNames(styles.list, styles.textConv)}
                      key={item.id}
                    >
                      {item.name}
                    </Typography>
                  ))}
                </Box>
                <Box>
                  <Box className={styles.btnList}>
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
                  <Box className={styles.btnList}>
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
                  <Box className={styles.btnList}>
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
