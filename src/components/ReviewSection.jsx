'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Star } from 'lucide-react';

const ReviewSection = () => {
  const { data: session } = useSession();
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  const handleReviewSubmit = () => {
    if (newReview.trim() !== '') {
      setReviews([...reviews, { text: newReview, rating }]);
      setNewReview('');
      setRating(0);
    }
  };

  return (
    <div className='bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark shadow-md rounded-lg p-6'>
      <h2 className='text-lg font-semibold mb-4'>نظرات</h2>

      {session ? (
        <>
          <div className='flex items-center gap-2'>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer ${
                  star <= rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          <textarea
            className='w-full p-2 border rounded mt-3'
            placeholder='نظر خود را بنویسید...'
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          ></textarea>

          <button
            className='bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600'
            onClick={handleReviewSubmit}
          >
            ارسال نظر
          </button>
        </>
      ) : (
        <p className='text-red-500 mt-4'>
          لطفا برای ثبت نظر وارد حساب کاربری شوید
        </p>
      )}

      <div className='mt-4'>
        {reviews.length === 0 ? (
          <p className='text-gray-500'>
            هیچ نظری برای این محصول نوشته نشده است.
          </p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className='text-right border-b py-2'>
              {session && session.user && <strong>{session.user.name}</strong>}
              <p>{review.text}</p>
              <div className='flex items-center'>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className='text-yellow-400' />
                ))}
                {/* {[...Array(5 - review.rating)].map((_, i) => (
                  <Star key={i} className='text-gray-300' />
                ))} */}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
