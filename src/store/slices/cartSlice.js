import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorageCart } from '../../helper/helper';
import { toast } from 'react-hot-toast';

const calculatePrice = (price, discountPercentage = 0) =>
  price * (1 - discountPercentage / 100);

const updateLocalStorage = (selectedItems) => {
  localStorage.setItem('cartItems', JSON.stringify(selectedItems));
};

const computeTotals = (items) => {
  return items.reduce(
    (acc, item) => {
      const price = calculatePrice(item.originalPrice, item.discountPercentage);
      acc.itemsCounter += item.quantity;
      acc.total += price * item.quantity;
      return acc;
    },
    { itemsCounter: 0, total: 0 }
  );
};

const storedItems = getLocalStorageCart();
const totals = computeTotals(storedItems);

const initialState = {
  selectedItems: storedItems,
  itemsCounter: totals.itemsCounter,
  discountPercentage: 0,
  total: totals.total,
  checkout: false,
  user: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const { _id, name, quantity, originalPrice, discountPercentage } =
        payload;
      const existingItem = state.selectedItems.find((item) => item._id === _id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.selectedItems.push(payload);
      }

      state.itemsCounter += quantity;
      state.total +=
        calculatePrice(originalPrice, discountPercentage) * quantity;

      updateLocalStorage(state.selectedItems);
      toast.success(`${quantity} ${name} به سبد خرید شما اضافه شد.`);
    },
    removeItem: (state, { payload }) => {
      const item = state.selectedItems.find((item) => item._id === payload);
      if (item) {
        state.itemsCounter -= item.quantity;
        state.total -=
          calculatePrice(item.originalPrice, item.discountPercentage) *
          item.quantity;
        state.selectedItems = state.selectedItems.filter(
          (item) => item._id !== payload
        );
      }
      updateLocalStorage(state.selectedItems);
    },
    increase: (state, { payload }) => {
      const item = state.selectedItems.find((item) => item._id === payload);
      if (item) {
        item.quantity += 1;
        state.itemsCounter += 1;
        state.total += calculatePrice(
          item.originalPrice,
          item.discountPercentage
        );
      }
      updateLocalStorage(state.selectedItems);
    },
    decrease: (state, { payload }) => {
      const item = state.selectedItems.find((item) => item._id === payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.itemsCounter -= 1;
        state.total -= calculatePrice(
          item.originalPrice,
          item.discountPercentage
        );
      }
      updateLocalStorage(state.selectedItems);
    },
    completeCheckout: (state) => {
      state.checkout = true;
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.discountPercentage = 0;
      state.total = 0;
      updateLocalStorage(state.selectedItems);
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },

    setCart: (state, { payload }) => {
      state.selectedItems = payload;
      const totals = computeTotals(payload);
      state.itemsCounter = totals.itemsCounter;
      state.total = totals.total;
      updateLocalStorage(state.selectedItems);
    },
  },
});

export const {
  addItem,
  removeItem,
  increase,
  decrease,
  completeCheckout,
  setUser,
  setCart,
} = cartSlice.actions;

export default cartSlice.reducer;
