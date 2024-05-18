import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black h-auto w-full text-white px-72 my-12 py-12">
      <h1 className="text-2xl">Because water should be free</h1>
      <div className="w-1/2 py-4">
        <span className="text-wrap my-5 py-4">
          Help us spread the word and share our movement with your friends and
          family
        </span>
      </div>
      <span className="p-2 border bg-cyan-300 hover:bg-cyan-500 w-36 text-xl rounded-lg">
        <Link to="/contact-us">Contact Us {">"}</Link>
      </span>
      <div className="flex w-full">
        <div className="py-4 my-4 mx-4 text-lg">
          <ul>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
            <li>
              <Link to="">Project</Link>
            </li>
            <li>
              <Link to="">Shop Apparel</Link>
            </li>
          </ul>
        </div>
        <div className="py-4 mx-8 my-4 text-lg">
          <ul>
            <li>
              <Link to="/advertise">Order FreeWater Bottles </Link>
            </li>
            <li>
              <Link to="/advertise">Order FreeWater Boxes</Link>
            </li>
          </ul>
        </div>
        <div className="py-4 my-4  text-lg ml-40">
          <div className="grid grid-cols-4 gap-4">
            <Link to="">
              <img alt="ticktok" src="./social/tik.webp" />
            </Link>
            <Link to="">
              <img alt="insta" src="./social/insta.webp" />
            </Link>
            <Link to="">
              <img alt="facebook" src="./social/fb.webp" />
            </Link>
            <Link to="">
              <img alt="twitter" src="./social/twit.webp" />
            </Link>
            <Link to="">
              <img alt="youtube" src="./social/youtube.webp" />
            </Link>
            <Link to="">
              <img alt="discord" src="./social/discord.webp" />
            </Link>
            <Link to="">
              <img alt="reddit" src="./social/redd.webp" />
            </Link>
            <Link to="">
              <img alt="linkedin" src="./social/linkedin.webp" />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-2 text-center text-sm">
        <span>© 2024 Copyright FreeWater All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
