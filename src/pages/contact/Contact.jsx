import React from "react";
// import Container from "./components/Container";
import Container from "../../components/Container";
import Header from "../../components/Header";
// import Header from "./components/Header";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineGithub,
  AiOutlineDown,
} from "react-icons/ai";
import { TextInput, TextAreaInput } from "../../components/FormInputs"

const Contact = () => {
  return (
    <>
      <Container>
        <Header text={"03. Contact"} />
        <div className="text-black grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="col-span-2 flex flex-col align-center">
            <h3 className=" text-3xl lg:text-4xl font-bold">
              Have a project in mind ?
            </h3>
            <div>
              <p className="lg:text-xl my-6 lg:mt-12 ">
                Fill in the form and lets discuss your next website!
              </p>
              <p className="lg:text-xl ">
                I'm currently searching for any free-lance or front-end
                developer positions.
              </p>
            </div>
            <div className="icons flex gap-4 text-4xl md:text-5xl text-black mt-6 lg:mt-12">
              <AiFillInstagram />
              <AiFillLinkedin />
              <AiOutlineGithub />
            </div>
          </div>
          <form
            action=""
            className="outline col-span-3 rounded p-4 lg:p-8 mt-8 lg:mt-0"
          >
            <h3 className="text-4xl lg:text-5xl font-bold mt-4">
              Get in touch.
            </h3>
            <p className="lg:text-lg mt-4 mb-12 lg:w-4/5">
              Leave your name, email, and any questions you have and I will get
              back to you as soon as I can.
            </p>
            <TextInput label={"Name"} />
            <TextInput label={"Email"} />
            <TextAreaInput label={"First Name"} />
            <input type="submit" className="outline px-4 py-1.5 rounded" />
          </form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
