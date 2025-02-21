import Image from 'next/image';

export default function ProductIntroductionBanners() {
  return (
    <div className='container mx-auto px-4 py-8 max-w-screen-xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex items-center justify-center'>
          <img className='rounded-2xl object-contain' src='/12.jpg' alt='' />
        </div>
        <div className='flex items-center justify-center'>
          <img className='rounded-2xl object-contain' src='/13.jpg' alt='' />
        </div>
      </div>
    </div>

    // h-64
  );
}
