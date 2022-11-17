import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <h2>-AYN-</h2>
      <p>&copy; All Rights Reserved {year}</p>
    </footer>
  );
}

export default Footer;
