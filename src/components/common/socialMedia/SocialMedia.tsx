import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className="flex gap-4">
      <a
        href='https://github.com/vipulkumar2002'
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open github profile"
        data-toggle="tooltip"
        title="Github"
      >
        <span className="bannerIcon">
          <FaGithub />
        </span>
      </a>
      <a
        href='https://www.linkedin.com/in/vipul-p-46171118a/'
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open linkedin profile"
        data-toggle="tooltip"
        title="Linkedin"
      >
        <span className="bannerIcon">
          <FaLinkedinIn />
        </span>
      </a>
    </div>
  )
}

export default SocialMedia