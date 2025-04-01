import { ChangeEvent, FormEvent, useState } from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import { sendEmail } from '../../services/emailService';
import { FormData } from '../../types/contact';

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ========== Email Validation start here ==============
  const emailValidation = (email: string) => {
    return String(email).toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // ========== Email Validation end here ================
  const handleSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, phoneNumber, email, subject, message } = formData;

    if (!username) return setErrMsg('Username is required!');
    if (!phoneNumber) return setErrMsg('Phone number is required!');
    if (!email) return setErrMsg('Please provide your Email!');
    if (!emailValidation(email)) return setErrMsg('Provide a valid Email!');
    if (!subject) return setErrMsg('Please provide a Subject!');
    if (!message) return setErrMsg('Message is required!');

    await sendEmail(formData);
    setSuccessMsg(`Thank you, ${username}. Your message has been sent successfully!`);
    setErrMsg('');
    setFormData({ username: '', phoneNumber: '', email: '', subject: '', message: '' });
  };

  return (
    <section
      id="contacts"
      className="contactComponent w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form onSubmit={handleSend} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    onChange={handleChange}
                    value={formData.username}
                    className={`${errMsg === "Username is required!" &&
                      "outline-designColor"
                      } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    className={`${errMsg === "Phone number is required!" &&
                      "outline-designColor"
                      } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={handleChange}
                  value={formData.email}
                  className={`${errMsg === "Please give your Email!" &&
                    "outline-designColor"
                    } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={handleChange}
                  value={formData.subject}
                  className={`${errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                    } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={handleChange}
                  value={formData.message}
                  className={`${errMsg === "Message is required!" && "outline-designColor"
                    } contactTextArea`}
                  cols={30}
                  rows={8}
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact