import React, { useState, useEffect } from "react";
import { createClient } from "pexels";

const Context = React.createContext();

const client = createClient(
  "563492ad6f91700001000001068dd1d344c748c18d09a44c6b2b840e"
);
const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const query = "Nature";

  useEffect(() => {
    client.photos.search({ query, per_page: 20 }).then((res) => {
      setAllPhotos(res.photos);
    });
  }, []);
  // All requests made with the client will be authenticated

  /* const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []); */

  /*  I AM NOT USING THIS FUNCTION ANYMORE 
    function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setAllPhotos(updatedArr);
  } */

  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCartItems([]);
  }
  function addToFavorite(newPhoto) {
    setFavoritePhotos((prevPhotos) => [...prevPhotos, newPhoto]);
  }

  function removeFromFav(id) {
    setFavoritePhotos((prevPhotos) =>
      prevPhotos.filter((photo) => photo.id !== id)
    );
  }
  return (
    <Context.Provider
      value={{
        allPhotos,
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart,
        favoritePhotos,
        addToFavorite,
        removeFromFav,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
