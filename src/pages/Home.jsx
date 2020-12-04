import React, { useContext, useState } from "react";
import Photos from "../components/Photos";
import { Context } from "../Context";

function Home() {
  const [userInput, setUserInput] = useState("");
  const [userInputNumber, setUserInputNumber] = useState("");

  const { allPhotos, setConfig } = useContext(Context);
  console.log(userInput);

  return (
    <main className="home-container">
      <div>
        <input
          type="text"
          onChange={(e) => setUserInput(e.currentTarget.value)}
        />
        <input
          max={50}
          type="number"
          onChange={(e) => setUserInputNumber(e.currentTarget.value)}
        />
        <button
          disabled={!userInput.length}
          onClick={() =>
            setConfig({ query: userInput, per_page: userInputNumber })
          }
        >
          Search
        </button>
      </div>
      <Photos photos={allPhotos} />
    </main>
  );
}

export default Home;
