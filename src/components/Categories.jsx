'use client';
import { urlFor } from '@/sanity/lib/image';
const Categories = ({ categories }) => {
  return (
    <>
      {categories?.map((category) => (
        <div
          key={category._id}
          className='bg-gray-100 p-6 rounded-lg text-center'
        >
          <div className='flex justify-center mb-4'>
            {category.icon ? (
              <img
                src={urlFor(category.icon).width(100).height(100).url()}
                alt={category.title}
                className='w-16 h-16 object-contain'
              />
            ) : (
              <span className='text-gray-400'></span>
            )}
          </div>
          <h3 className='text-2xl font-semibold'>{category.title}</h3>
        </div>
      ))}
    </>
  );
};

export default Categories;
