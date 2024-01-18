import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import "@fortawesome/fontawesome-free/css/all.css";

const DownloadButton = ({ buttonText, fileUrl, fileName }) => {
  return (
    <a href={fileUrl} download={fileName} target="_blank">
      <button className="downloadbtn bg-[#FA7070] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary cursor-pointer mr-3">{buttonText}</button>
    </a>
  );
};

const SocialMediaButton = ({ platform, link, iconClass }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="sosmedbtn bg-[#3081D0] py-2 px-3 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary cursor-pointer mr-3">
        <i className={`icon ${iconClass}`} /> {platform}
      </button>
    </a>
  );
};

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const instagramLink = "https://www.instagram.com/designbyhisyam._/";
  const linkedinLink = "https://www.linkedin.com/in/hisyamsyarif/";
  const githubLink = "https://github.com/hsymsyrif";

  const cvFileName = "CV_Muhammad Hisyam Syarif.pdf";
  const cvFileUrl = "https://drive.google.com/file/d/1m4j0Zp6y6qip1qKNEVJc_gxUHbwzz7qj/view?usp=sharing";

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly
        solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div>
        <br />
        <DownloadButton buttonText="Download CV" fileUrl={cvFileUrl} fileName={cvFileName} />
        <SocialMediaButton link={instagramLink} iconClass="fab fa-instagram" />
        <SocialMediaButton link={linkedinLink} iconClass="fab fa-linkedin" />
        <SocialMediaButton link={githubLink} iconClass="fab fa-github" />
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
