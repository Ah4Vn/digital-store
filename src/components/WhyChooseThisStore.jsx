export default function WhyChooseThisStore() {
  return (
    <section
      id='features'
      className='bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark relative block px-6 py-10 md:py-20 md:px-10'
    >
      <div className='relative mx-auto max-w-5xl text-center'>
        <h2 className='text-4xl my-3 flex items-center justify-center font-bold'>
          چرا انتخاب ما؟
        </h2>
        <p className='block w-full text-center text-gray-500 text-2xl sm:text-4xl'>
          برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
        </p>
      </div>

      <div className='relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='rounded-md border-neutral-800 dark:bg-neutral-900/50 p-8 text-center shadow'>
          <div className='button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md'>
            <img src='/icon-ecommerce-green.svg' alt='' className='w-12 h-12' />
            {/* <svg
                className='icon icon-tabler icon-tabler-color-swatch'
                width='24'
                height='24'
              >
              </svg> */}
          </div>
          <h3 className='mt-6'>تضمین کالا</h3>
          <p className='my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
        </div>

        <div className='rounded-md border-neutral-800 dark:bg-neutral-900/50 p-8 text-center shadow'>
          <div className='button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md'>
            <img src='/icon-startup-green.svg' alt='' className='w-12 h-12' />
          </div>
          <h3 className='mt-6'>قیمت مناسب</h3>
          <p className='my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
        </div>

        <div className='rounded-md border-neutral-800 dark:bg-neutral-900/50 p-8 text-center shadow'>
          <div className='button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md'>
            <img src='/icon-business-green.svg' alt='' className='w-12 h-12' />
          </div>
          <h3 className='mt-6'>کالاهای متنوع</h3>
          <p className='my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
        </div>

        <div className='rounded-md border-neutral-800 dark:bg-neutral-900/50 p-8 text-center shadow'>
          <div className='button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md'>
            <img
              src='/truck-speed-svgrepo-com.svg'
              alt=''
              className='w-12 h-12'
            />
          </div>
          <h3 className='mt-6'>ارسال سریع</h3>
          <p className='my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
        </div>
      </div>
    </section>
  );
}
