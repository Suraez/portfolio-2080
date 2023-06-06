import Link from "next/link";
import React from "react";
import { Card } from "../components/card";
import { Eye, ChevronsRight } from "lucide-react";
import FadeInSection from "../components/fadeInUp";

const projectData = [
  {
    id: 1,
    name: "Nepali News Headline Generator",
    description: `This project is about generating the news headline after giving seeding two or three words.
      The dataset is scraped from the Nepal most popular news TV channel website Ekantipur which contains the 
      headline of the news. And the word dictionary is build on top of the words present in those headlines.
      The Model is deployed on the Streamlit for demo purposes.
    `,
    tags: ["NLP", "Deep Learning", "Tensorflow", "Text Generation", "Streamlit"],
    demoURL: "https://nepali-generator.streamlit.app/",
  },
  {
    id: 2,
    name: "LIS Developer Image Classification",
    description: `A simple image classification model that is trained on the custom dataset for detecting the developers at LIS Nepal Pvt. Ltd.`,
    tags: ["Deep Learning", "Tensorflow", "Image Classification", "Streamlit"],
    demoURL: "https://lis-dev.streamlit.app/",
  },
  {
    id: 3,
    name: "Speech Recognition System",
    description: `A model which accepts recorded audio as input and output the words spoken
     in the audio along with the metrics such as Word Error Rate (WER) and Character Error Rate(CER). We used transfer learning on the pre-trained model
     provided by the Google - Transformers on the open source LibriSpeech Audio Dataset 
     which has approximately of 1000 hours and is sampled at the rate of 16KHz.
     `,
    tags: ["Deep Learning", "Tensorflow", "Speech Recognition", "LibriSpeech Dataset"],
    demoURL: "#",
  },
  {
    id: 4,
    name: "Mesla - A subtle clone of Stack Overflow",
    description: `This was our minor project in the college senior years in which we used the most popular MERN stack to develop a web app which
    can help students ask question related to their curriculum and get answers from the peers, seniors or teachers. It also had a fund raising feature
    as we integrated the Nepal digital wallet - Khalti so that visitors who get their question answered can donate some amount like 10 or so.
     `,
    tags: ["Mongo DB", "Express", "React", "Node.js"],
    demoURL: "#",
  },
  {
    id: 5,
    name: "Bookbytes - Buy & Sell Used Books",
    description: `This was my own software engineering project in which i develop a web app that allowed students of my campus - Western Region Campus
    to sell and buy used books and notes. Furthermore, it also provided free pdfs of all
    faculties for the students to download. 
    .
     `,
    tags: ["Express", "Handlebars", "MongoDB", "Node.js"],
    demoURL: "#",
  },
];

export default async function ProjectsPage() {
  return (
    <div className="relative pb-16 mt-12">
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="w-full mx-auto lg:mx-0">
          <h2 className="text-base md:text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400 text-sm md:text-2xl">
            Some of the projects listed below are college projects and some are on my own
            time.
          </p>
        </div>
        <div className="w-full h-px bg-blue-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {projectData.map((project) => {
            return (
              <FadeInSection>
                <Card key={project.id}>
                  <Link href={`/projects/${project.id}`}>
                    <div className="flex-col space-y-3 relative h-full w-full p-4 md:p-8">
                      {/* <div className="flex justify-between gap-2 items-center">
                        <div className="text-xs text-zinc-100">Apr 1, 2023</div>
                        <span className="text-zinc-500 text-xs flex items-center gap-1">
                          <Eye className="w-4 h-4" />2
                        </span>
                      </div> */}

                      <h2
                        id="featured-post"
                        className="mt-4 text-base md:text-2xl font-bold  text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                      >
                        {project?.name}
                      </h2>
                      <p className="text-sm md:text-xl mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                        {project?.description}
                      </p>

                      <Link
                        href={project?.demoURL}
                        className="text-sm md:text-xl flex items-center duration-200 text-zinc-400 hover:text-zinc-100"
                      >
                        Demo Link
                        <ChevronsRight />
                      </Link>
                      <div className="flex space-x-2 items-center">
                        <p className="text-white text-sm md:text-xl">Tags: </p>
                        {project?.tags.map((tag) => {
                          return (
                            <span
                              className="bg-blue-400 p-2 rounded-3xl text-sm md:text-xl"
                              key={tag}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>

                      <div className="mt-2 bottom-4 md:bottom-8">
                        <p className="text-zinc-200 hover:text-zinc-50 hidden lg:block">
                          Read more <span aria-hidden="true">&rarr;</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </Card>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}
