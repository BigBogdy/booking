import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#1F204140',
    },
  },
});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename="/booking">
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
