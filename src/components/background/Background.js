import React from "react";
import "./background.css";
import stars from "../../assets/stars.svg";
import rocketman from "../../assets/rocketman.svg";
import { Link } from "react-router-dom";

function Background() {
  return (
    <div className="background">
      <div className="stars">
        <img src={stars} alt="/" />
      </div>
      <div className="components">
        <div className="title">Welcome Rocketeer!</div>
        <Link to="/firstPage" style={{ "text-decoration": "none" }}>
          <div className="start">Start Questionarie</div>
        </Link>
        <div className="submited">
          <a href="#" className="sub">
            Submited Applications
          </a>
        </div>
        <div>
          <img className="rocket" src={rocketman} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Background;
