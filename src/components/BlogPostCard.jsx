function BlogPostCard() {
  return (
    <div className='bg-slate-50 dark:bg-gray-800 text-foreground dark:text-foreground-dark rounded-xl lg:rounded-b-lg flex flex-col justify-between leading-normal'>
      <img
        src='/img-blog-post.webp'
        alt=''
        className='w-full mb-3 rounded-t-xl'
      />
      <div className='p-4 pt-2'>
        <div className='mb-8 text-right'>
          <p className='font-bold text-lg mb-2 inline-block'>
            بیس قوی، شفاف، متعادل و عملکرد سه برابر
          </p>
          <p className='text-gray-400 text-sm'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
        </div>
        <div className='flex flex-row-reverse justify-start gap-3 items-center'>
          <img
            className='w-10 h-10 rounded-full mr-4'
            src='/account-avatar-profile-user-svgrepo-com.svg'
            alt='Avatar'
          />

          <div className='text-sm'>
            <p className='font-semibold leading-none'>امیر</p>
            <p className=''>27 دی</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPostCard;
