import React from "react";
import Slider from "../component/Slider";

import slide from "../assets/fake-data/slider";
import Helmet from "../component/Helmet";
import Checkinout from "../component/Checkinout";
import Services from "../component/Services";
import FeaturedRooms from "../component/FeaturedRooms";
const Home = () => {
  return (
    <Helmet title="Trang Chủ">
      <Slider data={slide} control={true} auto={true} timeOut={5000} />
      <Checkinout />
      <Services />
      <FeaturedRooms />
    </Helmet>
  );
};

export default Home;
