import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import { useForm, Controller } from 'react-hook-form';
import { UserAuth } from '../context/AuthContext';
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
    contentBox: {
      margin: '40px 0px 20px 30px',
      [theme.breakpoints.down('sm')]: {
        margin: '20px 0px 20px 10px',
      },
      [theme.breakpoints.down('xs')]: {
        margin: '15px 0px 20px 10px',
      },
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
      [theme.breakpoints.down('sm')]: {
        width: 320,
      },
      [theme.breakpoints.down('xs')]: {
        height: 640,
        width: 220,
      },
    },
    title: {
      fontSize: 24,
      color: '#1F2041',
      fontFamily: 'Quicksand',
      fontWeight: 700,
      marginBottom: 20,
      [theme.breakpoints.down('xs')]: {
        fontSize: 20,
        marginBottom: 15,
      },
    },
    textRegular: {
      color: 'rgba(31, 32, 65, 0.75)',
      fontFamily: 'Montserrat',
      fontSize: 14,
      fontWeight: 400,
      textDecoration: 'none',
      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },
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
      color: 'rgba(31, 32, 65, 0.75)',
      fontFamily: 'Montserrat',
      fontSize: 14,
      height: 40,
      marginRight: 20,
      paddingLeft: 15,
      width: 301,
      [theme.breakpoints.down('sm')]: {
        width: 270,
      },
      [theme.breakpoints.down('xs')]: {
        width: 180,
      },
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
      [theme.breakpoints.down('sm')]: {
        width: 290,
      },
      [theme.breakpoints.down('xs')]: {
        width: 200,
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
      width: 88,
      height: 34,
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 700,
    },
    input: {
      width: 320,
      [theme.breakpoints.down('sm')]: {
        width: 290,
      },
      [theme.breakpoints.down('xs')]: {
        width: 200,
      },
    },
    textBtn: {
      display: 'flex',
      marginTop: 20,
      width: 320,
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        width: 290,
      },
      [theme.breakpoints.down('xs')]: {
        width: 200,
      },
    },
    errText: {
      color: 'crimson',
      fontFamily: 'Montserrat',
      fontSize: 14,
      marginBottom: 5,
      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },
    },
  };
});

const Register = () => {
  const styles = useStyles();
  const [startDate, setStartDate] = useState(new Date());
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { createUser } = UserAuth();
  const { register, handleSubmit, errors, control } = useForm();
  const [userInfo, setUserInfo] = useState();
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('male');
  const onSubmit = async (err, data) => {
    try {
      setUserInfo(data);
      await createUser(email, password);
      history.push('/booking/');
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Box className={styles.img}>
        <Container>
          <Card className={styles.card}>
            <Box className={styles.contentBox}>
              <Typography variant="h1" className={styles.title}>
                Registration
              </Typography>
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
              >
                <TextField
                  inputProps={{
                    style: {
                      padding: 15,
                      height: 14,
                    },
                  }}
                  className={styles.input}
                  id="input-name"
                  type="name"
                  variant="outlined"
                  color="secondary"
                  placeholder="Name"
                  name="name"
                  inputRef={register({ required: 'Name is required' })}
                />
                <Typography className={styles.errText}>
                  {errors.name?.message}
                </Typography>
                <TextField
                  inputProps={{
                    style: {
                      padding: 15,
                      height: 14,
                    },
                  }}
                  className={styles.input}
                  id="input-lastname"
                  name="lastname"
                  type="lastname"
                  variant="outlined"
                  color="secondary"
                  placeholder="Second name"
                  inputRef={register({ required: 'Second name is required' })}
                />
                <Typography className={styles.errText}>
                  {errors.lastname?.message}
                </Typography>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={value}
                  onChange={handleChange}
                >
                  <Box style={{ display: 'flex' }}>
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
                <Box>
                  <Typography
                    style={{ marginBottom: 5 }}
                    className={styles.label}
                  >
                    date of birth
                  </Typography>
                  <Controller
                    control={control}
                    name="datepicker"
                    defaultValue={null}
                    rules={{ required: 'Select your birthday' }}
                    render={({ onChange, onBlur, value, ref }) => (
                      <DatePicker
                        selected={value}
                        className={styles.birthDate}
                        onChange={onChange}
                        placeholderText="DD.MM.YYYY"
                        startDate={startDate}
                        dateFormat="dd/MM/yyyy"
                        scrollableYearDropdown
                        showYearDropdown
                        showMonthDropdown
                        dropdownMode="select"
                        yearDropdownItemNumber={80}
                      />
                    )}
                  />
                </Box>
                <Typography className={styles.errText}>
                  {errors.datepicker?.message}
                </Typography>
                <Box>
                  <Typography
                    style={{ marginBottom: 5 }}
                    className={styles.label}
                  >
                    Enter email and password
                  </Typography>
                  <TextField
                    inputProps={{
                      style: {
                        padding: 15,
                        height: 14,
                      },
                    }}
                    className={styles.input}
                    id="input-email"
                    type="email"
                    variant="outlined"
                    name="email"
                    color="secondary"
                    placeholder="Email"
                    inputRef={register({
                      required: 'Email is required',
                      pattern: {
                        value:
                          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/,
                        message: 'This is not valid email',
                      },
                    })}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Typography className={styles.errText}>
                    {errors.email?.message}
                  </Typography>
                  <TextField
                    inputProps={{
                      style: {
                        padding: 15,
                        height: 14,
                      },
                    }}
                    className={styles.input}
                    id="new-password"
                    type="password"
                    variant="outlined"
                    name="password"
                    color="secondary"
                    placeholder="Password"
                    inputRef={register({
                      required: 'Password is required',
                      pattern: {
                        value: /[a-z]/i,
                        message: 'At least one character',
                      },
                      pattern: {
                        value: /[0-9]/,
                        message: 'At least one digit',
                      },
                      minLength: {
                        value: 4,
                        message: 'Password must be more than 4 characters',
                      },
                      maxLength: {
                        value: 16,
                        message: 'Password must be less than 16 characters',
                      },
                    })}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Typography className={styles.errText}>
                    {errors.password?.message}
                  </Typography>
                </Box>
                <Box>
                  <Box
                    style={{ display: 'flex', marginBottom: 20, height: 20 }}
                  >
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
                <Button type="submit" className={styles.btnRegister}>
                  Register
                </Button>
              </form>
              <Box className={styles.textBtn}>
                <Typography
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  className={styles.textRegular}
                >
                  Don't have an account?
                </Typography>
                <Link style={{ textDecoration: 'none' }} to="/login">
                  <Button className={styles.btnLogin}>Login</Button>
                </Link>
              </Box>
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default Register;
