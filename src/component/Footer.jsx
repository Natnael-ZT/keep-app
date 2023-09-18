import React from "react";
import ReactDOM from "react-dom";
// import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>Copy Right {currentYear}</p>
      </footer>
    </div>
  );
}

export default Footer;
