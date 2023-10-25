import React from "react";
import MailBox from "../assets/email-box.webp";
import ECommerce from "../assets/e-commerce.png";
import Portfolio from "../assets/Portfolio-Desk.jpg";
import Expense from "../assets/expense-management.png";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      src: MailBox,
      demoLink: "https://mail-box-client-22a46.web.app/",
      codeLink: "https://github.com/PiyushJoshi999/Mail-Box-Client",
    },
    {
      id: 2,
      src: Expense,
      demoLink: "https://expense-tracker-fe43e.web.app/",
      codeLink: "https://github.com/PiyushJoshi999/Expense-Tracker",
    },
    {
      id: 3,
      src: ECommerce,
      demoLink: "https://e-commerce-app-d57c8.web.app/",
      codeLink: "https://github.com/PiyushJoshi999/E-Commerce_Website",
    },
    {
      id: 4,
      src: Portfolio,
      demoLink: "https://portfolio--transcendent-empanada-4d7b2c.netlify.app/",
      codeLink: "https://github.com/PiyushJoshi999/Portfolio",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-500 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here!</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="shadow-md shadow-gray-600 rounded-lg "
            >
              <img
                src={project.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
