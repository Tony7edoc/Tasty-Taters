import React, { useCallback, useEffect, useRef, useState } from "react";
import { getItems } from "../reducks/items/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../reducks/items/operations";
import Header from "../components/Common/Header";
import Item from "../components/Common/Item";
import { getCarts, getSubtotal } from "../reducks/carts/selectors";
import { fetchFromLocalStorage } from "../reducks/carts/operations";
import WriteReview from "../components/Common/WriteReview";
import Reviews from "../components/Common/Reviews";

const Home = () => {
  const [showCartList, setShowCartList] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState();
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const items = getItems(selector);
  const carts = getCarts(selector);
  console.log(carts);
  const subtotal = getSubtotal(selector);

  useEffect(() => {
    dispatch(fetchFromLocalStorage());
    dispatch(fetchItems());
  }, []);

  const showItem = (item) => {
    let selected_count = 0;
    if (carts[item.id] && carts[item.id].selected_count) {
      selected_count = carts[item.id].selected_count;
    }

    if (showCartList && carts[item.id] == undefined) {
      return;
    }

    return (
      <div className="item">
        <Item
          key={item.id}
          item={item}
          selected_count={selected_count}
          setShowWriteReview={setShowWriteReview}
          setSelectedItemId={setSelectedItemId}
          setShowReviews={setShowReviews}
        />
      </div>
    );
  };

  return (
    <>
      <Header />
      <div>
        {showCartList ? (
          <div>
            <h1>Selected Items</h1>
            <p>Please show it to waiter</p>
          </div>
        ) : (
          <main>
            <div class="navigation">
              <h2>Our Most Popular Recepies</h2>
              <p>
                Try our Most Delicious food and it usually takes minutes to
                deliver
              </p>
              <div class="hotlinks">
                <a>All</a>
                <a>HOT</a>
                <a>COLD</a>
                <a>BAGEL</a>
              </div>
            </div>
            <div className="items-grid">
              {items.map((item) => showItem(item))}
            </div>
          </main>
        )}

        {showWriteReview && (
          <div className="overlay">
            <WriteReview
              selectedItemId={selectedItemId}
              setSelectedItemId={setSelectedItemId}
              setShowWriteReview={setShowWriteReview}
            />
          </div>
        )}

        {showReviews && (
          <div className="overlay">
            <Reviews
              selectedItemId={selectedItemId}
              setSelectedItemId={setSelectedItemId}
              setShowReviews={setShowReviews}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
