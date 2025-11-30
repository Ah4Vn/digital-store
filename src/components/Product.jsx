import Link from 'next/link';
import { urlFor } from '../sanity/lib/image';
import Image from 'next/image';
import BtnAddToCart from './BtnAddToCart';
import { formatPrice } from '../helper/helper';

const Product = ({ product }) => {
  const {
    _id,
    image,
    name,
    slug,
    originalPrice,
    discountPercentage,
    discountedPrice,
  } = product;

  return (
    <>
      {/* <div className='product-card'> */}
      <div className='flex flex-col justify-evenly w-full md:h-[543.338] max-w-sm bg-white dark:bg-gray-800 shadow-normal rounded-2xl border-gray-200 dark:border-gray-700'>
        <Link href={`/product/${slug.current}`}>
          {image && image[0] ? (
            <Image
              src={urlFor(image[0]).url()}
              alt={name}
              className='p-4 rounded-3xl'
              width={400}
              height={400}
            />
          ) : (
            <img
              src='/public/account-avatar-profile-user-svgrepo-com.svg'
              alt='placeholder'
              className='p-4 rounded-3xl'
            />
          )}
        </Link>

        {/* <div className='flex flex-col justify-between'> */}
        <div className='px-5'>
          {/* <div className='flex flex-col justify-between px-5'> */}
          <div className='product-name truncate w-full'>
            <Link
              href={`/product/${slug.current}`}
              className='text-xl font-semibold text-gray-900 dark:text-white'
            >
              {name}
            </Link>
          </div>
          <div className='flex items-center mt-2.5 mb-5'>
            <div className='flex items-center space-x-px rtl:space-x-reverse'>
              <svg
                fill='rgb(250, 204, 21)'
                viewBox='0 0 24 24'
                strokeWidth={1}
                // stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                />
              </svg>
              <svg
                fill='rgb(250, 204, 21)'
                viewBox='0 0 24 24'
                strokeWidth={1}
                // stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                />
              </svg>
              <svg
                fill='rgb(250, 204, 21)'
                viewBox='0 0 24 24'
                strokeWidth={1}
                // stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                />
              </svg>
              <svg
                fill='rgb(250, 204, 21)'
                viewBox='0 0 24 24'
                strokeWidth={1}
                // stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                />
              </svg>

              <svg
                className='w-5 h-5 text-gray-200 dark:text-gray-600'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 22 20'
              >
                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
              </svg>
            </div>
            <span className='text-gray-200 dark:text-gray-400 text-base font-semibold px-2.5 py-0.5 ms-2'>
              5.0
            </span>
          </div>
          <div className='flex items-center justify-between flex-row mb-4'>
            <div className='flex items-center'>
              <img className='mr-2' src='/Tooman-gray.svg' alt='' />
              <span className='text-2xl font-bold text-gray-900 dark:text-white'>
                {formatPrice(originalPrice)}
              </span>
            </div>
            <BtnAddToCart product={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
