import emailjs from "@emailjs/browser";

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string;

export const sendEmail = async (form: HTMLFormElement) => {
    emailjs.sendForm(
      serviceId,
      templateId,
      form,
      publicKey
    )
    .then(
      () => {},
      () => {}
    );
  };