import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-neutral text-neutral-content">
      <footer className="footer sm:footer-horizontal container mx-auto px-5 lg:p-12">
      <ul>
        <h6 className="footer-title">terms and conditions</h6>
        <li className="flex items-center gap-2 link link-hover">Branding</li>
        <li className="flex items-center gap-2 link link-hover">Design</li>
        <li className="flex items-center gap-2 link link-hover">Marketing</li>
        <li className="flex items-center gap-2 link link-hover">
          Advertisement
        </li>
      </ul>
      <ul>
        <h6 className="footer-title">privacy policy</h6>
        <li className="flex items-center gap-2 link link-hover">About us</li>
        <li className="flex items-center gap-2 link link-hover">Contact</li>
        <li className="flex items-center gap-2 link link-hover">Jobs</li>
        <li className="flex items-center gap-2 link link-hover">Press kit</li>
      </ul>
      <ul>
        <h6 className="footer-title">social media accounts</h6>
        <li className="flex items-center gap-2 link link-hover">
          {" "}
          <FaFacebook /> facebook{" "}
        </li>
        <li className="flex items-center gap-2 link link-hover">
          {" "}
          <FaXTwitter /> Twitter
        </li>
        <li className="flex items-center gap-2 link link-hover">
          {" "}
          <FaInstagram /> Instagram
        </li>
      </ul>
    </footer></div>
  );
};

export default Footer;
