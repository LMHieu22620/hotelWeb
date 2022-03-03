import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import CheckBox from "./CheckBox";
import types from "../assets/fake-data/type";
const RoomsFilter = () => {
  const contextType = useContext(RoomContext);
  const { rooms } = contextType;
  console.log(rooms);
  const initstate = {};
  return (
    <div className="roomfilter">
      <div className="roomfilter__fiter">
        <div className="roomfilter__fiter__widget">
          <div className="roomfilter__fiter__widget__title">
            danh mục sản phẩm
          </div>
          <div className="roomfilter__fiter__widget__content">
            {types.map((item, index) => (
              <p
                key={index}
                className="roomfilter__fiter__widget__content__item"
              >
                <CheckBox
                  lable={item.display}
                  // onChange={(input) =>
                  //   filterSelect("CATEGORY", item, input.checked)
                  // }
                  // checked={filter.category.includes(item.categorySlug)}
                />
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsFilter;
