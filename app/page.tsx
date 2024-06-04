import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Photo from "../public/may-2024.jpg";
import Image from "next/image";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
  { name: "Blogs", href: "/blogs" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={1000} />
      <Image
        src={Photo}
        alt="my photo"
        height={250}
        width={250}
        className="rounded-full"
      />
      <h1 className="z-10 mt-4 block text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-3xl md:text-7xl whitespace-nowrap bg-clip-text ">
        {`< Suraj Kr Ojha />`}
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-2 text-center animate-fade-in">
        <h2 className="text-sm md:text-base text-zinc-500 ">
          Just A Tech Enthusiast who is very enthusiastic about various nascent
          technologies that are changing millions of lives.
        </h2>
      </div>
    </div>
  );
}
