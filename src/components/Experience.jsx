import React from "react";
import BootstrapPic from "../assets/bootstrap.png";
import HtmlPic from "../assets/html.png";
import CssPic from "../assets/css.png";
import JavascriptPic from "../assets/javascript.png";
import GithubPic from "../assets/github.png";
import ReactPic from "../assets/react.png";
import ReduxPic from "../assets/redux.jpeg";
import CppPic from "../assets/c++.png";


const Experience = () => {
  const skillsList = [
    {
      id: 1,
      src: HtmlPic,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CssPic,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavascriptPic,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactPic,
      title: "React Js",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: ReduxPic,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 6,
      src: GithubPic,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 7,
      src: BootstrapPic,
      title: "BootStrap",
      style: "shadow-sky-500",
    },
    {
        id: 8,
        src: CppPic,
        title: "C++",
        style: "shadow-blue-500",
    }
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0">
          {skillsList.map((link) => (
                <div key={link.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${link.style}`}>
                  <img src={link.src} alt={link.title} className="w-20 mx-auto" />
                  <p className="mt-4">{link.title}</p>
                </div>     
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
