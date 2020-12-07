import React, { useContext } from "react";

import { Context } from "../Context";

function Pagination({ changePage }) {
  const { paginationReleted } = useContext(Context);
  const { currentPage, perPage, totalResults } = paginationReleted;
  return (
    <div className="pagination-container">
      {currentPage !== 1 && (
        <button className="button-hover" onClick={() => changePage("previous")}>
          Previous
        </button>
      )}
      {currentPage !== 1 && <button disabled>{currentPage - 1}</button>}
      <button disabled className="current-page">
        {currentPage}
      </button>
      <button disabled>{currentPage + 1}</button>
      <p>...{Math.floor(totalResults / perPage - currentPage)}</p>
      <button className="button-hover" onClick={() => changePage("next")}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
