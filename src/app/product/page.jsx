'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter, useSearchParams } from 'next/navigation';
import { client } from '../../sanity/lib/client';
import { motion, AnimatePresence } from 'framer-motion';
import Product from '@/components/Product';
import LoadingPage from '../loading';
import { ChevronLeft } from 'lucide-react';

export default function ProductsPage() {
  const [filter, setFilter] = useState('پربازدیدترین');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000000 });
  const [availability, setAvailability] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();

  const categories = [
    { label: 'هدفون', value: 'هدفون' },
    { label: 'ایرپاد', value: 'ایرپاد' },
    { label: 'ساعت هوشمند', value: 'ساعت هوشمند' },
  ];

  const getSortOrder = (filter) => {
    switch (filter) {
      case 'گران‌ترین':
        return 'originalPrice desc';
      case 'ارزان‌ترین':
        return 'originalPrice asc';
      case 'محبوب‌‌ترین':
        return 'favorites desc';
      case 'پرفروش‌ترین':
        return 'sales desc';
      case 'پربازدیدترین':
      default:
        return 'views desc';
    }
  };

  useEffect(() => {
    const params = new URLSearchParams();
    params.set('filter', filter);
    params.set('min', priceRange.min);
    params.set('max', priceRange.max);
    params.set('availability', availability);
    params.set('search', searchTerm);
    if (selectedCategories.length > 0) {
      params.set('categories', selectedCategories.join(','));
    }
    params.set('page', currentPage);

    router.push(`?${params.toString()}`);
  }, [
    filter,
    priceRange,
    availability,
    searchTerm,
    selectedCategories,
    currentPage,
    router,
  ]);

  useEffect(() => {
    async function fetchProducts() {
      const sortOrder = getSortOrder(filter);
      const pageSize = 9;
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;

      let query =
        '*[_type == "product" && originalPrice >= $min && originalPrice <= $max';

      if (availability) {
        query += ' && isAvailable == true';
      }

      if (selectedCategories.length > 0) {
        query += ' && category->title in $categories';
      }

      if (searchTerm.trim() !== '') {
        query += ' && name match $search';
      }

      query += `] | order(${sortOrder})[${start}...${end}]`;

      const params = {
        min: Number(priceRange.min),
        max: Number(priceRange.max),
      };
      if (selectedCategories.length > 0) {
        params.categories = selectedCategories;
      }
      if (searchTerm.trim() !== '') {
        params.search = `*${searchTerm}*`;
      }

      try {
        const fetchedProducts = await client.fetch(query, params);
        setProducts(fetchedProducts);
        setHasMore(fetchedProducts.length === pageSize);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, [
    filter,
    priceRange,
    availability,
    searchTerm,
    selectedCategories,
    currentPage,
  ]);

  const handleCategoryChange = (categoryValue, checked) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, categoryValue]);
    } else {
      setSelectedCategories((prev) =>
        prev.filter((cat) => cat !== categoryValue)
      );
    }
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (hasMore) setCurrentPage((prev) => prev + 1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className='flex flex-col-reverse md:flex-row min-h-screen bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark'>
      <Head>
        <title>Products Page</title>
      </Head>

      <div className='w-full md:w-3/4 pt-4 px-16'>
        <div className='flex flex-wrap items-center md:justify-between lg:flex-nowrap lg:gap-2 mb-4'>
          <div className='flex flex-wrap items-end justify-center lg:flex-nowrap md:items-center space-y-2 space-x-4 md:space-y-0 *:rounded-full *:bg-sky-50 *:px-6 *:py-2 dark:*:border-sky-500/15 dark:*:bg-sky-500/10'>
            {[
              'گران‌ترین',
              'ارزان‌ترین',
              'محبوب‌‌ترین',
              'پرفروش‌ترین',
              'پربازدیدترین',
            ].map((option) => (
              <button
                key={option}
                onClick={() => {
                  setFilter(option);
                  setCurrentPage(1);
                }}
                className={`px-4 py-3 rounded-md ${
                  filter === option
                    ? 'bg-blue-500 text-gray-800 dark:text-sky-300'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className='flex lg:w-5/12 mt-2 md:mt-0 w-full'>
            <input
              type='text'
              placeholder='...جستجو'
              value={searchTerm}
              onChange={handleSearchChange}
              className=' dark:bg-sky-500/10 dark:border-none w-full text-right px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            />
          </div>
        </div>

        {/* Products Grid */}

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <AnimatePresence initial={false}>
            {products && products.length > 0 ? (
              products.map((product) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, scale: 0 }}
                  exit={{ opacity: 0, scale: 0 }}
                  animate={{
                    y: [0, 50, 0],
                    transition: { duration: 0.3 },
                    opacity: 1,
                    scale: 1,
                  }}
                >
                  <Product key={product._id} product={product} />
                </motion.div>
              ))
            ) : (
              <div className='flex justify-center items-center w-screen h-screen'>
                <LoadingPage />
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        <div className='flex justify-center items-center mt-6 space-x-4'>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className='px-4 py-2 bg-blue-500 rounded disabled:opacity-50'
          >
            قبلی
          </button>
          <span>صفحه {currentPage}</span>
          <button
            onClick={handleNextPage}
            disabled={!hasMore}
            className='px-4 py-2 bg-blue-500 rounded disabled:opacity-50'
          >
            بعدی
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className='w-full md:w-1/4 p-4 shadow-md text-right'>
        <h2 className='text-xl font-semibold mb-4'>فیلتر‌ها</h2>

        {/* Category Filter */}
        <div className='mb-4'>
          <div
            className='flex justify-between cursor-pointer'
            onClick={() => setShowCategory((prev) => !prev)}
          ></div>

          {showCategory === true ? (
            <>
              <ChevronLeft className=' -rotate-90' />
              <div className='flex'>
                <div className='flex flex-col justify-end space-y-2'>
                  {categories.map((category) => (
                    <label
                      key={category.value}
                      className='flex items-center justify-end'
                    >
                      <span className='text-right'>{category.label}</span>

                      <input
                        type='checkbox'
                        className='ml-2'
                        checked={selectedCategories.includes(category.value)}
                        onChange={(e) =>
                          handleCategoryChange(category.value, e.target.checked)
                        }
                      />
                    </label>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <ChevronLeft />
          )}
          <h3 className='text-lg font-medium mb-2'>دسته بندی</h3>
        </div>

        {/* Price Range Filter */}
        <div className='mb-4'>
          <h3 className='text-lg font-medium mb-2'>قیمت</h3>
          <div className='flex items-center justify-between'>
            <input
              type='number'
              value={priceRange.min}
              onChange={(e) => {
                setPriceRange({ ...priceRange, min: e.target.value });
                setCurrentPage(1);
              }}
              className='border border-gray-300 px-2 py-1 rounded-md w-1/2 mr-2'
              placeholder='حداقل'
            />
            <input
              type='number'
              value={priceRange.max}
              onChange={(e) => {
                setPriceRange({ ...priceRange, max: e.target.value });
                setCurrentPage(1);
              }}
              className='border border-gray-300 px-2 py-1 rounded-md w-1/2'
              placeholder='حداکثر'
            />
          </div>
        </div>

        {/* Availability Toggle */}
        <div className='mb-4'>
          <label className='flex items-center justify-end'>
            <input
              type='checkbox'
              checked={availability}
              onChange={(e) => {
                setAvailability(e.target.checked);
                setCurrentPage(1);
              }}
              className='mr-2'
            />
            <span>فقط کالاهای موجود</span>
          </label>
        </div>
      </div>
    </div>
  );
}
