import React, { useContext } from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import { getClass } from "../utils";

function Photos({ photos }) {
  const imageElements =
    photos &&
    photos.length &&
    photos.map((photo, i) => (
      <Image key={photo.id} photo={photo} className={getClass(i)} />
    ));

  return (
    <main className="photos">{photos && photos.length && imageElements}</main>
  );
}

Photos.PropTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default Photos;
