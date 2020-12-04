import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../Context";

function Header() {
  const { cartItems } = useContext(Context);
  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";
  return (
    <header>
      <Link to="/">
        <h2>Pic some</h2>
      </Link>
      <Link to="/cart">
        <i className={`${cartClassName} ri-fw ri-2x`}></i>
      </Link>
      <Link to="/favorite">
        <i className="ri-heart-line fav-page"></i>
      </Link>
    </header>
  );
}

export default Header;
