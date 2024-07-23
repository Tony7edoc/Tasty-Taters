import React from "react";
import heartImg from '../../assets/img/heart.png'
import { useDispatch } from "react-redux";
import { addCart, decreaseCart, increaseCart } from "../../reducks/carts/operations";
import cartImage from '../../assets/img/add-to-cart.png'

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
    <div class="item">
      <div class="item-image">
        <img src={item.image} alt="item" />
      </div>
      <div class="like-count">
        <img src={heartImg} alt="like" />
        <p>(55)</p>
      </div>
      <div class="item-name">
        <p>{item.name}</p>
      </div>
      <div class="item-reviews">
        <a onClick={() => clickWriteReviw()}>write review</a>
        <a onClick={() => checkReview()}>check review</a>
      </div>
      <div class="item-price">
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
