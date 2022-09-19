import React from "react";
import "./navbar.css";
function Navbar({ brand }) {
  return (
    <nav id="nav">
      <div>
        <a href="/" className="Titulo">
          {brand}
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
