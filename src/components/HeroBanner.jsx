import Link from 'next/link';
import { urlFor } from '../sanity/lib/image';
import Image from 'next/image';

const HeroBanner = ({
  heroBanner: { smallText, image, product, buttonText, desc },
}) => {
  return (
    <>
      <div className='hero-banner-container max-w-[1300px] mx-auto'>
        <div className='hero-banner'>
          {/* <p className='beats-solo'>{smallText}</p> */}
          <img
            src={urlFor(image).url()}
            alt='headphones'
            className='hero-banner-image rounded-lg'
          />
          <div>
            <Link href={`/product/${product}`}>
              <button className='btn-hero' type='button'>
                {buttonText}
              </button>
            </Link>
            <div className='desc'>
              <p className='text-justify'>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
