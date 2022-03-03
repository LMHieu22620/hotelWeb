import React from "react";
import { Link } from "react-router-dom";

import logo1 from "../assets/image/Logo1.png";
import Grid from "./Grid";
const seriver = [
  {
    display: "Thuê Xe",
    path: "/about",
  },
  {
    display: "Xe Máy",
    path: "/about",
  },
  {
    display: "Massage",
    path: "/about",
  },
  {
    display: "Giải Trí",
    path: "/about",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={50}>
          <div>
            <div className="footer__title">Vị Trí</div>
            <div className="footer__content">
              <iframe
                className="footer__content__map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1918.639518081597!2d108.24341567086944!3d15.894445857398802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420f8f3ac16f5b%3A0x7236ae2df891adb7!2zMzMgTmd1eeG7hW4gUGhhbiBWaW5oLCBUVC4gVsSpbmggxJBp4buHbiwgxJBp4buHbiBCw6BuLCBRdeG6o25nIE5hbSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1642815993988!5m2!1svi!2s"
                // allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div>
            <div className="footer__title">Dịch Vụ</div>
            <div className="footer__content ">
              {seriver.map((item, index) => (
                <p key={index}>
                  <Link className="content__hover" to={item.path}>
                    {" "}
                    {item.display}{" "}
                  </Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Về Chúng Tôi</div>
            <div className="footer__content">
              <p>
                <span>Địa chỉ: </span>
                33 Nguyễn Phan Vinh, Vĩnh Điện , Điện Bàn , Quảng Nam
              </p>
              <p>
                <span>Điện Thoại: </span>012345678
              </p>
              <p>
                <span>E-mail: </span> minhhieu@gmail.com
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">khách sạn 4worm</div>
            <div className="footer__content">
              <img src={logo1} alt="" />
              Nhận tin mới nhất từ 4Worm
            </div>
          </div>
        </Grid>
        <div className="footer__bottom">
          <span className="footer__bottom__content">
            Copyright © 4Worm 2020 All Rights Reserved - design by
          </span>
          <p className="content__hover"> Minh Hieu</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
