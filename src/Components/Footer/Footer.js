import React from "react";
import {
  LinkedIn,
  Facebook,
  Twitter,
  WhatsApp,
  Instagram,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="text-white bg-black ">
      <div className="grid grid-cols-1 gap-8 px-4 py-8 mx-auto max-w-7xl md:grid-cols-4">
        <div>
          <h2 className="mb-4 text-xl font-bold text-teal-500">About UHP</h2>
          <p>
            Receive personalized advice from experienced counselors and
            Comprehensive Application Resources you need university application
            with confidence.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold text-teal-500">Academics</h2>
          <ul className="space-y-2">
            <li>Universities</li>
            <li>Admissions</li>
            <li>Categories</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold text-teal-500">Universities</h2>
          <ul className="space-y-2">
            <li>About</li>
            <li>Departments</li>
            <li>Programs</li>
            <li>How to Apply</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold text-teal-500 ">Contact Us</h2>
          <ul className="space-y-2">
            <li>📞 051-123-4567</li>
            <li className="">✉️ demo@gmail.com</li>
            <li>📍 Willowbrook Park - Greenwood</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between p-4 px-4 pt-6 mx-auto mt-8 text-white bg-teal-500 border-t max-w-7xl md:flex-row">
        <p className="">UHP 2024. All Rights Reserved.</p>
        <div className="flex mt-4 space-x-4 md:mt-0">
          <LinkedIn className="text-white cursor-pointer hover:text-yellow-500" />
          <Facebook className="text-white cursor-pointer hover:text-yellow-500" />
          <Twitter className="text-white cursor-pointer hover:text-yellow-500" />
          <WhatsApp className="text-white cursor-pointer hover:text-yellow-500" />
          <Instagram className="text-white cursor-pointer hover:text-yellow-500" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
