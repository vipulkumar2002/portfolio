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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrMsg('')
  };

  // ========== Email Validation start here ==============
  const emailValidation = (email: string) => {
    return String(email).toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const mobileNumberValidation = (mobileNumber: number | string): boolean => {
    const phoneStr = String(mobileNumber).trim();
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phoneStr);
  };

  // ========== Email Validation end here ================
  const handleSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, phoneNumber, email, subject, message } = formData;

    if (!username) return setErrMsg('Username is required!');
    if (!phoneNumber) return setErrMsg('Phone number is required!');
    if (!mobileNumberValidation(phoneNumber)) return setErrMsg('Provide a valid Phone number!');
    if (!email) return setErrMsg('Please provide your Email!');
    if (!emailValidation(email)) return setErrMsg('Provide a valid Email!');
    if (!subject) return setErrMsg('Please provide a Subject!');
    if (!message) return setErrMsg('Message is required!');

    await sendEmail(e.currentTarget);
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
          <div className="w-full lgl:w-[55%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form onSubmit={handleSend} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    <span className='text-red-500'>*</span> Your name
                  </p>
                  <input
                    onChange={handleChange}
                    value={formData.username}
                    className={`${(errMsg && !formData.username.length) &&
                      "border-red-500"
                      } contactInput`}
                    type="text"
                    name='username'
                  />
                  {(errMsg && !formData.username.length) && <span className="text-red-500 text-xs">This field is required.</span>}
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    <span className='text-red-500'>*</span> Phone Number
                  </p>
                  <input
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    className={`${(errMsg === "Phone number is required!" || errMsg === 'Provide a valid Phone number!') &&
                      "outline-designColor"
                      } contactInput`}
                    type="number"
                    name='phoneNumber'
                  />
                  {(errMsg && !formData.phoneNumber.length) && <span className="text-red-500 text-xs">This field is required.</span>}
                  {(errMsg && !mobileNumberValidation(formData.phoneNumber)) && <span className="text-red-500 text-xs">Provide a valid phone number.</span>}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  <span className='text-red-500'>*</span> Email
                </p>
                <input
                  onChange={handleChange}
                  value={formData.email}
                  className={`${errMsg === "Please give your Email!" &&
                    "outline-designColor"
                    } contactInput`}
                  type="email"
                  name='email'
                />
                {(errMsg && !formData.email.length) && <span className="text-red-500 text-xs">This field is required.</span>}
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  <span className='text-red-500'>*</span> Subject
                </p>
                <input
                  onChange={handleChange}
                  value={formData.subject}
                  className={`${errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                    } contactInput`}
                  type="text"
                  name='subject'
                />
                {(errMsg && !formData.subject.length) && <span className="text-red-500 text-xs">This field is required.</span>}
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  <span className='text-red-500'>*</span> Message
                </p>
                <textarea
                  onChange={handleChange}
                  value={formData.message}
                  className={`${errMsg === "Message is required!" && "outline-designColor"
                    } contactTextArea`}
                  cols={30}
                  rows={8}
                  name='message'
                ></textarea>
                {(errMsg && !formData.message.length) && <span className="text-red-500 text-xs">This field is required.</span>}
              </div>
              <div className="w-full">
                <button
                  className={`w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase
                    hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent
                    ${!!errMsg.length && "opacity-50 cursor-not-allowed"}
                  `}
                  disabled={!!errMsg.length}
                >
                  Send Message
                </button>
              </div>
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