'use client';
import { useState } from 'react';
import { useStateContext } from '../context/StateContext.js';
import { toast } from 'react-hot-toast';
import { validateEmail, validatePassword } from '../helper/helper.js';

const SignUp = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });
  const { openLogin, setOpenSignup, handlerOpenAgainSignup } =
    useStateContext();

  // validators from helper

  const canSubmit = () => {
    const emailOk = validateEmail(form.email);
    const passOk = Object.values(passwordValidations).every(Boolean);
    return form.username && emailOk && passOk;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      toast.error('لطفا همه فیلدها را پر کنید.');
      return;
    }

    if (!validateEmail(form.email)) {
      setEmailError('ایمیل وارد شده معتبر نیست.');
      toast.error('ایمیل وارد شده معتبر نیست.');
      return;
    } else {
      setEmailError('');
    }

    const passRes = validatePassword(form.password);
    if (!passRes.ok) {
      setPasswordError(
        'رمز عبور باید حداقل 8 کاراکتر و شامل حروف بزرگ، کوچک، عدد و کاراکتر ویژه باشد.'
      );
      toast.error('رمز عبور معتبر نیست.');
      return;
    } else {
      setPasswordError('');
    }

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      toast.success('ثبت نام با موفقیت انجام شد!');
      setOpenSignup(false);
    } else {
      toast.error('لطفا ایمیل معتبر وارد کنید.');
    }
  };

  return (
    <>
      <div
        className='min-h-screen bg-transparent py-6 flex flex-col justify-center z-50 sm:py-12'
        dir='rtl'
      >
        <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
          <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
          <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
            <div className='max-w-md mx-auto'>
              <div className='flex justify-between items-center'>
                <img
                  className='cursor-pointer'
                  src='/close-icon-login.svg'
                  alt=''
                  onClick={() => setOpenSignup(false)}
                />
                <p className='text-2xl font-semibold text-gray-800'>ثبت نام</p>
              </div>
              <div className='divide-y divide-gray-200'>
                <div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
                  <div className='relative'>
                    <input
                      autoComplete='off'
                      id='username'
                      name='username'
                      type='text'
                      className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-right text-gray-900 focus:outline-none focus:borer-rose-600'
                      onChange={(e) =>
                        setForm({ ...form, username: e.target.value })
                      }
                      required
                      placeholder='نام کاربری'
                    />
                    <label
                      htmlFor='username'
                      className='absolute right-0 -top-3.5 text-right text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                    >
                      نام کاربری
                    </label>
                  </div>

                  <div className='relative'>
                    <input
                      autoComplete='off'
                      id='email'
                      name='email'
                      type='text'
                      className={`peer placeholder-transparent h-10 w-full border-b-2 text-right text-gray-900 focus:outline-none focus:borer-rose-600 ${emailError ? 'border-red-500 focus:border-red-500' : validateEmail(form.email) ? 'border-green-500' : 'border-gray-300'}`}
                      aria-invalid={!!emailError}
                      aria-describedby={
                        emailError
                          ? 'email-error'
                          : validateEmail(form.email)
                            ? 'email-valid'
                            : undefined
                      }
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (e.target.value && !validateEmail(e.target.value)) {
                          setEmailError('ایمیل وارد شده معتبر نیست.');
                        } else {
                          setEmailError('');
                        }
                      }}
                      placeholder='ایمیل'
                      required
                    />
                    <label
                      htmlFor='email'
                      className='absolute right-0 -top-3.5 text-right text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                    >
                      ایمیل
                    </label>
                  </div>

                  <div className='relative'>
                    <input
                      autoComplete='off'
                      id='password'
                      name='password'
                      type='password'
                      className={`peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600 ${passwordError ? 'border-red-500 focus:border-red-500' : Object.values(passwordValidations).every(Boolean) ? 'border-green-500' : 'border-gray-300'}`}
                      aria-invalid={!!passwordError}
                      aria-describedby={
                        passwordError ? 'password-error' : 'password-rules'
                      }
                      onChange={(e) => {
                        setForm({ ...form, password: e.target.value });
                        const pass = validatePassword(e.target.value);
                        setPasswordValidations(pass.validations);
                        if (!pass.ok) {
                          setPasswordError(
                            'رمز عبور باید حداقل 8 کاراکتر و شامل حروف بزرگ، کوچک، عدد و کاراکتر ویژه باشد.'
                          );
                        } else {
                          setPasswordError('');
                        }
                      }}
                      required
                      placeholder='رمز'
                    />
                    <label
                      htmlFor='password'
                      className='absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                    >
                      رمز
                    </label>
                  </div>
                  <div className='relative text-center pt-6'>
                    <button
                      onClick={handleSubmit}
                      className={`bg-cyan-500 text-white rounded-md px-2 py-1 ${!canSubmit() ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={!canSubmit()}
                    >
                      ثبت نام
                    </button>
                  </div>

                  {emailError ? (
                    <p
                      id='email-error'
                      aria-live='polite'
                      className='text-xs text-red-600 mt-1'
                    >
                      {emailError}
                    </p>
                  ) : validateEmail(form.email) ? (
                    <p id='email-valid' className='text-xs text-green-600 mt-1'>
                      ایمیل معتبر است.
                    </p>
                  ) : null}
                  {passwordError ? (
                    <p
                      id='password-error'
                      aria-live='polite'
                      className='text-xs truncate w-48 text-red-600 mt-1'
                    >
                      {passwordError}
                    </p>
                  ) : null}

                  <div
                    id='password-rules'
                    className='mt-2 text-xs text-gray-600 pl-2 space-y-1'
                    aria-live='polite'
                  >
                    <div className='flex items-center gap-2'>
                      <span
                        className={`w-3 h-3 inline-block rounded-full ${passwordValidations.length ? 'bg-green-500' : 'bg-gray-300'}`}
                      />
                      <span>حداقل 8 کاراکتر</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span
                        className={`w-3 h-3 inline-block rounded-full ${passwordValidations.uppercase ? 'bg-green-500' : 'bg-gray-300'}`}
                      />
                      <span>حرف بزرگ (A-Z)</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span
                        className={`w-3 h-3 inline-block rounded-full ${passwordValidations.lowercase ? 'bg-green-500' : 'bg-gray-300'}`}
                      />
                      <span>حرف کوچک (a-z)</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span
                        className={`w-3 h-3 inline-block rounded-full ${passwordValidations.number ? 'bg-green-500' : 'bg-gray-300'}`}
                      />
                      <span>مقدار عددی (0-9)</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span
                        className={`w-3 h-3 inline-block rounded-full ${passwordValidations.special ? 'bg-green-500' : 'bg-gray-300'}`}
                      />
                      <span>کاراکتر ویژه (مثال: !@#$%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full flex justify-center' dir='ltr'>
              <button
                className='flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                disabled
              >
                <svg
                  className='h-6 w-6 mr-2'
                  width='800px'
                  height='800px'
                  viewBox='-0.5 0 48 48'
                  version='1.1'
                >
                  {' '}
                  <title>Google-color</title> <desc>Created with Sketch.</desc>{' '}
                  <defs> </defs>{' '}
                  <g
                    id='Icons'
                    stroke='none'
                    strokeWidth='1'
                    fill='none'
                    fillRule='evenodd'
                  >
                    {' '}
                    <g
                      id='Color-'
                      transform='translate(-401.000000, -860.000000)'
                    >
                      {' '}
                      <g
                        id='Google'
                        transform='translate(401.000000, 860.000000)'
                      >
                        {' '}
                        <path
                          d='M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24'
                          id='Fill-1'
                          fill='#FBBC05'
                        >
                          {' '}
                        </path>{' '}
                        <path
                          d='M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333'
                          id='Fill-2'
                          fill='#EB4335'
                        >
                          {' '}
                        </path>{' '}
                        <path
                          d='M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667'
                          id='Fill-3'
                          fill='#34A853'
                        >
                          {' '}
                        </path>{' '}
                        <path
                          d='M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24'
                          id='Fill-4'
                          fill='#4285F4'
                        >
                          {' '}
                        </path>{' '}
                      </g>{' '}
                    </g>{' '}
                  </g>{' '}
                </svg>
                <span>با حساب گوگل وارد شوید</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
