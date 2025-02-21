import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import ClientSideComponent from '@/components/ClientSideComponent';
import ClientUseStateContext from '@/components/ClientUseStateContext';
import ProductDetails from '@/components/ProductDetails';
import FeatureBoxes from '@/components/FeatureBoxes';
import { formatPrice } from '@/helper/helper';
import LoadingPage from '../../loading.jsx';

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;

  const query = `*[_type == "product" && slug.current == $slug][0]`;
  const product = await client.fetch(query, { slug });

  if (!product) {
    return <LoadingPage />;
  }

  const { image, name, introduction, originalPrice, specifications } = product;

  return (
    <>
      <div className='m-0 mb-5 p-4 max-w-[1400px] flex justify-evenly items-center flex-col-reverse lg:flex-row mx-auto relative text-foreground dark:text-foreground-dark'>
        <div className='bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 flex flex-col justify-center items-center mt-20'>
          <div className='flex items-center'>
            <img className='mr-2' src='/Tooman-red-cart.svg' alt='' />
            <span className='text-2xl font-bold text-rose-600 dark:text-white'>
              {formatPrice(originalPrice)}
            </span>
          </div>
          <ClientUseStateContext product={product} />
        </div>

        <div className='product-detail-desc'>
          <h1 className='text-2xl text-center mt-4 md:mt-0 md:text-right lg:text-3xl font-bold'>
            {name}
          </h1>
          <div className='reviews'>
            <div className='flex'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(0)</p>
          </div>
          <p className='hidden md:inline-block text-lg text-center mr-3 md:text-right'>
            مشخصات
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
            {specifications.slice(0, 4).map((spec, index) => (
              <div
                key={index}
                className='flex items-center justify-between gap-2 bg-white dark:bg-gray-800 rounded-lg ring shadow-xl ring-gray-900/5 px-6 py-6'
              >
                <span className='font-bold'>{spec.title}</span>
                <p>{spec.details}</p>
              </div>
            ))}
          </div>
          <FeatureBoxes />
        </div>

        <ClientSideComponent images={image} />
      </div>

      <ProductDetails
        introduction={introduction}
        specifications={specifications}
      />

      {/* <div className='maylike-products-wrapper m-0 mb-5 p-4 max-w-[1300px] flex flex-col mx-auto relative rounded-lg'>
        <h2></h2> */}
      {/* <div className='marquee'>
          <div className='maylike-products-container track'> */}
      {/* {product?.slice(0, 6).map((item) => (
              <Product key={item._id} product={item} />
            ))} */}

      {/* {product.map((item) => (
              <Product key={item._id} product={item} />
            ))} */}
      {/* </div>
        </div> */}
      {/* </div> */}
    </>
  );
}
