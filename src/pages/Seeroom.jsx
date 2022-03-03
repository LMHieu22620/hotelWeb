import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import defaultBcg from "../assets/image/images/room-1.jpeg";
import { RoomContext } from "../context";
import Button from "../component/Button";
import Banner from "../component/Banner";
import StyleSeeroom from "../component/StyleSeeroom";
import numberWithCommas from "../utils/numberWithCommas";
const Seeroom = (props) => {
  console.log(props);

  const [slug, setSlug] = useState({
    slug: props.match.params.slug,
    defaultBcg,
  });
  const contextType = useContext(RoomContext);
  const { getRoom } = contextType;
  const room = getRoom(slug.slug);
  console.log(getRoom(slug.slug));
  if (!room) {
    return (
      <div className="error">
        <h3>No Sush Room Could Be Found...</h3>
        <Link to="/seeroom">
          <Button>Back to rooms</Button>
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [main, ...defaultImages] = images;
  // console.log(defaultImages);
  return (
    <>
      <StyleSeeroom img={images[0] || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/seeroom">
            <Button>back to rooms</Button>
          </Link>
        </Banner>
      </StyleSeeroom>
      <div className="seeroom">
        <div className="seeroom__img">
          {defaultImages.map((item, index) => (
            <img key={index} src={item} alt={name} />
          ))}
        </div>
        <div className="seeroom__info">
          <div className="seeroom__info__detail">
            <h3>Chi Tiết</h3>
            <p>{description}</p>
          </div>
          <div className="seeroom__info__info">
            <h3>Thông Tin</h3>
            <h6>giá: {numberWithCommas(price)}</h6>
            <h6> kích cỡ: {size}</h6>
            <h6> số người: {capacity} người</h6>
            <h6>{pets ? "pets allowed" : "no pet allowed"} </h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </div>
          <div className="seeroom__info__extras">
            <h6>Mô tả</h6>
            <ul className="seeroom__info__extras__item">
              {extras.map((item, index) => (
                <li key={index}>-{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seeroom;
