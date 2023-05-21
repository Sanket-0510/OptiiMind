import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[20px] max-w-6xl leading-[30px]'
      >
       Welcome to OptiiMinds, your sanctuary for mental serenity. Designed to 
       provide a therapeutic escape from depression, our platform offers a range 
       of productive distractions to engage your mind positively. Our activities, 
       rooted in mindfulness and creativity, help shift focus from distress to 
       progress. Embrace the journey of healing in a caring community that understands 
       your struggle and supports your recovery. With OptiiMinds, discover renewed 
       mental wellness and take the first step towards a brighter, more balanced life.
      </motion.p>

      
    </>
  );
};

export default SectionWrapper(About, "about");
