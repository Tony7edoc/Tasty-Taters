import React, { useEffect, useState } from 'react'
import closeIcon from '../../assets/img/close-icon.png'
import API from '../../API'
import goodImg from '../../assets/img/good.png';

const api = new API();

const Reviews = ({selectedItemId,setSelectedItemId,setShowReviews}) => {

    
    const [reviews,setReviews] = useState([])

    useEffect(() => {
        api.getReviews(selectedItemId)
        .then((reviews) => {
            setSelectedItemId(null);
            setReviews(reviews)
        })
    })

    const getLikeCount = (like_count) => {
        switch(like_count) {
            case 1:
                return goodImg;
            case 2:
                return goodImg;
            case 3:
                return goodImg;
            default:
                return goodImg
        }
    }



  return (
    <div class="overlay">
    <div class="review-box">
      <div class="close">
        <img src={closeIcon} alt="close"  onClick={() => setShowReviews(false)}/>
      </div>
      <div class="write-review">
        <h2>Reviews for "Amenrican Food"</h2>
      </div>
      <ul >
        {
            reviews && reviews.length > 0 && reviews.map((review) => (
                <li>
                    <img src={getLikeCount(review.like_count)} alt="" />
                    <div>{review.name}</div>
                    <div>{review.body}</div>
                </li>
            ))
        }
      </ul>
    </div>
  </div>
  )
}

export default Reviews