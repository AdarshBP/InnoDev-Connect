import "./Contact.css";
import { useState } from "react";

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("sending email " ,formData);
    //clear form data 
    setFormData({
      name: '',
      email: '',
      message: ''
   });
  }
  

  return <>
    <section className="w-full">
      <div className="contactus-background flex flex-col justify-center items-center lg:items-start lg:justify-end w-full">
        <h1 className="  text-center lg:text-left text-white text-4xl lg:text-6xl font-bold cursor-default lg:m-20 lg:w-3/5">
        Get in touch  with us</h1>
      </div>
    </section>
    <section className="lg:flex pb-20 xl:pb-0 pt-20">
      <section className="bg-white w-full lg:w-1/2 flex flex-col items-center pb-20">
        <div className="w-full px-10 sm:px-20 md:px-20 lg:px-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary pb-6 cursor-default">Reach out to us!</h2>
          <div className="opac">
            <p className="text-xl font-medium text-secondary pb-5 cursor-default font-montserrat">
              Are you ready to boost your company or career forward? Do you have any questions or maybe just want to say hi? Contact us:
            </p>
          </div>
          <form id="contact-form" method="POST" className="grid justify-items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="mb-3 w-full border-2 rounded-md border-secondary focus:outline-none focus:border-primary pl-6 font-bold py-2 placeholder-secondary font-montserrat"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="E-mail"
              className="mb-3 w-full border-2 rounded-md border-secondary focus:outline-none focus:border-primary pl-6 font-bold py-2 placeholder-secondary font-montserrat"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Message"
              className="mb-3 w-full h-60 border-2 rounded-md border-secondary focus:outline-none focus:border-primary pl-6 font-bold py-2 placeholder-secondary font-montserrat"
            />
            <button
              type="submit"
              className="flex items-center justify-center text-white border-2 border-primary bg-primary hover:bg-white hover:border-primary hover:text-primary focus:outline-none transition transition-bg p-2 mt-10 w-full h-16 rounded-md text-xl font-bold disabled:bg-gray-200 disabled:border-gray-500 disabled:text-gray-500 disabled:cursor-not-allowed font-workSans"
            >
              Send Message
            </button>
            <p className="pt-4 text-xs justify-self-start font-montserrat cursor-default">
              This site is protected by reCAPTCHA and the Google{' '}
              <span className="text-primary hover:text-primary-300">
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy </a>
              </span>
              and{' '}
              <span className="text-primary hover:text-primary-300">
                <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service </a>
              </span>
              apply.
            </p>
          </form>
        </div>
      </section>

      <section className="w-full lg:w-1/2 flex flex-col items-center">
        <div className="space-y-20 px-10 sm:px-20 md:px-20 lg:px-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary pb-4 cursor-default">Other ways to connect:</h2>

          <div className="opac">
            <div className="flex items-center gap-14 lg:gap-10">
              <div className="w-20 flex justify-center">
                <svg aria-hidden="true" focusable="false" className="svg-inline--fa fa-mobile fa-w-10 fa-3x text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
                </svg>
              </div>
              <p className="text-secondary text-xl font-medium cursor-default font-montserrat">
                If you want to discuss urgent business matters, give us a call at{' '}
                <span className="text-primary hover:text-primary-300">
                  <a href="tel:+91 7406686010">+91 7406686010</a>
                </span>.
              </p>
            </div>
          </div>



        </div>
      </section>
    </section>
  </>
};
