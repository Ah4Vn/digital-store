'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLandingPage } from '../store/slices/landingSlice';
import HeroBanner from './HeroBanner';
import Product from './Product';
import CategorySection from './CategorySection';
import ProductIntroductionBanners from './ProductIntroductionBanners';
import Cover from './Cover';
import SpecialProductCard from './SpecialProductCard';
import SpecialProducts from './SpecialProducts';
import LoadingPage from '../app/loading';

function HomeContent() {
  const dispatch = useDispatch();
  const { loading, landingPage, error } = useSelector((state) => state.landing);

  useEffect(() => {
    dispatch(fetchLandingPage());
  }, [dispatch]);

  if (loading) return <LoadingPage />;
  if (error)
    return (
      <div className='text-center'>
        مشکلی به وجود آمده، لطفا چند لحظه دیگر دوباره تلاش کنید
      </div>
    );

  const { products, bannerData, categories } = landingPage;

  return (
    <>
      {bannerData.length > 0 && <HeroBanner heroBanner={bannerData[0]} />}
      <CategorySection categories={categories} />
      <ProductIntroductionBanners />
      <div className='products-heading'>
        <h2 className='text-center text-5xl font-extrabold'>محصولات پرفروش</h2>
      </div>
      {/* <div className='products-container'> */}
      <div className='max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {products?.slice(0, 9).map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>

      <SpecialProducts>
        {products &&
          [...products]
            .sort(() => Math.random() - 0.5)
            .slice(0, 4)
            .map((product) => (
              <SpecialProductCard key={product._id} product={product} />
            ))}
      </SpecialProducts>

      <Cover />
    </>
  );
}

export default HomeContent;
