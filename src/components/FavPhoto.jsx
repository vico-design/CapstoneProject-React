import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

function FavPhoto({ photo }) {
  const [hovered, ref] = useHover();
  const { removeFromFav } = useContext(Context);

  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={iconClassName}
        onClick={() => removeFromFav(photo.id)}
        ref={ref}
      ></i>

      <img src={photo.src.tiny} width="130px" />
      {/* <p>$5.99</p> */}
    </div>
  );
}

FavPhoto.propTypes = {
  photo: PropTypes.shape({
    src: PropTypes.shape({
      tiny: PropTypes.string,
    }).isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default FavPhoto;
