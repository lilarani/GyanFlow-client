import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { RouterProvider } from 'react-router';
import { router } from './router/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
    </HelmetProvider>
  </StrictMode>
);
