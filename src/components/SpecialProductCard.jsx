import Link from 'next/link';
import { urlFor } from '../sanity/lib/image';
function SpecialProductCard({
  product: {
    image,
    name,
    slug,
    originalPrice,
    discountPercentage,
    discountedPrice,
  },
}) {
  return (
    <>
      <div className='bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 flex flex-col p-4 m-2'>
        <div className='rounded-lg'>
          <img
            src={urlFor(image && image[0]).url()}
            alt={name}
            className='rounded-3xl'
          />
        </div>
        <div
          className='flex flex-col text-center mt-4 truncate w-full'
          dir='rtl'
        >
          <p className='text-center text-2xl font-semibold text-rose-600'>
            محصول ویژه
          </p>
          <p className='text-center text-lg mt-4 w-48'>{name}</p>
          <Link
            href={`/product/${slug.current}`}
            className='bg-orange-500 p-2 font-medium mt-3 text-xs'
          >
            مشاهده محصول
          </Link>
        </div>
      </div>
    </>
  );
}

export default SpecialProductCard;
