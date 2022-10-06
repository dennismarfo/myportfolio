import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';

function Hero() {
    const [text, count] = useTypewriter({
        words: [
        "Hi,My Name's Denis",
        "Guy-who-loves-Coffee.tsx",
        "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
    });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircle />
        <img className="relative rounded-full h-32 w-32 mx-auto object-cover" 
        src="https://media-exp1.licdn.com/dms/image/C4D03AQEo4ZLGAfSi9Q/profile-displayphoto-shrink_400_400/0/1631611599081?e=1670457600&v=beta&t=a2cMlODyZv0evQ4IRY973JbOPK766d0DAmCzTMDyMVc"/>
        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Web Developer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A'/>
        </h1>
        <div className="pt-5">
          <Link href="#about">
          <button className="heroButton">About</button>
          </Link>
          <Link href="experience">
          <button className="heroButton">Experience</button>
          </Link>
          <Link href="skills">
          <button className="heroButton">Skills</button>
          </Link>
          <Link href="projects">
          <button className="heroButton">Projects</button>
          </Link>
          
        </div>
        </div>
    </div>
  )
}

export default Hero