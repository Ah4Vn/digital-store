import { configureStore } from '@reduxjs/toolkit';
import landingReducer from './slices/landingSlice';
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    landing: landingReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

store.subscribe(() => {
  const { selectedItems } = store.getState().cart;
  localStorage.setItem('cartItems', JSON.stringify(selectedItems));
});

export default store;
