import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="p-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I’m a solution-oriented Full-Stack Developer with hands-on experience
          in designing, developing, and deploying web applications using modern
          technologies like React.js, Node.js, Express.js, MySQL, and MongoDb.
          In my current organization, I’ve built and optimized key modules for
          real-world client applications, contributing to better performance,
          usability, and reliability for thousands of users.
        </p>
        <br />
        <p className="text-xl">
          My strength lies in crafting clean, maintainable code, building
          reusable UI components, and ensuring smooth integration between
          frontend and backend systems. I'm comfortable working across the
          stack—from creating responsive interfaces and secure authentication
          flows to optimizing SQL queries and RESTful APIs for better
          performance.
        </p>
        <br />
        <p className="text-xl">
          I thrive in fast-paced environments, enjoy collaborating with
          cross-functional teams, and approach every challenge with a strong
          attention to detail. Beyond development, I’ve contributed to code
          reviews, debugging, feature enhancements, and manual testing to
          maintain high-quality standards throughout the software lifecycle.
        </p>
      </div>
    </div>
  );
};

export default About;
