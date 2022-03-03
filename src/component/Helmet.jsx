import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Helmet = (props) => {
  document.title = "4Worm - " + props.title;
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return <div>{props.children}</div>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
