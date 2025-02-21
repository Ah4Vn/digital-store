'use client';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  increase,
  decrease,
  completeCheckout,
} from '../store/slices/cartSlice';
import Link from 'next/link';
import { urlFor } from '../sanity/lib/image';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../context/StateContext.js';
import { formatPrice } from '../helper/helper';

const Cart = () => {
  const cartRef = useRef();
  const dispatch = useDispatch();
  const { selectedItems, itemsCounter, total } = useSelector(
    (state) => state.cart
  );
  const { setShowCart } = useStateContext();

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button
          type='button'
          className='cart-heading'
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft fill='#324d67' />
          <span className='heading'>سبد خرید</span>
          <span className='cart-num-items'>({itemsCounter} کالا)</span>
        </button>
        {selectedItems.length === 0 ? (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} />
            <p>سبد خرید خالی می‌باشد.</p>
            <Link href='/product'>
              <button type='button' className='btn'>
                ادامه خرید
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className='product-container'>
              {selectedItems.map((item) => (
                <div className='product' key={item._id}>
                  {item.image && item.image[0] && (
                    <img
                      src={urlFor(item.image[0]).url()}
                      alt={item.name}
                      className='cart-product-image'
                    />
                  )}
                  <div className='item-desc'>
                    <div className='flex top'>
                      <h5>{item.name}</h5>
                      <h4>{formatPrice(item.originalPrice)}</h4>
                    </div>
                    <div className='flex bottom'>
                      <div>
                        <p className='quantity-desc'>
                          <span
                            className='minus'
                            onClick={() => dispatch(decrease(item._id))}
                          >
                            <AiOutlineMinus />
                          </span>
                          <span className='num'>{item.quantity}</span>
                          <span
                            className='plus'
                            onClick={() => dispatch(increase(item._id))}
                          >
                            <AiOutlinePlus />
                          </span>
                        </p>
                      </div>
                      <button
                        type='button'
                        className='remove-item'
                        onClick={() => dispatch(removeItem(item._id))}
                      >
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='cart-bottom'>
              <div className='total' dir='rtl'>
                <h3 className='text-foreground'>مجموع قیمت:</h3>
                <h3 className='text-foreground'>
                  هزار تومان {formatPrice(total)}
                </h3>
              </div>
              <div className='btn-container'>
                <button type='button' className='btn' disabled>
                  درگاه پرداخت موقتا بسته شده است
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
