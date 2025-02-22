import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Photo from "../public/profile.jpg";
import Pub1 from "../public/pub1.png";
import Pub2 from "../public/pub2.png";
import Image from "next/image";
import {Mail, Github, Youtube} from "lucide-react"
const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
  { name: "Blogs", href: "/blogs" },
];

export default function Home() {
  return (
    <div className="flex flex-col w-screen md:h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black md:p-12">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4 pr-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text- md:text-xl duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="jumbotron md:flex">
        <div className="left-col md:columns-md flex flex-col justify-center items-center">
          <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={1000} />
          <Image
            src={Photo}
            alt="my photo"
            height={250}
            width={250}
            className="rounded-full"
          />
          <h2 className="z-10 mt-4 block text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-2xl whitespace-nowrap bg-clip-text ">
            {`< Suraj Kr Ojha />`}
          </h2>
          <h2 className="text-sm text-center md:text-base text-zinc-500 mt-2">
            <i>TL;DR</i> I am a CS PhD student at NJIT. I am currently working in Cloud
            Computing, specifically, focusing on reducing latency in Serverless
            Architecture.
          </h2>
          <a href="mailto:so299@njit.edu">
            <h5 className="flex text-sm text-zinc-500 hover:text-zinc-300">
              <Mail className="mr-1 mt-1" size={15} />
              so299@njit.edu
            </h5>
          </a>
          <a href="https://github.com/Suraez" target="_blank">
            <h5 className="flex text-sm text-zinc-500  hover:text-zinc-300">
              <Github className="mr-1 mt-1" size={15} />
              https://github.com/Suraez
            </h5>
          </a>

          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-2"
          >
            <Link href="https://www.youtube.com/@surajoberai" className="flex">
              <Youtube className="mr-1 mt-1" size={15} />
              My YouTube Channel
            </Link>
          </button>
          <h2 className="text-sm text-center md:text-base text-zinc-500">
            Please consider subscribing it! :)
          </h2>
        </div>
        <div className="right-col md:columns-xl">
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <div className="my-2 animate-fade-in p-4">
            <h2 className="text-xl">Publications</h2>
            <hr />
            <div className="md:flex justify-around">
              <div className="pub flex flex-col md:justify-around items-center">
                <Image src={Pub1} alt="Publication 1" height={250} width={250} />
                <ul>
                  <li>
                    <h4>Theory of Computation</h4>
                  </li>
                  <li>Publisher: GL Books House Pvt. Ltd</li>
                  <li>Published Year: 2019</li>
                  <li>Co-author: Prof. Urbara Bhandari</li>
                </ul>
              </div>

              <div className="pub flex flex-col md:justify-around items-center">
                <Image src={Pub2} alt="Publication 2" height={250} width={250} />
                <ul>
                  <li>
                    <h3>Discrete Structure</h3>
                  </li>
                  <li>Publisher: GL Books House Pvt. Ltd</li>
                  <li>Published Year: 2021</li>
                  <li>Co-author: Prof Ramesh Thapa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
