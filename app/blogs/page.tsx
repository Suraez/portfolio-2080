"use client";
import { Github, Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import FadeInSection from "../components/fadeInUp";

const BlogCard = (blogDetails: any) => {
  // console.log(blogDetails);
  
  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="text-zinc-300 animate-fade-in-up w-full">
        <h2 className="text-base md:text-2xl animate-fade-in-up text-center md:text-left">
          {blogDetails.blogDetails.title}
        </h2>
        <h4 className="text-xl md:text-xl animate-fade-in-up text-center md:text-left">
          {blogDetails.blogDetails.desc}
        </h4>
        <div className="flex justify-between items-center mt-2">
          <h4 className="text-base md:text-l animate-fade-in-up text-center md:text-left">
            {blogDetails.blogDetails.created_at}
          </h4>
          <h4 className="text-base animate-fade-in-up text-center md:text-left ml-auto">
            {blogDetails.blogDetails.time}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default function Example() {

  const blogs =[
    {
      "title": "HOW TO CONNECT TO NJIT CISCO SECURE CLIENT VPN ?",
      "desc": "A step by step guide to connect to NJIT VPN.",
      "time": "2 mins read",
      "created_at": "2024-10-12",
      "slug": "connect-vpn-njit"
    },
    // {
    //   "title": "Second Blog",
    //   "desc": "the description about the blog goes here.",
    //   "created_at": "2024-10-12"
    // },
    // {
    //   "title": "Second Blog",
    //   "desc": "the description about the blog goes here.",
    //   "created_at": "2024-10-12"
    // }
  ]

  return (
    <div className="pb-16 mt-12">
      <div className="pt-16 w-full space-y-8">
        <div className="flex flex-col items-center justify-center">
            {/* <h2 className="text-4xl">This page is under the construction 🚧</h2> */}
              {/* <h3 className="text-2xl">Stay Tuned!</h3> */}
              <div className="px-16 w-full space-y-8">
                <div className="mx-auto lg:mx-0 animate-fade-in-up">
                  <FadeInSection>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                      Blogs
                    </h2>
                  </FadeInSection>
                </div>
                <hr />
                {blogs.map((record, index) => {
                  return (
                    <div className="w-full px-24" key={record.title}>
                      <FadeInSection>
                        <Card>
                          <Link href={`/blogs/${record.slug}`}>
                            <BlogCard blogDetails={record} index={index} />
                          </Link>
                        </Card>
                      </FadeInSection>
                    </div>
                  );
                })}
              </div>
        </div>
      </div>
    </div>
  );
}
