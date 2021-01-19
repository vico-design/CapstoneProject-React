import React, { useContext, useState } from "react";
import Photos from "../components/Photos";
import { Context } from "../Context";
import Pagination from "../components/Pagination";

function Home() {
  const [userInput, setUserInput] = useState("");
  const [userInputNumber, setUserInputNumber] = useState("");

  const { allPhotos, requestConfig, setRequestConfig } = useContext(Context);

  function changePage(action) {
    const newPage =
      action === "next" ? requestConfig.page + 1 : requestConfig.page - 1;
    setRequestConfig({ ...requestConfig, page: newPage });
  }
  return (
    <main className="home-container">
      <div className="input-container">
        <input
          placeholder="Write a theme"
          type="text"
          onChange={(e) => setUserInput(e.currentTarget.value)}
        />
        <input
          placeholder="Write a number"
          max={50}
          type="number"
          onChange={(e) => setUserInputNumber(e.currentTarget.value)}
        />
        <button
          className="button-hover"
          disabled={!userInput.length}
          onClick={() =>
            setRequestConfig({
              page: 1,
              query: userInput,
              per_page: userInputNumber,
            })
          }
        >
          Search
        </button>
      </div>
      <Photos photos={allPhotos} />
      {allPhotos.length !== 0 && <Pagination changePage={changePage} />}
    </main>
  );
}

export default Home;
