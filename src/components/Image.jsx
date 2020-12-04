import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../Context";
import useHover from "../hooks/useHover";

function Image({ photo, className }) {
  const [hovered, ref] = useHover();
  const {
    addToCart,
    cartItems,
    removeFromCart,
    favoritePhotos,
    addToFavorite,
    removeFromFav,
  } = useContext(Context);
  /* OLD VERSION
  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => togglefavorite(img.id)}
        ></i>
      );
    }
  } */

  function heartIcon() {
    const alreadyInFav = favoritePhotos.some((item) => item.id === photo.id);

    if (alreadyInFav) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => removeFromFav(photo.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => addToFavorite(photo)}
        ></i>
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === photo.id);
    if (alreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(photo.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(photo)}
        ></i>
      );
    }
  }

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img src={photo.src.tiny} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.shape({
      tiny: PropTypes.string,
    }).isRequired,
  }),
};

export default Image;
