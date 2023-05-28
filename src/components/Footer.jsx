import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} |         Created with ❤️ by Neeraj Khanduri</p>
      <p></p>
    </footer>
  );
}

export default Footer;
