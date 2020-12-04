import React, { useContext } from "react";

import Image from "../components/Image";
import { Context } from "../Context";
import { getClass } from "../utils";

function Photos() {
  const { allPhotos } = useContext(Context);

  const imageElements =
    allPhotos &&
    allPhotos.length &&
    allPhotos.map((photo, i) => (
      <Image key={photo.id} photo={photo} className={getClass(i)} />
    ));

  return (
    <main className="photos">
      {allPhotos && allPhotos.length && imageElements}
    </main>
  );
}

export default Photos;
