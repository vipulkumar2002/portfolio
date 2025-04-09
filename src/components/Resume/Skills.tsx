import { motion } from "framer-motion";
import { skillSections } from "../../data/skillSections";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="educationComponent w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {skillSections.map((section, idx) => (
        <div key={idx} className="w-full lgl:w-1/3">
          <div className="py-12 font-titleFont flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">{section.title}</h2>
          </div>
          <div className="flex flex-col gap-6">
            {section.skills.map((skill, index) => (
              <div className="overflow-x-hidden" key={index}>
                <p className="text-sm uppercase font-medium">{skill.name}</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`w-[${skill.level}%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="absolute -top-7 right-0">{skill.level}%</span>
                  </motion.span>
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;