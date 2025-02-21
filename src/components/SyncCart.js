'use client';
import { useEffect } from 'react';
import { getLocalStorageCart } from '../helper/helper';
import { addItem } from '../store/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { setCart } from '../store/slices/cartSlice';

const SyncCart = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (session && cart.selectedItems.length === 0) {
      const localCart = getLocalStorageCart();
      if (localCart.length > 0) {
        dispatch(setCart(localCart));
        localStorage.removeItem('cartItems');
      }
    }
  }, [session, cart.selectedItems.length, dispatch]);

  return null;
};

export default SyncCart;
