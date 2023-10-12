import React, { useMemo } from 'react';

// Components
import Icon from './Icon';

const Rating = ({ value, text, color }) => {
  const starRating = useMemo(
    (type) => {
      let stars = Array(5)
        .fill(0)
        .map((_, i) =>
          value >= i + 1 ? (
            <Icon icon="bi bi-star-fill" color={color} key={i} />
          ) : value >= i + 0.5 ? (
            <Icon icon="bi bi-star-half" color={color} key={i} />
          ) : (
            <Icon icon="bi bi-star" color={color} key={i} />
          )
        );

      return stars;
    },
    [value]
  );

  return (
    <div className="rating">
      {starRating}
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
