import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../assets/image/images/room-1.jpeg";
import PropTypes from "prop-types";
import numberWithCommas from "../utils/numberWithCommas";
import Button from "./Button";

const Room = ({ room }) => {
  const { name, slug, images, price } = room;
  // console.log(room);
  return (
    <div className="room">
      <div className="room__ctn">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="room__ctn__price">
          <h6>{numberWithCommas(price)}đ / phòng</h6>
          {/* <p>per night</p> */}
        </div>
        <Link to={`/seeroom/${slug}`} className=" room__ctn__link">
          <Button>xem phòng</Button>
        </Link>
      </div>
      <p className="room__info">{name}</p>
    </div>
  );
};
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
export default Room;
