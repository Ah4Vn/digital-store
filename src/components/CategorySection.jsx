import { urlFor } from '@/sanity/lib/image';

export default function CategorySection({ categories }) {
  return (
    <section className='py-12'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {categories.map((category) => (
            <div key={category._id} className='p-6 rounded-lg text-center'>
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
              <h3 className='text-gray-900 dark:text-white mt-5 text-lg lg:text-2xl font-bold'>
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
