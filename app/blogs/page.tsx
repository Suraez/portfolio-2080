"use client";
import { Github, Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import FadeInSection from "../components/fadeInUp";

const BlogCard = (blogDetails: any) => {
  console.log(blogDetails);
  
  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="w-full text-zinc-300 animate-fade-in-up">
        <h2 className="text-base md:text-2xl animate-fade-in-up text-center md:text-left">
          {blogDetails.blogDetails.title}
        </h2>
        <h4 className="text-xl md:text-xl animate-fade-in-up text-center md:text-left">
          {blogDetails.blogDetails.desc}
        </h4>
        <h4 className="text-base md:text-2xl animate-fade-in-up text-center md:text-left">
          {blogDetails.blogDetails.created_at}
        </h4>
      </div>
    </div>
  );
}

export default function Example() {

  const blogs =[
    {
      "title": "First Blog",
      "desc": "the description about the blog goes here.",
      "created_at": "2024-10-12"
    },
    {
      "title": "Second Blog",
      "desc": "the description about the blog goes here.",
      "created_at": "2024-10-12"
    },
    {
      "title": "Second Blog",
      "desc": "the description about the blog goes here.",
      "created_at": "2024-10-12"
    }
  ]

  return (
    <div className="relative pb-16 mt-12">
      <div className="pt-16 space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="flex items-center justify-center">
          <div>
            <h2 className="text-4xl">This page is under the construction 🚧</h2>
            <div className="flex justify-center">
              <h3 className="text-2xl">Stay Tuned!</h3>
              <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                {/* <div className="mx-auto lg:mx-0 animate-fade-in-up">
                  <FadeInSection>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                      Blogs
                    </h2>
                  </FadeInSection>
                </div> */}
                <hr />
                {/* {blogs.map((record, index) => {
                  return (
                    <div className="mt-4" key={record.title}>
                      <FadeInSection>
                        <Card>
                          <BlogCard blogDetails={record} index={index} />
                        </Card>
                      </FadeInSection>
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
