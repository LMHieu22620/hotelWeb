import React, { useEffect, useState } from "react";
import { createContext } from "react";
import items from "./assets/fake-data/data";

const RoomContext = createContext();
export const RoomProvider = (props) => {
  const [initState, setInitState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  });
  // console.log(initState.type);
  useEffect(() => {
    let rooms = formatData(items);
    // console.log(rooms);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    setInitState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }, [items]);
  const formatData = (items) => {
    let temItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      // console.log({ room });
      return room;
    });
    return temItems;
  };
  const getRoom = (slug) => {
    let temRooms = [...initState.rooms];
    const rroom = temRooms.find((room) => room.slug === slug);
    // console.log(temRooms);
    return rroom;
  };
  return (
    <RoomContext.Provider value={{ ...initState, getRoom: getRoom }}>
      {props.children}
    </RoomContext.Provider>
  );
};
const RoomConsumer = RoomContext.Consumer;
export { RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapter(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
