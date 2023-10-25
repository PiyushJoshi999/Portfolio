import React from "react";
import MyImage from "../assets/profile-pic (4) (1).png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 ">
            I'm a versatile Frontend Developer with a strong foundation in web
            technologies like HTML, CSS, and JavaScript, and experience in
            React.js, Bootstrap, Redux, Firebase, and more. I'm passionate about
            creating seamless web experiences and committed to continuous
            learning and innovation.
          </p>
          <div>
            <Link
            to="projects"
            smooth duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
          bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className='ml-1' size={25}/>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={MyImage}
            alt="My Profile"
            className="rounded-2xl md-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
