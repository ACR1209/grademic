import React, { useState } from 'react';

interface StarRatingProps {
  totalStars: number;
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars, rating, setRating }) => {
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  return (
    <>
      <div className="flex w-full space-x-3">
        {[...Array(totalStars)].map((_, index) => (
          <button
            key={index}
            type='button'
            onClick={() => handleStarClick(index + 1)}
            onMouseEnter={() => setHoveredRating(index + 1)}
            onMouseLeave={() => setHoveredRating(0)}
            className={`text-5xl mt-0 cursor-pointer focus:outline-none transition duration-300 ${
              index + 1 <= (hoveredRating || rating) ? 'text-yellow-500' : 'text-gray-300'
            }`}
          >
            ★
          </button>
        ))}
      </div>
    </>
  );
};

export default StarRating;
