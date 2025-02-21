import HomeContent from '@/components/HomeContent';
// import UserReviews from '@/components/UserReviews';
import BrandPartnerships from '@/components/BrandPartnerships';
import WhyChooseThisStore from '@/components/WhyChooseThisStore';
import TestimonialSection from '@/components/TestimonialSection';
import BlogPostContainer from '@/components/BlogPostContainer';

function Home() {
  return (
    <>
      <HomeContent />

      <TestimonialSection
        firstBlockImage='/MK͏90.webp'
        firstBlockName='MK͏90'
        secondBlockImage='/air-max.webp'
        secondBlockName='Air-Max'
      />

      <WhyChooseThisStore />

      {/* <UserReviews /> */}

      <BlogPostContainer />

      <BrandPartnerships />
    </>
  );
}

export default Home;
