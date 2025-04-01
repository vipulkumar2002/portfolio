import { FaReact, FaBootstrap, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiTypescript, SiJavascript, SiAngular } from "react-icons/si";
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
          <span className="bannerIcon" data-toggle="tooltip" title="Javascript">
            <SiJavascript />
          </span>
          <span className="bannerIcon" data-toggle="tooltip" title="React">
            <FaReact />
          </span>
          <span className="bannerIcon" data-toggle="tooltip" title="Redux">
            <SiRedux />
          </span>
          <span className="bannerIcon" data-toggle="tooltip" title="Css 3">
            <SiAngular />
          </span>
          <span className="bannerIcon" data-toggle="tooltip" title="Typescript">
            <SiTypescript />
          </span>
          <span className="bannerIcon" data-toggle="tooltip" title="Tailwind css">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon" data-toggle="tooltip" title="Bootstrap">
            <FaBootstrap />
          </span>
          <span className="bannerIcon" data-toggle="tooltip" title="Html 5">
            <FaHtml5 />
          </span>
          <span className="bannerIcon" data-toggle="tooltip" title="Css 3">
            <FaCss3 />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media