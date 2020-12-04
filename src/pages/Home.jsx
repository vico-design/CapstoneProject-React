import React, { useContext, useState } from "react";
import Photos from "../components/Photos";
import { Context } from "../Context";

function Home() {
  const [userInput, setUserInput] = useState("");

  const { allPhotos, setQuery } = useContext(Context);
  console.log(userInput);
  return (
    <main className="home-container">
      <div>
        <input
          type="text"
          onChange={(e) => setUserInput(e.currentTarget.value)}
        />
        <button
          disabled={!userInput.length}
          onClick={() => setQuery(userInput)}
        >
          Search
        </button>
      </div>
      <Photos photos={allPhotos} />
    </main>
  );
}

export default Home;
