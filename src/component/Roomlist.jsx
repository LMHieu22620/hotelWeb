import React from "react";
import Room from "./Room";
const Roomlist = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="roomlist-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <div className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </div>
  );
};

export default Roomlist;
