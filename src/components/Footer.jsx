import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import ThemeToggle from './ThemeToggle';

const Footer = () => {
  return (
    <div className='hidden footer-container lg:flex'>
      <p dir='rtl'>کلیه حقوق این سایت متعلق به فروشگاه دیجیتال سنتر می باشد.</p>
      <p className='icons cursor-pointer'>
        <AiFillInstagram />
        <AiOutlineTwitter />
        {/* <ThemeToggle /> */}
      </p>
    </div>
  );
};

export default Footer;
