import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from '@reduxjs/toolkit';
import persistor, { rootReducer } from './reducer';

const store = configureStore({
  rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const StoreProvider = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);

export default store;
