'use client';
import { useState } from 'react';
import ReviewSection from './ReviewSection';
import QnASection from './QnASection';

const ProductDetails = ({ specifications, introduction }) => {
  const [activeTab, setActiveTab] = useState('introduction');
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div
      className='m-0 mb-5 p-4 max-w-[1300px] flex flex-col mx-auto relative rounded-lg bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark'
      dir='rtl'
    >
      {/* Tabs */}
      <div className='flex space-x-3 border-b border-gray-300'>
        <button
          onClick={() => setActiveTab('introduction')}
          className={`pb-2 ml-3 font-medium ${
            activeTab === 'introduction'
              ? 'text-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          معرفی
        </button>
        <button
          onClick={() => setActiveTab('specifications')}
          className={`pb-2 font-medium ${
            activeTab === 'specifications'
              ? 'text-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          مشخصات
        </button>
        <button
          onClick={() => setActiveTab('ReviewSection')}
          className={`pb-2 font-medium ${
            activeTab === 'ReviewSection'
              ? 'text-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          نظرات
        </button>

        <button
          onClick={() => setActiveTab('QuestionAndAnswer')}
          className={`pb-2 font-medium ${
            activeTab === 'QuestionAndAnswer'
              ? 'text-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          پرسش و پاسخ
        </button>
      </div>

      {/* Content */}
      <div className='mt-4 bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark'>
        {activeTab === 'introduction' && (
          <div>
            <p className={`${showFullDescription ? '' : 'line-clamp-3'}`}>
              {introduction}
            </p>
            <button
              onClick={toggleDescription}
              className='text-blue-500 mt-2 inline-block hover:underline'
            >
              {showFullDescription ? 'بستن' : 'نمایش بیشتر'}
            </button>
          </div>
        )}

        {activeTab === 'specifications' && (
          <div>
            {specifications.map((spec, index) => (
              <div
                key={index}
                className='flex justify-between items-center p-4 border-b border-gray-200'
              >
                <div className='text-right w-1/3'>
                  <span className='font-bold'>{spec.title}</span>
                </div>
                <div className='text-center w-2/3'>
                  <span>{spec.details}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'ReviewSection' && <ReviewSection />}
        {activeTab === 'QuestionAndAnswer' && <QnASection />}
      </div>
    </div>
  );
};

export default ProductDetails;
