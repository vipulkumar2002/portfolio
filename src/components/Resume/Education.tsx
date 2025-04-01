import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Technology - Information Technology"
            subTitle="Chameli Devi Group of Institutions (2019 - 2023)"
            result="4.25/5"
            des="A four-year undergraduate degree in engineering or technology. It's a professional degree that provides students with theoretical and practical skills for a career in engineering."
          />
          <ResumeCard
            title="Higher Secondary School"
            subTitle="School of Excellence Government Bal Vinay Mandir (2017 - 2019)"
            result="4.10/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education