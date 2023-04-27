import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



//Image

import aslImg from '../public/assets/projects/asl.png'; //ASL Hand Tracker
import guideImg from '../public/assets/projects/guide.png'; //Guide
import visualsImg from '../public/assets/projects/visuals.png'; //Visuals

//Links
const aslLink ='https://www.youtube.com/watch?v=q1tI7GO7d1A'; //ASL Hand Tracker
const guideLink = "https://makenson.com/cof/"; //Guide
const visualsLink = 'https://makenson.com/art/'; //Visuals

import ProjectItem from './ProjectItem';
import ProjectItems from './ProjectItems';

const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const gridOld = 'grid md:grid-cols-2 gap-8'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className = {titleStyle}><br></br><br></br>Projects</p>
        <p className='py-6'></p>

        <div className='grid md:grid-cols-1 gap-8'>


          <ProjectItem
            title='ASL HT'
            backgroundImg={aslImg}
            projectUrl={aslLink}
            tech=''
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
