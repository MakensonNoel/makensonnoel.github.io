"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import MakImg1 from "../assets/profile1.jpg";
import MakImg2 from "../assets/profile3.jpg";
import MakImg3 from "../assets/profile4.jpg";
import MakImg4 from "../assets/profile5.jpg";
import MakImg5 from "../assets/profile6.jpg";

// Define Tailwind CSS classes
const titleStyle = "text-4xl font-bold inline border-b-4  border-zinc-500";
const containerStyle = "w-full md:h-screen p-2 flex items-center py-16";
const gridStyle = "max-w-[1240px] m-auto md:grid grid-cols-3 gap-8";
const textContainerStyle = "col-span-2";
const imageContainerStyle =
  "w-auto h-auto m-auto shadow-xl shadow-neutral-950 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300";
const imageStyle = "rounded-xl";

const imageList = [MakImg1, MakImg2, MakImg3, MakImg4, MakImg5]; // Add your image sources here

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 4000); // 4 seconds interval

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div id="about" className={containerStyle}>
      <div className={gridStyle}>
        <div className={textContainerStyle}>
          <p className={titleStyle}>
            <br />
            <br />
            ABOUT
          </p>
          <p className="py-2"></p>
          <p className="py-2">
            Hello! I&apos;m Makenson, a highly motivated and detail-oriented
            Software Engineer with a passion for crafting robust and
            user-friendly solutions.
            <br />
            <br />
            My journey in the tech world began while pursuing an Associate in
            Arts On the STEM path at Broward College, I then transferred to
            Florida Atlantic University, where I declared my major and earned a
            Bachelor of Science in Computer Science.
            <br />
            <br />
            I&apos;ve been actively involved in deloping custom software using
            Python, Java, Next.js, React, JavaScript, HTML, and CSS. I enjoy
            creating seamless, engaging software experiences.
            <br />
            <br />
            Awards: Awarded Best Accessibility Hack at PlutoHacks.
            <br />
            Bachelor of Science in Computer Science from Florida Atlantic
            University. <br />
          </p>
          <br />
        </div>
        <div className={imageContainerStyle}>
          <Image
            src={imageList[currentImageIndex]}
            className={imageStyle}
            alt={`Image ${currentImageIndex + 1}`}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
