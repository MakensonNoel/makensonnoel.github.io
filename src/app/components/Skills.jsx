import TypeScript from "../assets/skills/typescript.png";
import ReactImg from "../assets/skills/react.png";
import MongoDB from "../assets/skills/mongo.png";
import Firebase from "../assets/skills/firebase.png";
import AWS from "../assets/skills/aws.png";
import Bootstrap from "../assets/skills/bootstrap.png";
import Node from "../assets/skills/node.png";
import NextJS from "../assets/skills/nextjs.png";
import CPP from "../assets/skills/cpp.png";
import Java from "../assets/skills/java.png";
import Python from "../assets/skills/python.png";
import Image from "next/image";
import React from "react";
import Html from "../assets/skills/html.png";
import Css from "../assets/skills/css.png";
import Javascript from "../assets/skills/javascript.png";

const titleStyle = "text-4xl font-bold inline border-b-4 border-zinc-500";

const just = "max-w-[1240px] m-auto px-2 py-16 w-full ";

const skillsData = [
  { image: Html, label: "HTML", link: "https://www.w3schools.com/html/" },
  { image: Css, label: "CSS", link: "https://www.w3schools.com/css/" },
  {
    image: Javascript,
    label: "JavaScript",
    link: "https://www.javascript.com/",
  },
  {
    image: TypeScript,
    label: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  { image: ReactImg, label: "React", link: "https://react.dev/" },
  { image: NextJS, label: "Next.JS", link: "https://nextjs.org/docs" },
  { image: Node, label: "Node.JS", link: "https://nodejs.org/en/about" },
  {
    image: Bootstrap,
    label: "Bootstrap",
    link: "https://www.w3schools.com/bootstrap/",
  },
  {
    image: Java,
    label: "Java",
    link: "https://www.java.com/en/download/help/whatis_java.html",
  },
  { image: Python, label: "Python", link: "https://www.python.org/" },
  { image: CPP, label: "C++", link: "https://cplusplus.com/" },
  { image: MongoDB, label: "MongDB", link: "https://www.mongodb.com/" },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className={just}>
        <p className={titleStyle}>
          <br />
          <br />
          SKILLS
        </p>
        <p className="py-4">
          <br />
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <a
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={skill.image}
                      width="64px"
                      height="64px"
                      alt={skill.label}
                    />
                  </a>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.label}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
