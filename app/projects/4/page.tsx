import React from "react";
import Image from "next/image";
import Link from "next/link";

const NepaliNews = () => {
  return (
    <div className="container-fluid mt-24 p-4 md:p-24">
      <h3 className="text-white mb-4 md:text-4xl">
        Mesla - A subtle clone of Stack Overflow
      </h3>
      <hr className="bg-white mb-4" />
      {/* 1st row */}
      <div className="flex xs:flex-col-reverse md:flex-row md:justify-around">
        <div className="description md:w-3/5">
          <p className="mt-4 text-sm md:text-xl lg:text-2xl">
            A MERN (MONGODB + Express.js + React.js + NODE.js) web app which contains the
            features such as authentication and authorization, upvote and downvoting
            question and answers, question and answer posting, GitHub Job postings and so
            on. The project was undertaken in order to help students scratching their head
            during the time of exams to ask questions and get help from seniors, peers or
            teachers. We also integrated a Nepal Online Payment System called Khalti for
            fund-raising for distributing free books to the needy students.
          </p>
          <div className="mt-4">
            <Link
              href="https://bookbytes.onrender.com/"
              className="hover:cursor-pointer"
              target="blank"
            >
              <h5 className="text-sm md:text-xl lg:text-2xl">
                Demo URL: https://bookbytes.onrender.com/
              </h5>
            </Link>
            <Link
              href="https://github.com/Suraez/bookbytes"
              className="hover:cursor-pointer"
              target="blank"
            >
              <h4 className="text-sm md:text-xl lg:text-2xl">
                Repo URL: https://github.com/Suraez/bookbytes
              </h4>
            </Link>{" "}
          </div>
        </div>
        <div className="demo md:w-1/5">
          <Image src="/projects/mesla.jpg" alt="bookbytes" height="500" width="400" />
        </div>
      </div>

      {/* 2nd row */}
      <div className="container-fluid mt-10">
        <div className="header flex flex-col space-y-2">
          <h3 className="md:text-4xl">Technologies Used: </h3>
          <hr className="bg-white w-full" />
        </div>

        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:justify-around">
          <Image src="/technologies/mongodb.png" height="100" width="250" alt="Node.js" />
          <Image src="/technologies/express.jpg" height="100" width="150" alt="Node.js" />
          <Image src="/technologies/react.jpg" height={100} width={150} alt="Node.js" />
          <Image src="/technologies/nodej.png" height={100} width={150} alt="Node.js" />
          <Image
            src="/technologies/passport.png"
            height="100"
            width="250"
            alt="Node.js"
          />
        </div>
      </div>
    </div>
  );
};

export default NepaliNews;
