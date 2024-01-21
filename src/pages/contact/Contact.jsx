import React from "react";
import emailjs from "@emailjs/browser";
import Container from "../../components/Container";
import Header from "../../components/Header";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import { useRef, useState } from "react";
import { TextInput, TextAreaInput } from "../../components/FormInputs";

const Contact = () => {
  const form = useRef();
  const emailRef = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailCheck = () => {
    const emailValue = emailRef.current.value;
    const isValid = validateEmail(emailValue);
    setIsValidEmail(isValid);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail) {
      return;
    }

    emailjs
      .sendForm(
        "service_8b23e5c",
        "template_cvr4un7",
        form.current,
        "BGF2ZgW_6xwQRmfSh"
      )
      .then(
        (result) => {
          form.current.reset();
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 5000);
          console.log(result.text);
        },
        (error) => {
          setShowFailureMessage(true);
          setTimeout(() => {
            setShowFailureMessage(false);
          }, 5000);
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Container>
        <Header text={"03. Contact"} />
        <div
          className="text-black grid grid-cols-1 lg:grid-cols-5 gap-8"
          id="contact-section"
        >
          <div className="col-span-2 flex flex-col align-center">
            <h3 className=" text-3xl  font-bold">Have a project in mind ?</h3>
            <div>
              <p className="text-lg my-6 lg:mt-12 ">
                Fill in the form and lets discuss your next website!
              </p>
              <p className="text-lg  ">
                I'm currently searching for any free-lance or front-end
                developer positions.
              </p>
            </div>
            <div className="icons flex gap-4 text-4xl md:text-5xl text-black mt-6 lg:mt-12">
              <a
                href="https://www.instagram.com/ryan.boado/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c9c9c9]"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/ryan-boado-a486191b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c9c9c9]"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/boadoryan/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c9c9c9]"
              >
                <AiOutlineGithub />
              </a>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="border border-black col-span-3 rounded p-6 lg:p-10 mt-8 lg:mt-0"
          >
            <h3 className="text-4xl  font-bold mt-4">Get in touch.</h3>
            <p className="text-lg mt-4 mb-12 ">
              Leave your name, email, and any questions you have and I will get
              back to you as soon as I can.
            </p>
            <TextInput label={"Name"} name={"name"} />
            <TextInput
              label={"Email"}
              name={"email"}
              emailRef={emailRef}
              handleEmailCheck={handleEmailCheck}
              isValidEmail={isValidEmail}
            />
            <TextAreaInput label={"Message"} name={"message"} />
            {showSuccessMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded my-2">
                Email sent successfully!
              </div>
            )}
            {showFailureMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded my-2">
                Failed to send email. Please try again later.
              </div>
            )}
            <input
              type="submit"
              className=" mt-2 border border-black px-4 py-1.5 rounded hover:bg-[#c9c9c9] hover:cursor-pointer"
            />
          </form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
