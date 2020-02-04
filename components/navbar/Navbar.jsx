import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__link" to="/home">
        Sobre mí
      </Link>
      <Link className="navbar__link" to="/ilustration">
        Ilustración y dibujo
      </Link>
      <Link className="navbar__link" to="/webdesign">
        Diseño web
      </Link>
    </div>
  );
};

export default Navbar;
