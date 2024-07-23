import React, { useEffect, useState } from "react";
import { getItems } from "../reducks/items/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../reducks/items/operations";
import Header from "../components/Common/Header";
import Item from "../components/Common/Item";
import { getCarts, getSubtotal } from "../reducks/carts/selectors";
import { fetchFromLocalStorage } from "../reducks/carts/operations";
import WriteReview from "../components/Common/WriteReview";
import Reviews from "../components/Common/Reviews";
import Footer from "../components/Common/Footer";

const Home = () => {
  const [showCartList, setShowCartList] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState();
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const items = getItems(selector);
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);

  useEffect(() => {
    dispatch(fetchFromLocalStorage());
    dispatch(fetchItems(category));
  }, [dispatch, category]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const showItem = (item) => {
    let selected_count = 0;
    if (carts[item.id] && carts[item.id].selected_count) {
      selected_count = carts[item.id].selected_count;
    }

    if (showCartList && !carts[item.id]) {
      return null;
    }

    return (
      <div className="item" key={item.id}>
        <Item
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
      <main>
        {showCartList ? (
          <div>
            <h1>Selected Items</h1>
            <p>Please show it to waiter</p>
            <div className="items-grid">
              {Object.values(carts).map((cartItem) => showItem(cartItem.item))}
            </div>
          </div>
        ) : (
          <div>
            <div className="navigation">
              <h2>Our Most Popular Recipes</h2>
              <p>
                Try our Most Delicious food and it usually takes minutes to
                deliver
              </p>
              <div className="hotlinks">
                <a
                  href="#!"
                  className={category === "" ? "active" : ""}
                  onClick={() => handleCategoryChange("")}
                >
                  All
                </a>
                <a
                  href="#!"
                  className={category === "hot" ? "active" : ""}
                  onClick={() => handleCategoryChange("hot")}
                >
                  HOT
                </a>
                <a
                  href="#!"
                  className={category === "cold" ? "active" : ""}
                  onClick={() => handleCategoryChange("cold")}
                >
                  COLD
                </a>
                <a
                  href="#!"
                  className={category === "bagel" ? "active" : ""}
                  onClick={() => handleCategoryChange("bagel")}
                >
                  BAGEL
                </a>
              </div>
            </div>
            <div className="items-grid">
              {items.map((item) => showItem(item))}
            </div>
          </div>
        )}
      </main>
      <Footer
        price={subtotal}
        showCartList={showCartList}
        setShowCartList={setShowCartList}
      />
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
    </>
  );
};

export default Home;
