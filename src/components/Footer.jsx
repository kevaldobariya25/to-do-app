import React from "react";

function Footer(){
    const year = new Date().getFullYear();
  return (
    <footer>
      <p>Keval Dobariya ⓒ {year}</p>
    </footer>
  );
}

export default Footer;