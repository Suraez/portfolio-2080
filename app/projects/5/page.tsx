import React from "react";
import Link from "next/link";
import Image from "next/image";
const Mesla = () => {
  return (
    <div className="container-fluid mt-24 p-4 md:p-24">
      <h3 className="text-white mb-4 md:text-4xl">BookBytes - Buy & Sell Used Books</h3>
      <hr className="bg-white mb-4" />
      {/* 1st row */}
      <div className="flex xs:flex-col-reverse md:flex-row md:justify-around">
        <div className="description md:w-3/5">
          <p className="mt-4 text-sm md:text-xl lg:text-2xl">
            This project was completed in NODE.js + Express.js along with templating
            engine - Handlebars (hbs). For authentication and authorization, we used
            Passport.js. On this webapp, students can order books and even sell books by
            creating an account and uploading the image of the book s/he wants to sell. It
            has carts and wishlist feature implemented. The motivation was to develop a
            stop solution to the problem of finding used books and notes. It has also free
            e-book service in the form of PDFs which can be downloaded for free. Free pdfs
            also include novels of different genre - LOVE, BIOGRAPHY, MOTIVATION, SCIENCE
            FICTION, and NON-FICTIONS.
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
          <Image src="/projects/bookbytes.jpg" alt="bookbytes" height="500" width="400" />
        </div>
      </div>

      {/* 2nd row */}
      <div className="container-fluid mt-10">
        <div className="header flex flex-col space-y-2">
          <h3>Technologies Used: </h3>
          <hr className="bg-white w-full" />
        </div>

        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:justify-around">
          <div className="tech-image">
            <Image src="/technologies/nodej.png" height={100} width={150} alt="Node.js" />
          </div>
          <div className="tech-image">
            <Image
              src="/technologies/express.jpg"
              height="100"
              width="150"
              alt="Node.js"
            />
          </div>
          <div className="tech-image">
            <Image
              src="/technologies/handlebars.png"
              height="100"
              width="150"
              alt="Node.js"
            />
          </div>
          <div className="tech-image">
            <Image
              src="/technologies/mongodb.png"
              height="100"
              width="250"
              alt="Node.js"
            />
          </div>
          <div className="tech-image">
            <Image
              src="/technologies/passport.png"
              height="100"
              width="250"
              alt="Node.js"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mesla;
