"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <Link
              href="/projects"
              className="text-lg duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-lg duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Contact
            </Link>
            <Link
              href="/resume"
              className="text-lg duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Resume
            </Link>
          </div>

          <ArrowLeft
            className="w-6 h-6 text-white hover:cursor-pointer"
            onClick={() => router.back()}
          />
        </div>
      </div>
    </header>
  );
};
