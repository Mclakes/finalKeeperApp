import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright: Bankole Olalekan ⓒ {year}</p>
      <p>under the tutor of Angela Yu</p>
    </footer>
  );
}

export default Footer;
