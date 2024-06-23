import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './states';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <StrictMode>
        <ChakraProvider>
          <App />
        </ChakraProvider>
    </StrictMode>
  </Provider>,
);
