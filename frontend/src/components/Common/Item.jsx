import React from "react";
import heartImg from '../../assets/img/heart.png'
import { useDispatch } from "react-redux";
import { addCart, decreaseCart, increaseCart } from "../../reducks/carts/operations";
import cartImage from '../../assets/img/cart.svg'

const Item = ({item,selected_count,setShowWriteReview,setSelectedItemId,setShowReviews}) => {

  const dispatch = useDispatch();

  const clickAddCart = () => {
    dispatch(addCart(item))
  }

  const clickIncreaseCart = () => {
    dispatch(increaseCart(item))
  }

  const clickDecreaseCart = () => {
    dispatch(decreaseCart(item))
  }

  const clickWriteReviw = () => {
    setSelectedItemId(item.id)
    setShowWriteReview(true)
  }

  const checkReview = () => {
    setSelectedItemId(item.id)
    setShowReviews(true)
  }

  return (
    <div className="item">
      <div className="item-image">
        <img src={item.image} alt="item" />
      </div>
      <div className="like-count">
        <img src={heartImg} alt="like" />
        <p>{(item.total_like_count)}</p>
      </div>
      <div className="item-name">
        <p>{item.name}</p>
      </div>
      <div className="item-reviews">
        <a onClick={() => clickWriteReviw()}>write review</a>
        <a onClick={() => checkReview()}>check review</a>
      </div>
      <div className="item-price">
        {selected_count == 0 ? (
        <img src={cartImage} alt="cart"  onClick={clickAddCart}/>
      ) : (
        <div className="cart-operations">
          <span onClick={clickDecreaseCart} className="operand">-</span>
          <span>{selected_count}</span>
          <span onClick={clickIncreaseCart} className="operand">+</span>
        </div>
      )}
        <h2>{item.price}</h2>
      </div>
    </div>
  );
};

export default Item;
