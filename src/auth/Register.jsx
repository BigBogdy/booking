import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import {
  Box,
  Button,
  Card,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  Typography,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => {
  return {
    container: {
      flex: '1 0 auto',
      height: 900,
    },
    img: {
      alignItems: 'center',
      backgroundImage: 'url(img/background2.jpg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      diaplay: 'flex',
      height: 772,
      marginBottom: 100,
      justifyContent: 'center',
      position: 'relative',
      width: '100%',
    },
    card: {
      border: '1px solid rgba(0, 0, 0, 0.12)',
      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)',
      borderRadius: 4,
      height: 670,
      width: 378,
      margin: '0 auto',
      marginTop: 30,
    },
    title: {
      fontSize: 24,
      color: '#1F2041',
      fontFamily: 'Quicksand',
      fontWeight: 700,
    },
    textRegular: {
      color: 'rgba(31, 32, 65, 0.75)',
      fontFamily: 'Montserrat',
      fontSize: 14,
      fontWeight: 400,
      textDecoration: 'none',
    },
    label: {
      color: '#1F2041',
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    birthDate: {
      border: '1px solid rgba(31, 32, 65, 0.25)',
      borderRadius: 4,
      height: 40,
      marginRight: 20,
      paddingLeft: 15,
      width: 301,
    },
    btnRegister: {
      borderRadius: 22,
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
      height: 44,
      padding: 0,
      width: 320,
      color: '#FFFFFF',
      background: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
      '&:hover': {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
    btnLogin: {
      color: '#BC9CFF',
      '&:hover': {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        background: '#FFFFFF',
      },
      background: '#FFFFFF',
      border: 'solid 2px #BC9CFF',
      borderRadius: 22,
      width: 99,
      height: 44,
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
    },
  };
});

const Register = () => {
  const styles = useStyles();
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('male');
  const [startDate, setStartDate] = useState(null);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Box className={styles.img}>
        <Container>
          <Card className={styles.card}>
            <Typography
              style={{ margin: '40px 0px 20px 30px' }}
              variant="h1"
              className={styles.title}
            >
              Registration
            </Typography>
            <form
              noValidate
              autoComplete="off"
              style={{ margin: '0px 0px 10px 30px' }}
            >
              <TextField
                inputProps={{
                  style: {
                    padding: 15,
                    height: 14,
                  },
                }}
                style={{ width: 320 }}
                id="input-name"
                type="name"
                variant="outlined"
                color="secondary"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </form>
            <form
              noValidate
              autoComplete="off"
              style={{ margin: '0px 0px 10px 30px' }}
            >
              <TextField
                inputProps={{
                  style: {
                    padding: 15,
                    height: 14,
                  },
                }}
                style={{ width: 320 }}
                id="input-lastname"
                type="lastname"
                variant="outlined"
                color="secondary"
                placeholder="Second name"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
              />
            </form>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <Box style={{ display: 'flex', margin: '0px 0px 10px 30px' }}>
                <Box style={{ display: 'flex' }}>
                  <FormControlLabel
                    value="male"
                    control={<Radio style={{ color: '#BC9CFF' }} />}
                  />
                  <Typography
                    className={styles.textRegular}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      margin: '0px 20px 0px -15px',
                    }}
                  >
                    Male
                  </Typography>
                </Box>
                <Box style={{ display: 'flex' }}>
                  <FormControlLabel
                    value="female"
                    control={<Radio style={{ color: '#BC9CFF' }} />}
                  />
                  <Typography
                    className={styles.textRegular}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginLeft: -15,
                    }}
                  >
                    Female
                  </Typography>
                </Box>
              </Box>
            </RadioGroup>
            <Box style={{ margin: '0px 0px 20px 30px' }}>
              <Typography style={{ marginBottom: 5 }} className={styles.label}>
                date of birth
              </Typography>
              <DatePicker
                className={styles.birthDate}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                dateFormat="dd/MM/yyyy"
                scrollableYearDropdown
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
                yearDropdownItemNumber={80}
                placeholderText="DD.MM.YYYY"
                // isClearable={true}
              />
            </Box>
            <Box style={{ margin: '0px 0px 20px 30px' }}>
              <Typography style={{ marginBottom: 5 }} className={styles.label}>
                Enter email and password
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  inputProps={{
                    style: {
                      padding: 15,
                      height: 14,
                    },
                  }}
                  style={{ width: 320, marginBottom: 10 }}
                  id="input-email"
                  type="email"
                  variant="outlined"
                  color="secondary"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </form>
              <form noValidate autoComplete="off">
                <TextField
                  inputProps={{
                    style: {
                      padding: 15,
                      height: 14,
                    },
                  }}
                  style={{ width: 320 }}
                  id="new-password"
                  type="password"
                  variant="outlined"
                  color="secondary"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </form>
            </Box>
            <Box style={{ margin: '0px 0px 20px 30px' }}>
              <Box style={{ display: 'flex' }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                    />
                  }
                />
                <Typography
                  className={styles.textRegular}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: -10,
                  }}
                >
                  Receive special offers
                </Typography>
              </Box>
            </Box>
            <Button
              style={{ margin: '0px 0px 25px 30px' }}
              className={styles.btnRegister}
            >
              Register
            </Button>
            <Box style={{ display: 'flex', margin: '0px 0px 0px 30px' }}>
              <Typography
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: 45,
                }}
                className={styles.textRegular}
              >
                Already have an account
              </Typography>
              <Link style={{ textDecoration: 'none' }} to="/login">
                <Button className={styles.btnLogin}>Login</Button>
              </Link>
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default Register;
