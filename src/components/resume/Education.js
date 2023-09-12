import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2017-2024</p>
        <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
      </div>
      <div className="mt-6 lgl:mt-14 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="CPA - Computer Programming and Analysis"
          subTitle="Seneca College"
          result="4/4"
          des="Currently enrolled in 3-year course. Studying OOP, DSA and web application concepts from beginner to advnaced level"
        />
        <ResumeCard
          title="Biotechnology"
          subTitle="Mohawk College(2017-2021)"
          result="90/100"
          des="Honour's graduate from mohawk college in elite 4-year Biotechnology program. Sparked my interest in IT industry"
        />
      </div>
    </motion.div>
  );
};

export default Education;
