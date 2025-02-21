'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

const QnASection = () => {
  const { data: session } = useSession();
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleSubmit = () => {
    if (question.trim() !== '') {
      setQuestions([...questions, question]);
      setQuestion('');
    }
  };

  return (
    <div className='bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark shadow-md rounded-lg p-6'>
      <h2 className='text-lg font-semibold mb-4'>پرسش و پاسخ های مشتریان</h2>

      {questions.length === 0 ? (
        <p className='text-gray-500'>
          سوالی وجود ندارد. اولین نفری باشید که سوالی می‌پرسد.
        </p>
      ) : (
        <ul className='space-y-2'>
          {questions.map((q, index) => (
            <li key={index} className='border-b py-2'>
              {q}
            </li>
          ))}
        </ul>
      )}

      {session ? (
        <div className='mt-4'>
          <textarea
            className='w-full p-2 border rounded'
            placeholder='سوال خود را بنویسید...'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>

          <button
            className='bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600'
            onClick={handleSubmit}
          >
            ارسال سوال
          </button>
        </div>
      ) : (
        <p className='text-red-500 mt-4'>
          فقط کاربران ثبت نام شده واجد شرایط وارد کردن سوالات هستند
        </p>
      )}
    </div>
  );
};

export default QnASection;
