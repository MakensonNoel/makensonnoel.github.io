"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import MakImg from "../assets/logo.svg";

// Tailwind CSS classes as constants
const navBarStyle =
  "flex justify-between items-center w-full h-full px-2 2xl:px-16";
const fixedNavBarStyle = "fixed w-full h-41px z-[100]";
const scrolledNavBarStyle =
  "fixed w-full h-41px shadow-xl z-[100] ease-in-out duration-300";
const hiddenMobileMenuStyle = "md:hidden";
const mobileMenuOverlayStyle =
  "md:hidden fixed left-0 top-0 w-full h-screen bg-inherit";
const mobileMenuContainerStyle =
  "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-amber-300 p-10 ease-in duration-500";
const closeButtonStyle =
  "rounded-full shadow-lg shadow-neutral-950 p-3 cursor-pointer";
const navLinkStyle = "ml-10 text-sm uppercase hover:border-b";
const socialIconContainerStyle =
  "rounded-full shadow-lg shadow-neutral-950 p-3 cursor-pointer hover:scale-105 ease-in duration-300";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("bg-current");
  const [linkColor, setLinkColor] = useState("bg-current");
  const size = 50;

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow ? `${fixedNavBarStyle} ${scrolledNavBarStyle}` : fixedNavBarStyle
      }
    >
      <div className={navBarStyle}>
        <Link legacyBehavior href="/">
          <a>
            <Image
              src={MakImg}
              alt="/"
              width={size}
              height={size}
              className="cursor-pointer"
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className={`hidden md:flex`}>
            <li className={navLinkStyle}>
              <Link legacyBehavior href="/">
                Home
              </Link>
            </li>
            <li className={navLinkStyle}>
              <Link legacyBehavior href="/#about">
                About
              </Link>
            </li>
            <li className={navLinkStyle}>
              <Link legacyBehavior href="/#skills">
                Skills
              </Link>
            </li>
            <li className={navLinkStyle}>
              <Link legacyBehavior href="/#projects">
                Projects
              </Link>
            </li>
            <li className={navLinkStyle}>
              <Link
                legacyBehavior
                href="https://www.linkedin.com/in/makensonnoel/"
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className={hiddenMobileMenuStyle}
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className={nav ? mobileMenuOverlayStyle : ""}>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? mobileMenuContainerStyle
              : `fixed left-[-100%] top-0 p-10 ease-in duration-500`
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link legacyBehavior href="/">
                <a>
                  <Image src={MakImg} width={size} height={size} alt="/" />
                </a>
              </Link>
              <div onClick={handleNav} className={closeButtonStyle}>
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b shadow-neutral-950 my-4">
              <p className="w-[100%] md:w-[100%] py-4"></p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link legacyBehavior href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link legacyBehavior href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link legacyBehavior href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link legacyBehavior href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link
                legacyBehavior
                href="https://www.linkedin.com/in/makensonnoel/"
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest">Let&#39;s Connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/makensonnoel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={socialIconContainerStyle}>
                    <FaLinkedinIn />
                  </div>
                </a>

                <a
                  href="https://github.com/makensonn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={socialIconContainerStyle}>
                    <FaGithub />
                  </div>
                </a>

                <a href="/#about" rel="noreferrer">
                  <div className={socialIconContainerStyle}>
                    <BsFillPersonLinesFill />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
