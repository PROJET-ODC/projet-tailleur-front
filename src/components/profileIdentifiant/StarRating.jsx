import React, { useState } from 'react';

const StarRating = ({ onRatingChange }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (value) => {
        setRating(value);
    };

    const handleConfirm = () => {
        console.log(`Vous avez noté ${rating} étoile${rating > 1 ? 's' : ''}.`);
        onRatingChange(rating); // Appelle la fonction de changement de note passée en props
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex">
                {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                        <span
                            key={starValue}
                            className={`cursor-pointer text-3xl ${
                                starValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-400'
                            }`}
                            onClick={() => handleClick(starValue)}
                            onMouseEnter={() => setHover(starValue)}
                            onMouseLeave={() => setHover(0)}
                        >
                            ★
                        </span>
                    );
                })}
            </div>
            <p className="mt-2">
                {rating > 0 && `Vous avez sélectionné ${rating} étoile${rating > 1 ? 's' : ''}.`}
            </p>
        </div>
    );
};

export default StarRating;
