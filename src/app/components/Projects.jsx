import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

// Image Imports
import projectOneImg from "../assets/projects/asl.gif";
import projecttTwoImg from "../assets/projects/thousand.jpg";
import projectThreeImg from "../assets/projects/shellhacks.png";
import projectFourImg from "../assets/projects/robot.png";
import projectTwoImg from "../assets/projects/insight.png";
import projectFiveImg from "../assets/projects/lulawn.png";
import projectSixImg from "../assets/projects/pyradise.png";
import projectSevenImg from "../assets/projects/motion.png";

// Source URLs
import ProjectItems from "./ProjectItems";
import ProjectItem from "./ProjectItem";

// Tailwind CSS Classes
const titleStyle = "text-4xl font-bold inline border-b-4  border-zinc-500";
const containerStyle = "w-full";
const maxWidthStyle = "max-w-[1240px] mx-auto px-2 py-16";
const gridStyle = "grid md:grid-cols-4 gap-8";
const buttonContainerStyle = "flex justify-center py-12";
const socialIconStyle =
  "rounded-full shadow-lg shadow-neutral-950 p-6 cursor-pointer hover:scale-110 ease-in duration-300";

const Projects = () => {
  return (
    <div id="projects" className={containerStyle}>
      <div className={maxWidthStyle}>
        <p className={titleStyle}>
          <br></br>
          <br></br>
          PROJECTS
        </p>
        <p className="py-6"></p>

        <div className={gridStyle}>
          {/* Project 1*/}
          <ProjectItems
            title="Project"
            backgroundImg={projectOneImg}
            projectUrl="https://www.youtube.com/watch?v=q1tI7GO7d1A"
            tech=""
          />

          {/* Description */}
          <p>
            Title: Hand Gesture Tracker
            <br></br>
            <br></br>
            Developed a Python script that converted ASL gestures into text
            using webcams.
          </p>

          {/* Project 2*/}

          <ProjectItems
            title="Project"
            backgroundImg={projectTwoImg}
            projectUrl="https://insitee.github.io/"
            tech=""
          />

          {/* Description */}
          <p>
            Title: PlutoHacks
            <br></br>
            <br></br>
            Awarded 1st Place for developing an accessibility website using
            HTML, JavaScript, and Bootstrap.
          </p>

          {/* Project 3*/}

          <ProjectItems
            title="Project"
            backgroundImg={projectThreeImg}
            projectUrl="https://www.youtube.com/watch?v=9ZVfR7dmDA8"
            tech=""
          />

          {/* Description */}
          <p>
            Title: ShellHacks
            <br></br>
            <br></br>
            Authenticated an interactive earth sustainers website with a team of
            four using Auth0 and React.
          </p>

          {/* Project 4*/}

          <ProjectItems
            title="Project"
            backgroundImg={projectFourImg}
            projectUrl="https://youtu.be/CdM2Otm6FBI?si=i552BxmbNthXZWsl"
            tech=""
          />

          {/* Description */}
          <p>
            Title: Robot App
            <br></br>
            <br></br>
            Automated Florida Power and Lights robot by building a mobile app
            with a team of five using Java.
          </p>

          {/* Project 5*/}

          <ProjectItems
            title="Project"
            backgroundImg={projectSevenImg}
            projectUrl="https://www.youtube.com/watch?v=1iIxOdu2hoY&t=4s"
            tech=""
          />

          {/* Description */}
          <p>
            Title: Motion Occurence App
            <br></br>
            <br></br>
            Built a portable surveillance system with a team of two using Python
            and Microcontroller.
          </p>

          {/* Pyradise*/}

          <ProjectItems
            title="Project"
            backgroundImg={projectSixImg}
            projectUrl="https://www.youtube.com/watch?v=Xo44kXOb8-4"
            tech=""
          />

          {/* Description */}
          <p>
            Title: Pyradise
            <br></br>
            <br></br>
            Led a team of six in developing a website for coding tutorials using
            HTML, JavaScript, and Bootstrap.
          </p>
        </div>

        <br></br>
        <br></br>

        <div className={buttonContainerStyle}>
          <Link
            legacyBehavior
            href="https://github.com/makensonn?tab=repositories"
          >
            <a>
              <div className={socialIconStyle}>View More</div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
