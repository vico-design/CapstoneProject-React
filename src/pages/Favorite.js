import React, { useContext } from "react";
import { Context } from "../Context";
import FavItem from "../components/FavItem";

function Favorite() {
  const { favoriteItems } = useContext(Context);

  const favItemElements = favoriteItems.map((item) => (
    <FavItem key={item.id} item={item} />
  ));

  return (
    <div className="cart-page">
      <h1>MY LIST</h1>
      {favoriteItems.length === 0 ? (
        <p>Add items to your list and share them with whoever you like. </p>
      ) : null}

      {favItemElements}
    </div>
  );
}

export default Favorite;
