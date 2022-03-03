import React from "react";
import RoomsList from "./Roomlist";
import { Loading } from "./Loading";
import { withRoomConsumer } from "../context";
import RoomsFilter from "./RoomsFilter";
const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {/* <RoomsFilter rooms={rooms} /> */}
      <RoomsList rooms={sortedRooms} />
    </>
  );
};

export default withRoomConsumer(RoomContainer);
