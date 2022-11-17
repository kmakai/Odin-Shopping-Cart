import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <h4>-AYN-</h4>
      <p>&copy; All Rights Reserved {year}</p>
    </footer>
  );
}

export default Footer;
