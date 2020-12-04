import React, { useContext } from "react";
import Photos from "../components/Photos";
import { Context } from "../Context";

function Home() {
  const { allPhotos } = useContext(Context);
  return (
    <main className="home-container">
      <Photos photos={allPhotos} />
    </main>
  );
}

export default Home;
