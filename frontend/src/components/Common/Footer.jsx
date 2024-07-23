import React from "react";
import ImgLogo from "../../assets/img/logo.png";

const Footer = ({ price, showCartList, setShowCartList }) => {
  return (
    <>
      <footer>
        <div className="subtotal">
          <span className="subtotal-test">Subtotal:</span>
          <span className="subtotal-price">${price}</span>
        </div>
        {showCartList ? (
          <button className="link-button" onClick={() => setShowCartList(false)}>
           Go back to Home
          </button>
        ) : (
          <button onClick={() => setShowCartList(true)}>
            Check selected Items
          </button>
        )}
      </footer>
      <section className="bottom-footer">
        <img src={ImgLogo} alt="logo" />
        <p>Premium Quality food at the best and most affordable price.</p>
        <p>we have a new offer every day for 365 days</p>
        <span className="contact">Contact</span> <br />
        <span className="email">
          E-mail : quickfood@tastytaters.com | Hotline: +1 131 138 138
        </span>
        <div className="copyright">
          <p></p>
        </div>
      </section>
    </>
  );
};

export default Footer;
