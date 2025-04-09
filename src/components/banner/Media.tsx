import { skills } from "../../data/skills";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Media = () => {
  return (
    <div className="mediaComponent flex flex-col xl:flex-row gap-6 lgl:gap-16 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <SocialMedia />
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4 flex-wrap">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bannerIcon"
              data-toggle="tooltip"
              title={skill.title}
            >
              {skill.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Media