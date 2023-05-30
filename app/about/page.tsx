import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <div>
      <h3 className="text-white">About page</h3>
    </div>
  );
};

export default About;
