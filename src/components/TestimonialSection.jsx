import Link from 'next/link';

const TestimonialSection = ({
  firstBlockImage,
  firstBlockName,
  secondBlockImage,
  secondBlockName,
}) => {
  return (
    <>
      <div className='container px-6 my-40'>
        <div className='relative flex flex-col items-center mx-auto lg:flex-row lg:max-w-5xl lg:mt-28 xl:max-w-6xl'>
          <div className='w-full lg:w-1/2 lg:h-auto'>
            {/* <div className='w-full h-64 lg:w-1/2 lg:h-auto'> */}
            <img
              className='h-full w-full rounded-t-lg lg:rounded-3xl object-contain lg:object-cover'
              src={firstBlockImage}
              alt={firstBlockName}
            />
          </div>

          <div className='max-w-lg bg-white dark:bg-gray-800 ring shadow-xl ring-gray-900/5 rounded-b-lg lg:rounded-3xl md:max-w-2xl md:absolute md:right-0  md:shadow-lg md:-z-10 md:top-0 md:mt-48 lg:w-3/5 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12'>
            <div className='flex flex-col p-12 md:pl-32 text-right' dir='rtl'>
              <h2 className='text-2xl text-center md:text-right font-medium text-rose-600 lg:text-4xl'>
                {firstBlockName}
              </h2>
              <p className='mt-4'>
                هدفون بی سیم مدل MK͏90 با ظاهر زیبا و ظریف محصولی مناسب و یک هدیه
                عالی برای نزدیکانتان خواهد بود. صدای استریو Hi-Fi و تماس های
                واضح، گوشی های بلوتوثی بی سیم و بلندگوهای 6 میلی متری بزرگ،
                همچنین با بیس قوی، شفاف، متعادل و عملکرد سه برابر برای بازتولید
                زنده صدای دریافتی و ارسالی شماست.
              </p>
              <div className='flex justify-end mt-8'>
                <Link
                  href='/'
                  className='inline-block w-full text-center font-medium text-gray-100 bg-green-600 py-4 px-2 hover:bg-green-800 hover:shadow-md md:w-32'
                >
                  مطالب بیشتر
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl my-16 lg:my-32 xl:max-w-6xl'>
          <div className='w-full lg:w-1/2 lg:h-[36rem]'>
            <img
              className='h-full w-full rounded-t-lg lg:rounded-3xl object-contain lg:object-cover'
              src={secondBlockImage}
              alt={secondBlockName}
            />
          </div>

          <div className='max-w-lg bg-white dark:bg-gray-800 ring shadow-xl ring-gray-900/5 rounded-b-lg lg:rounded-3xl md:max-w-2xl md:-z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 xl:mt-24'>
            <div className='flex flex-col p-12 md:pl-12 md:pr-32' dir='rtl'>
              <h2 className='text-2xl text-center md:text-right font-medium text-rose-600 lg:text-4xl'>
                {secondBlockName}
              </h2>
              <p className='mt-4'>
                هدفون بلوتوثی کوکوکلاسیک مدل Air MAX با ظاهری زیبا و ساختاری
                ارگونومیک یک محصول ایده‌آل برای کاربرانی است که در زمان ورزش،
                باشگاه، پیاده‌روی و حتی مسافرت، به یک هدفون بلوتوثی خوب و
                همه‌فن‌حریف نیاز دارند.
              </p>
              <div className='flex justify-end mt-8'>
                <Link
                  href='/'
                  className='inline-block w-full text-center font-medium text-gray-100 bg-green-600 py-4 px-2 hover:bg-green-800 hover:shadow-md md:w-32'
                >
                  مطالب بیشتر
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
