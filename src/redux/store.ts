import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/theme.reducer';

const store = configureStore({
  reducer: {
    appTheme: themeReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
