import React from "react";
import Grid from "./Grid";
import Title from "./Title";
import img1 from "../assets/image/services/1.jpg";
import img2 from "../assets/image/services/2.jpg";
import img3 from "../assets/image/services/3.jpg";
import img4 from "../assets/image/services/4.jpg";
import numberWithCommas from "../utils/numberWithCommas";
import { Link } from "react-router-dom";

const services = [
  {
    image: img1,
    price: "150000đ",
    title: "Giặt ủi",
  },
  {
    image: img2,
    price: "260000đ",
    title: "Thuê Xe",
  },
  {
    image: img3,
    price: "500000đ",
    title: "Giải Trí",
  },
  {
    image: img4,
    price: "300000đ",
    title: "Massage",
  },
];
const Services = () => {
  return (
    <div>
      <div className="section__title__one">
        <h4>Dịch vụ</h4>
        <div />
      </div>
      <Grid col={4} mdCol={2} smCol={1} gap={50}>
        {services.map((item, index) => (
          <div key={index} className="services">
            <div className="services__image">
              <img src={item.image} alt="" />
            </div>
            <h4>{item.title}</h4>
            <div>{numberWithCommas(item.price)}</div>
            <Link to="/">
              <p className="services__see">Xem Thêm</p>
            </Link>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default Services;
