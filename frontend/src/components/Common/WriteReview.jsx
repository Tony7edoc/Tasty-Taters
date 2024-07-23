import React, { useEffect, useState } from "react";
import closeIcon from '../../assets/img/close-icon.png';
import reaction0 from '../../assets/img/reaction-0.svg';
import reaction1 from '../../assets/img/reaction-1.svg';
import reaction2 from '../../assets/img/reaction-2.svg';
import reaction3 from '../../assets/img/reaction-3.svg';
import API from "../../API";

const api = new API();

const WriteReview = ({ selectedItemId, setShowWriteReview }) => {
    const [likeCount, setLikeCount] = useState(1);
    const [name, setName] = useState("");
    const [body, setBody] = useState("");
    const [reviewSent, setReviewSent] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const inputName = (e) => {
        setName(e.target.value);
    };

    const inputBody = (e) => {
        setBody(e.target.value);
    };

    const sendReview = () => {
        api.writeReview(selectedItemId, name, body, likeCount)
            .then(() => {
                setReviewSent(true);
            })
            .catch(error => {
                console.error("Failed to send review:", error);
            });
    };

    const handleImageClick = (count) => {
        setLikeCount(count);
    };

    const thoughts = [
      { count: 1, img: reaction1 },
      { count: 2, img: reaction2 },
      { count: 3, img: reaction3 },
      { count: 0, img: reaction0 }
  ];


    return (
        <div className="overlay">
            <div className="review-box">
                <div className="close">
                    <img src={closeIcon} alt="close" onClick={() => setShowWriteReview(false)} />
                </div>
                <div className="write-review">
                    <h2>Write Review</h2>
                    <p>Choose your Thought</p>
                </div>
                {reviewSent ? (
                    <div className="review-success">
                        <p>Your review has been sent successfully.</p>
                    </div>
                ) : (
                    <>
                        <div className="thoughts">
                        {thoughts.map(({ count, img }) => (
                                <img
                                    key={count}
                                    src={img}
                                    alt={`thought-${count}`}
                                    onClick={() => handleImageClick(count)}
                                    style={{
                                        backgroundColor: likeCount === count ? 'red' : 'transparent',
                                        borderRadius: 20,
                                        cursor: 'pointer'
                                    }}
                                />
                            ))}
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Enter your name" value={name} onChange={inputName} />
                            <input type="text" placeholder="Enter your thought" value={body} onChange={inputBody} />
                        </div>
                        <div className="review-button">
                            <button onClick={sendReview}>Send Review</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default WriteReview;
