import React, { useContext } from "react";
import { RoomContext } from "../context";
import Room from "./Room";
import Title from "./Title";
import { Loading } from "./Loading";
const FeaturedRooms = () => {
  const contextType = useContext(RoomContext);
  let { loading, featuredRooms: rooms } = contextType;
  rooms = rooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });
  return (
    <div className="featured">
      <Title title="Loại Phòng" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </div>
  );
};

export default FeaturedRooms;
