import BlogPostCard from './BlogPostCard';

function BlogPostContainer() {
  return (
    <>
      <div className='max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10'>
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
        </div>
      </div>
    </>
  );
}

export default BlogPostContainer;
