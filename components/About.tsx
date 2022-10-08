import React from 'react'
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About</h3>
        <motion.img 
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0}}
        viewport={{ once: true}}
        src="https://www.zupimages.net/up/22/40/f0c3.jpg"
        className=" -mb-20 mb:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"/>
        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">Here is a{" "} <span className="underline decoration-[#F7AB0A]/50">little</span>{" "} background</h4>
          <p className="text-base">After 10 years of experience in accounting, I decided to give a new
breathe life into my career in web development. I would like to join a
company that will allow me to reveal my talents and put at your
service my skills acquired during my training and my professional
experience. Passionate, organized and flexible, I will be quickly
operational and my ability to adapt and understand will allow me to
integrate quickly.</p>
        </div>
    </motion.div>
  )
}

export default About