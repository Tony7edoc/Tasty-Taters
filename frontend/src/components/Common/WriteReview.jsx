import React, { useEffect, useState } from "react";
import closeIcon from '../../assets/img/close-icon.png'
import goodImg from '../../assets/img/good.png';

import API from "../../API";


const api = new API()

const WriteReview = ({selectedItemId,setSelectedItemId,setShowWriteReview}) => {

    const [likeCount,setLikeCount] = useState(1)
    const [name,setName] = useState("")
    const [body,setBody] = useState("");


    const inputName = (e) => {
        setName(e.target.value)
    }

    const inputBody = (e) => {
        setBody(e.target.value)
    }

    const sendReview = () => {
        api.writeReview(selectedItemId,name,body,likeCount)
        .then((review) => {
            alert("Your Review has been sent");
            setName('')
            setBody('')
            setLikeCount(1);
            setSelectedItemId(null);
            setShowWriteReview(false);
        })
    }



  return (
    <div class="overlay">
      <div class="review-box">
        <div class="close">
          <img src={closeIcon} alt="close" 
          onClick={() => setShowWriteReview(false)}
          />
        </div>
        <div class="write-review">
          <h2>Write Review</h2>
          <p>Choose your Thought</p>
        </div>
        <div class="thoughts">
            <>
            {likeCount === 1 ? (
          <img src={goodImg} alt="good" />
        ):(
            <img src={goodImg} alt="good" />
        )}
        </>
        <>
        { likeCount === 2 ? (
            <img src={goodImg} alt="very-good" />
        ): (
            <img src={goodImg} alt="very-good" />
        )}
          </>
          <>
          {likeCount === 3 ? (
            <img src={goodImg} alt="excellent" />
          ): (
            <img src={goodImg} alt="excellent" />
          )}
          </>
          <>
          {likeCount === 0 ? (
            <img src={goodImg} alt="good" />
          ): (
            <img src={goodImg} alt="good" />
          )}
          </>
          
          
        </div>
        <div class="input">
          <input type="text" placeholder="Enter your name" value={name} onChange={inputName} />
          <input type="text" placeholder="Enter your tought" value={body} onChange={inputBody}/>
        </div>
        <div class="review-button">
          <button onClick={sendReview}>Send Review</button>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
