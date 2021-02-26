import { configureStore } from '@reduxjs/toolkit';
import newsSlice from '../reducer/newsSlice';

 const store=configureStore({
  reducer: {
    news:newsSlice,
  },
});

export default store;