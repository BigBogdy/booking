import { Box, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    content: {
      height: '150px',
      margin: '15px 0px 70px 5px',
    },
    textBold: {
      alignItems: 'center',
      display: 'flex',
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      marginBottom: 10,
      marginRight: 5,
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
const Additionals = ({
  checkedBreakfast,
  setCheckedBreakfast,
  checkedDesk,
  setCheckedDesk,
  checkedWorktable,
  setCheckedWorktable,
  checkedCrib,
  setCheckedCrib,
  checkedTv,
  setCheckedTv,
  checkedShampoo,
  setCheckedShampoo,
}) => {
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
          </Typography>
          <Typography
            component={'span'}
            variant={'body2'}
            style={{
              color: 'rgba(31, 32, 65, 0.5)',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              marginTop: -15,
            }}
          >
            {!open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Typography>
        </Box>
        {!open ? (
          <>
            <Box style={{ display: 'flex' }}>
              <label
                className={styles.checkbox}
                style={{ userSelect: 'none', display: 'flex' }}
              >
                <input
                  style={{ marginRight: 10 }}
                  className="check"
                  type="checkbox"
                  checked={checkedBreakfast}
                  onChange={() => setCheckedBreakfast(!checkedBreakfast)}
                />
                <Typography
                  className={styles.textRegular}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  breakfast
                </Typography>
              </label>
            </Box>
            <Box style={{ display: 'flex' }}>
              <label
                className={styles.checkbox}
                style={{ userSelect: 'none', display: 'flex' }}
              >
                <input
                  style={{ marginRight: 10 }}
                  className="check"
                  type="checkbox"
                  checked={checkedDesk}
                  onChange={() => setCheckedDesk(!checkedDesk)}
                />
                <Typography
                  className={styles.textRegular}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  Desk
                </Typography>
              </label>
            </Box>
            <Box style={{ display: 'flex' }}>
              <label
                className={styles.checkbox}
                style={{ userSelect: 'none', display: 'flex' }}
              >
                <input
                  style={{ marginRight: 10 }}
                  className="check"
                  type="checkbox"
                  checked={checkedWorktable}
                  onChange={() => setCheckedWorktable(!checkedWorktable)}
                />
                <Typography
                  className={styles.textRegular}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  Work table
                </Typography>
              </label>
            </Box>
            <Box style={{ display: 'flex' }}>
              <label
                className={styles.checkbox}
                style={{ userSelect: 'none', display: 'flex' }}
              >
                <input
                  style={{ marginRight: 10 }}
                  className="check"
                  type="checkbox"
                  checked={checkedCrib}
                  onChange={() => setCheckedCrib(!checkedCrib)}
                />
                <Typography
                  className={styles.textRegular}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  Crib
                </Typography>
              </label>
            </Box>
            <Box style={{ display: 'flex' }}>
              <label
                className={styles.checkbox}
                style={{ userSelect: 'none', display: 'flex' }}
              >
                <input
                  style={{ marginRight: 10 }}
                  className="check"
                  type="checkbox"
                  checked={checkedTv}
                  onChange={() => setCheckedTv(!checkedTv)}
                />
                <Typography
                  className={styles.textRegular}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  TV
                </Typography>
              </label>
            </Box>
            <Box style={{ display: 'flex' }}>
              <label
                className={styles.checkbox}
                style={{ userSelect: 'none', display: 'flex' }}
              >
                <input
                  style={{ marginRight: 10 }}
                  className="check"
                  type="checkbox"
                  checked={checkedShampoo}
                  onChange={() => setCheckedShampoo(!checkedShampoo)}
                />
                <Typography
                  className={styles.textRegular}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  Shampoo
                </Typography>
              </label>
            </Box>
          </>
        ) : null}
      </Box>
    </>
  );
};

export default Additionals;
