"use client";
import { Github, Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";

const socials = [
  {
    icon: <Mail size={20} />,
    href: "mailto:ojhasuraj01@gmail.com",
    label: "Email",
    handle: "ojhasuraj01@gmail.com",
  },
  {
    icon: <PhoneCall size={20} />,
    href: "tel:+977-9864421474",
    label: "Phone Number",
    handle: "+977-9864421474",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/Suraez",
    label: "Github",
    handle: "GitHub/Suraez",
  },
];

export default function Example() {
  const [successMsg, setSuccessMsg] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      const resposne = await axios.post(
        "https://eo9rwe7f8duqbqi.m.pipedream.net",
        values
      );
      console.log(resposne);
      if (resposne?.data?.success)
        setSuccessMsg("Thanks for contacting. I will get in touch with you.");
    },
  });

  return (
    <div className="relative pb-16 mt-12">
      <div className="pt-16 space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="md:flex">
          <div className="md:flex items-center md:w-1/3">
            <form onSubmit={formik.handleSubmit} className="w-full p-12">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  {...formik.getFieldProps("name")}
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  id="email"
                  {...formik.getFieldProps("email")}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email Address
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <textarea
                  id="message"
                  {...formik.getFieldProps("message")}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="message"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
            <div>{successMsg !== "" && <h6 className="text-base">{successMsg}</h6>}</div>
          </div>
          <div className="flex items-center justify-center mx-auto md:w-2/3">
            <Card>
              {socials.map((s) => (
                <Link
                  href={s.href}
                  target="_blank"
                  className="p-4 relative flex flex-col gap-4 duration-700  animate-fade-in-up"
                  key={s.href}
                >
                  <span
                    className="absolute w-px bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="flex items-center md:px-4">
                    <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                      {s.icon}
                    </span>{" "}
                    <div className="z-10 flex flex-col p-4">
                      <span className="text-sm font-medium duration-150 md:text-base text-zinc-200 group-hover:text-white font-display">
                        {s.handle}
                      </span>
                      <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        {s.label}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
