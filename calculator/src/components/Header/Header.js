import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header custom-scroll">
      <p className="header_result">{props.result ? props.result : "0"}</p>
      <div className="header_expression custom-scroll">
        <p>{props.expression ? props.expression : "0"}</p>
      </div>
    </div>
  );
};

export default Header;
