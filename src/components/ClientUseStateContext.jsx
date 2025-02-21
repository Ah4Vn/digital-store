'use client';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, increase, decrease } from '../store/slices/cartSlice';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { addItemToLocalStorage } from '../helper/helper';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function ClientUseStateContext({ product }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const item = {
    _id: product._id,
    name: product.name,
    image: product.image || [],
    quantity: qty,
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

  const incrementQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decrementQty = () => {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  return (
    <div className='flex flex-col text-center items-center justify-center'>
      <div className='quantity'>
        <p className='text-base text-center mb-2'>تعداد</p>
        <p className='quantity-desc'>
          <span className='minus' onClick={decrementQty}>
            <AiOutlineMinus />
          </span>
          <span className='num'>{qty}</span>
          <span className='plus' onClick={incrementQty}>
            <AiOutlinePlus />
          </span>
        </p>
      </div>

      <div className='buttons'>
        <button type='button' className='add-to-cart' onClick={handleAddToCart}>
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}

export default ClientUseStateContext;
