import React, { useEffect, useState } from 'react';
import closeIcon from '../../assets/img/close-icon.png';
import API from '../../API';


const api = new API();

const Reviews = ({ selectedItemId, setSelectedItemId, setShowReviews }) => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

    useEffect(() => {
        if (selectedItemId !== null) {
            api.getReviews(selectedItemId)
                .then((reviews) => {
                    setSelectedItemId(null);
                    setReviews(reviews);
                })
                .catch((error) => {
                    console.error('Failed to fetch reviews:', error);
                });
        }
    }, [selectedItemId]); // Add selectedItemId as a dependency

   

    return (
        <div className="overlay">
            <div className="review-box">
                <div className="close">
                    <img src={closeIcon} alt="close" onClick={() => setShowReviews(false)} />
                </div>
                <div className="write-review">
                    <h2>Reviews for "American Food"</h2>
                </div>
                <ol>
                    {reviews && reviews.length > 0 && reviews.map((review) => (
                        <li key={review.id}>
                            <p> Likes: {review.like_count}</p>
                            <div>{review.name}</div>
                            <div>{review.body}</div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Reviews;
