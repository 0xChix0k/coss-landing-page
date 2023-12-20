import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import './reset.css';
import './i18n';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Routers from 'router/Router';
import store from 'store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(Routers);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
