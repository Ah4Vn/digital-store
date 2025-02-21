import BlogPostContainer from '@/components/BlogPostContainer';

const BlogPage = () => {
  return (
    <>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-center text-4xl font-bold mb-4'>مجله</h1>
        <BlogPostContainer />
      </div>
    </>
  );
};

export default BlogPage;
