'use client';
import { useState } from 'react';
import { urlFor } from '../sanity/lib/image';

const ClientSideComponent = ({ images }) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className='image-container'>
        <img
          src={urlFor(images && images[index]).url()}
          className='product-detail-image'
        />
      </div>
      <div className='small-images-container'>
        {images?.map((item, i) => (
          <img
            key={i}
            src={urlFor(item)}
            className={
              i === index ? 'small-image selected-image' : 'small-image'
            }
            onMouseEnter={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientSideComponent;
