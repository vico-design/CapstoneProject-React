import React, { useState, useEffect } from "react";
import { createClient } from "pexels";

const Context = React.createContext();

const client = createClient(
  "563492ad6f91700001000001068dd1d344c748c18d09a44c6b2b840e"
);
const ContextProvider = ({ children }) => {
  const [query, setQuery] = useState("Nature");

  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  useEffect(() => {
    client.photos.search({ query, per_page: 40 }).then((res) => {
      setAllPhotos(res.photos);
    });
  }, [query]);

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
        setQuery,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
