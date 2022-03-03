import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/image/Logo1.png";
const menuHeader = [
  {
    display: "Trang Chủ",
    path: "/",
  },
  {
    display: "Xem Phòng",
    path: "/seeroom",
  },
  {
    display: "Tuyển Dụng",
    path: "/recruitment",
  },
  {
    display: "Tin Tức",
    path: "/news",
  },
  {
    display: "Liên Hệ",
    path: "/contactus",
  },
];
const Header = () => {
  // console.log(pathname);
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const topRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        headerRef.current.classList.add("shrink");
        topRef.current.classList.add("cloes");
      } else {
        headerRef.current.classList.remove("shrink");
        topRef.current.classList.remove("cloes");
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  const menuToggle = () => menuRef.current.classList.toggle("active");

  const activeNav = menuHeader.findIndex((e) => e.path === pathname);

  return (
    <div className="header" ref={headerRef}>
      <div className="header__top" ref={topRef}>
        <div className="container header__top__ctn">
          <div className="header__top__left">
            <i className="bx bxs-home-heart"></i>
            <span> 33 Nguyễn Phan Vinh, Vĩnh Điện , Điện Bàn , Quảng Nam </span>
          </div>
          <div className="header__top__right">
            <span className="header__top__right__icon1">
              <i className="bx bxl-instagram"></i>
            </span>
            <span className="header__top__right__icon2">
              <i className="bx bxl-youtube"></i>
            </span>
            <span className="header__top__right__icon3">
              <i className="bx bxl-facebook"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="container header__mid__ctn">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div
          className="header__menu__mobile__toggle"
          ref={menuRef}
          onClick={menuToggle}
        >
          <i className="bx bx-menu-alt-left"></i>
        </div>
        <div className="header__menu" ref={menuRef}>
          <div className="header__menu__close" onClick={menuToggle}>
            <i className="bx bx-chevron-left"></i>
          </div>
          {menuHeader.map((item, index) => (
            <div
              key={index}
              onClick={menuToggle}
              className={`header__menu__item header__menu__item__${
                index === activeNav ? "active" : ""
              }`}
            >
              <Link to={item.path} key={index}>
                <span>{item.display}</span>
              </Link>
            </div>
          ))}
          <div className="header__accout">
            <div className="header__accout__item">
              <i className="bx bx-user"></i>
              <Link to="/dangnhap">Đăng Nhập</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
