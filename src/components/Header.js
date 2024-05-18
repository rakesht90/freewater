import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mx-10 my-3 w-auto">
      <ul className="flex p-1 m-2 text-base text-slate-500 justify-center gap-9">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/advertise">Advertise</Link>
        </li>
        <li>
          <Link to="/distribute">Distribute</Link>
        </li>
        <li>
          <Link to="/">
            <img src="/logo.png" height={40} width={40} alt="freeWater" />
          </Link>
        </li>
        <li>
          <Link to="/faq">Faq</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
