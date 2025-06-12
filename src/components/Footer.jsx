import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="text-center text-xs text-gray-500 space-y-3 py-8 border-t bg-white">
    {/* Footer Links */}
    <div className="space-x-4 flex flex-wrap justify-center gap-2">
      {/* <Link to="/support">Support</Link> */}
      <Link to="/terms">Terms Of Use</Link>
      <Link to="/privacy">Privacy Policy</Link>
      {/* <Link to="/cookies">Cookies</Link> */}
      {/* <Link to="/privacy-choices">Your Privacy Choices</Link> */}
      {/* <Link to="/careers">Careers</Link> */}
      {/* <Link to="/advertising">Advertising</Link> */}
    </div>

    {/* Copyright */}
    <p>
      ©2025 Universaltickestss, LLC. All rights reserved.
      AutRova.com and the Carrentals logo are registered trademarks of Universaltickestss, LLC.
    </p>

    {/* Logo
    <div className="pt-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Expedia_Group_logo.svg/2560px-Expedia_Group_logo.svg.png"
        alt="Expedia Group"
        className="h-5 mx-auto"
      />
    </div> */}
  </footer>
);

export default Footer;
