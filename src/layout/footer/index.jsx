import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="Container">
        <p>
          © 2023-2024 That is just normal footer side | Nothing much{" "}
          <Link to={"/"}>
            <strong>Home</strong>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
