import React, { useContext } from "react";
import { Context } from "../Context";
import FavPhoto from "../components/FavPhoto";

function Favorite() {
  const { favoritePhotos } = useContext(Context);

  const favPhotoElements = favoritePhotos.map((photo) => (
    <FavPhoto key={photo.id} photo={photo} />
  ));

  return (
    <div className="cart-page">
      <h1>MY LIST</h1>
      {favoritePhotos.length === 0 ? (
        <p>Add photos to your list and share them with whoever you like. </p>
      ) : null}

      {favPhotoElements}
    </div>
  );
}

export default Favorite;
