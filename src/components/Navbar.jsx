'use client';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useStateContext } from '../context/StateContext.js';
import Cart from './Cart.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronLeft } from 'lucide-react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handlerOpenLogin } = useStateContext();
  const [dropdownNavbar, setDropdownNavbar] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { data: session } = useSession();
  const { showCart, setShowCart } = useStateContext();

  return (
    <>
      <header className='bg-white dark:bg-gray-800 ring shadow-xl ring-gray-900/5'>
        <nav
          aria-label='Global'
          className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        >
          <div className='flex flex-row items-center lg:flex-1'>
            <button
              type='button'
              className='cart-icon'
              onClick={() => setShowCart(true)}
            >
              <img
                className='w-5 h-5 md:w-10 md:h-10 object-cover'
                src='/shopping-bags-shopping-bag-svgrepo-com.svg'
                alt=''
              />
              <span className='cart-item-qty'>{cart.itemsCounter}</span>
            </button>

            {session ? (
              <>
                <div className='relative'>
                  <button
                    id='dropdownNavbarLink'
                    aria-expanded={dropdownNavbar}
                    onClick={() => setDropdownNavbar((prev) => !prev)}
                    className='flex items-center justify-between w-full p-2 ml-4 text-lg rounded-sm md:border-0  md:p-0 md:w-auto'
                  >
                    {session.user.name}
                    <ChevronLeft className='-rotate-90 w-2.5 h-2.5 ms-1.5' />
                  </button>

                  {dropdownNavbar && (
                    <div
                      id='dropdownNavbar'
                      className='absolute z-10 top-8 font-normal bg-white rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 transition-all'
                    >
                      <div className='mx-auto transition'>
                        <button
                          onClick={() => signOut()}
                          className='inline-block w-full px-4 py-2 text-sm bg-red-500 text-white rounded'
                        >
                          خروج از حساب کاربری
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <button
                onClick={handlerOpenLogin}
                className='flex items-center gap-1 ml-3 mr-2 text-base md:text-lg font-medium'
              >
                ورود | ثبت‌نام
                {/* <span className='mt-2' aria-hidden='true'>
                  &rarr;
                </span> */}
              </button>
            )}
            <ThemeToggle />
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-all'
            >
              <span className='sr-only'></span>
              <Bars3Icon aria-hidden='true' className='size-6' />
            </button>
          </div>
          <PopoverGroup className='hidden lg:flex flex-row-reverse lg:gap-x-12'>
            <Link
              href='/'
              className='text-gray-900 dark:text-white text-base font-medium'
            >
              صفحه اصلی
            </Link>

            <Link
              href='/product'
              className='text-gray-900 dark:text-white text-base font-medium'
            >
              محصولات
            </Link>
            <Link
              href='/blog'
              className='text-gray-900 dark:text-white text-base font-medium'
            >
              مجله
            </Link>
            <Link
              href='/about-us'
              className='text-gray-900 dark:text-white text-base font-medium'
            >
              درباره ما
            </Link>
            <Link
              href='/contact-us'
              className='text-gray-900 dark:text-white text-base font-medium'
            >
              تماس با ما
            </Link>
          </PopoverGroup>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <Link href='/' className='-m-1.5 p-1.5 text-lg'>
              {/* <span className='sr-only'></span> */}
              دیجیتال سنتر
              <img
                src='/shopping-cart-supermarket-svgrepo-com.svg'
                alt=''
                className='inline-block h-8 w-auto ml-2'
              />
            </Link>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className='lg:hidden'
        >
          <div className='fixed inset-0 z-10' />
          <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <Link href='/' className='-m-1.5 p-1.5 text-sm text-gray-900'>
                {/* <span className='sr-only'>دیجیتال سنتر</span> */}
                دیجیتال سنتر
                <img
                  src='/shopping-cart-supermarket-svgrepo-com.svg'
                  alt=''
                  className='inline-block h-8 w-auto ml-2'
                />
              </Link>
              <button
                type='button'
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
              >
                <XMarkIcon aria-hidden='true' className='size-6' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6 text-center'>
                  <Link
                    href='/'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                  >
                    صفحه اصلی
                  </Link>
                  <Link
                    href='/product'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                  >
                    محصولات
                  </Link>
                  <Link
                    href='/blog'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                  >
                    مجله
                  </Link>
                  <Link
                    href='/about-us'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                  >
                    درباره ما
                  </Link>
                  <Link
                    href='/contact-us'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                  >
                    تماس با ما
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        {showCart && <Cart />}
      </header>
    </>
  );
}

export default Navbar;
