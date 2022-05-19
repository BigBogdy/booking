import { Box, Checkbox, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
const AdditionalItem = (props) => {
  const styles = useStyles();
  return (
    <>
      <Box style={{ display: 'flex' }}>
        <Checkbox />
        <Typography
          className={styles.textRegular}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          {props.name}
        </Typography>
      </Box>
    </>
  );
};
export default AdditionalItem;
