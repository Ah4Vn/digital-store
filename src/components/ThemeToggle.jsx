'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

import { MoonStar, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className='w-10 h-10 font-black mt-2 transition'
      style={{ fontSize: 'x-large' }}
    >
      {theme === 'light' ? <MoonStar /> : <Sun />}
    </button>
  );
}
