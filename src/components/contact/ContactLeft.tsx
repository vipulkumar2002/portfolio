import { contactImg } from "../../assets/index";
import SocialMedia from "../common/socialMedia/SocialMedia";

const ContactLeft = () => {
  return (
    <div className="contactLeftComponent w-full lgl:w-[40%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Vipul Patel</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Engineer With experience in developing scalable applications and optimizing performance, I focus on delivering seamless user experiences. I thrive in cross-functional teams, building scalable applications for efficient client-server communication. Passionate about innovation and technology, I'm eager to contribute to impactful projects. Let’s connect and build something great together!
        </p>
        <div>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Phone: <span className="text-lightText">+91 7415384611</span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Email: <span className="text-lightText">vipulkumarpatel2002@gmail.com</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <SocialMedia />
      </div>
    </div>
  );
}

export default ContactLeft