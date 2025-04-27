import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';  // react-redux থেকে Provider ইম্পোর্ট
import store, { persistor } from './redux/store.js';
import { RouterProvider } from 'react-router';
import { router } from './router/Router.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  
  </StrictMode>
);
