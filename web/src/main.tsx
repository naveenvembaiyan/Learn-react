import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import PersistProvider from '@/redux/providers/persist-provider';
import { store } from '@/redux/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistProvider>
    </Provider>
  </StrictMode>
);
