import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-row gap-20"
    >
      <div className="w-full">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-4xl font-bold">Honours and Awards</h2>
        </div>
        <div className="mt-14 h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="President's Honours List"
            subTitle="Issued by Seneca College"
            result="Aug 2023"
            des="Named to the President's Honour List for Winter 2023. Scoring a perfect GPA of 4"
          />
          <ResumeCard
            title="
            President's Honour List"
            subTitle="Issued by Seneca College"
            result="Dec 2022"
            des="Scored a GPA of 4 and hence named in the President's Honour list"
          />
          <ResumeCard
            title="Dean's Honours."
            subTitle="Issued by CEO of Mohawk college"
            result="Apr 2021"
            des={
              <>
                Awarded by Dean of Mohawk College an Honours Graduate. <br />
                Overall GPA -90%
              </>
            }
          />
        </div>
      </div>
      <div className="w-full">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017-2023</p>
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-14 h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Ultimate JavaScript: Fundamentals"
            subTitle="Issuer- Code with Mosh"
            result="Jan 2023"
            des="
Credential ID cert_kdgjfxxq"
          />
          <ResumeCard
            title="Ultimate JavaScript: Advanced"
            subTitle="Issuer- Code with Mosh"
            result="Jan 2023"
            des="
Credential ID cert_kdgjfxxq"
          />
          <ResumeCard
            title="The Ultimate React Course"
            subTitle="Udemy"
            result="Jan 2023"
            des="
            Credential ID UC-b7160ced-90b3-4e8a-9650-3819be8b7c85"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
