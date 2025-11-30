import ContactUsCard from '@/components/ContactUsCard';
import { AiFillInstagram, AiOutlineX, AiFillTelegr } from 'react-icons/ai';
import ThemeToggle from './ThemeToggle';

const Footer = () => {
  return (
    <>
      <div className='hidden footer-container lg:flex'>
        <div className='container my-12 mx-auto px-2 md:px-32'></div>

        <p dir='rtl'>
          کلیه حقوق این سایت متعلق به فروشگاه دیجیتال سنتر می باشد.
        </p>
        <p className='icons cursor-pointer'>
          <AiFillInstagram />
          <AiOutlineX />
          {/* <ThemeToggle /> */}
        </p>
      </div>
    </>
  );
};

export default Footer;
