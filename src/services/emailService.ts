import emailjs from "@emailjs/browser";
import { FormData } from "../types/contact";

export const sendEmail = async (formData: FormData) => {
    emailjs.sendForm(
      "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
      "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
      formData.message,
      "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
    )
    .then(
      () => {},
      () => {}
    );
  };