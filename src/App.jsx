import * as React from "react";
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';
import Router from './router';

import { Provider } from 'react-redux';
import store from './redux/index';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={Router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
