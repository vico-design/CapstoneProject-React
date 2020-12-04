import React, { useState, useEffect } from "react";
import { createClient } from "pexels";

const Context = React.createContext();

const client = createClient(
  "563492ad6f91700001000001068dd1d344c748c18d09a44c6b2b840e"
);
const ContextProvider = ({ children }) => {
  const [config, setConfig] = useState({ query: "Nature", per_page: 40 });

  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  useEffect(() => {
    client.photos.search(config).then((res) => {
      setAllPhotos(res.photos);
    });
  }, [config]);

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
        setConfig,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
