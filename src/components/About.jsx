import React from "react";

const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
     <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
     <div className="p-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500"
        >About</p>
      </div>
      <p className="text-xl mt-20">
        As a Frontend Developer, I bring a versatile skill set to the table,
        including proficiency in HTML, CSS, JavaScript, React.js, Bootstrap,
        Redux, Firebase, and more. I've also explored the world of Rest APIs,
        utilized the power of Git and GitHub for version control, and navigated
        the complexities of Linux. In the realm of web development, I've taken
        on exciting projects like the "Mail Box Client, " a feature-rich mailbox
        client built with React.js, and the "Expense Tracker, " an intuitive
        financial management web application. I also designed a dynamic
        E-Commerce website, ensuring a seamless shopping experience for users.
      </p>
      <br />
      <p className="text-xl">
        My interests extend beyond coding. I'm a passionate cook, a cricket
        enthusiast, and an avid traveler. These interests allow me to approach
        problem-solving creatively and stay curious about the world. I'm excited
        to continue my journey in web development, exploring new technologies
        and taking on exciting challenges. I'm
        always eager to connect and collaborate with fellow developers. Thank
        you for visiting my portfolio!
      </p>
     </div>
    </div>
  );
};

export default About;
