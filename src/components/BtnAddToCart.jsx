'use client';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, increase, decrease } from '../store/slices/cartSlice';
import { useSession } from 'next-auth/react';
import { addItemToLocalStorage } from '../helper/helper';

function BtnAddToCart({ product }) {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const item = {
    _id: product._id,
    name: product.name,
    image: product.image || [],
    quantity: 1,
    originalPrice: product.originalPrice || 0,
    discountPercentage: product.discountPercentage || 0,
  };

  const handleAddToCart = () => {
    if (session) {
      dispatch(addItem(item));
    } else {
      addItemToLocalStorage(item);
      dispatch(addItem(item));
    }
  };
  return (
    <>
      <button className='focus:outline-none focus:ring-blue-300 px-5 py-2.5 text-center'>
        <img
          onClick={handleAddToCart}
          className='w-10 h-10'
          src='/shopping-cart-svgrepo-com.svg'
          alt=''
        />
      </button>
    </>
  );
}

export default BtnAddToCart;
