import './globals.css';
import Providers from './providers';
import Cover from '@/components/Cover';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FooterMobile from '@/components/FooterMobile.jsx';

export const metadata = {
  title: 'فروشگاه دیجیتال',
  description: 'A digital store built with Next.js',
  keywords: [
    'headphones',
    'earpods',
    'digital watch',
    'smartwatch',
    'digital store',
    'electronics',
    'gadgets',
    'tech accessories',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark transition-colors duration-300'>
        <Providers>
          <Navbar />
          <Cover />
          {children}
          <FooterMobile />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
