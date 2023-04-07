import React, {useState} from 'react'
import StarRatings from 'react-star-ratings'

export default function ArticleRating({initRating, articleId}) {
  const [rating, setRating] = useState(initRating);
  return (
    <StarRatings
        rating={rating}
        starRatedColor="blue"
        changeRating={(newRating, name)=>{
          setRating(newRating);
          alert(`Mock request to API: user rated article #${articleId} with ${newRating} stars`);
        }}
        numberOfStars={5}
        starDimension="20px"
        starSpacing="2px"
        name='rating'
    />
  );
}
