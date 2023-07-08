import React from "react";
import { Navigation } from "../components/nav";
import { Briefcase, BookOpen, Medal, Download } from "lucide-react";
import { Card } from "../components/card";
import FadeInSection from "../components/fadeInUp";
import Link from "next/link";
const ExperienceCard = (cardData: any) => {
  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="w-full md:w-1/12">
        <div className="h-20 w-20 mx-auto bg-white rounded-full flex justify-center items-center">
          <Briefcase size="52" color="black" />
        </div>
      </div>
      <div className="container w-11/12 text-zinc-300 animate-fade-in-up mt-2">
        <h4 className="text-base md:text-xl animate-fade-in-up text-center md:text-left">
          {cardData.cardData.years}
        </h4>
        <h3 className="text-xl md:text-4xl animate-fade-in-up text-center md:text-left">
          {cardData.cardData.title}
        </h3>
        <h4 className="text-base md:text-2xl animate-fade-in-up text-center md:text-left">
          {cardData.cardData.location}
        </h4>
        <ul className="list-disc mt-4 text-sm md:text-lg animate-fade-in-up">
          {cardData.cardData.responsilities.map((res: any) => (
            <li key={res}>{res}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const AcademicCard = (academicDetails: any) => {
  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="w-full md:w-1/12">
        <div className="h-20 w-20 mx-auto bg-white rounded-full flex justify-center items-center">
          <BookOpen size="52" color="black" />
        </div>
      </div>
      <div className="w-full md:w-11/12 text-zinc-300 animate-fade-in-up">
        <h4 className="text-base md:text-xl animate-fade-in-up text-center md:text-left">
          {academicDetails.academicDetails.year}
        </h4>
        <h3 className="text-xl md:text-4xl animate-fade-in-up text-center md:text-left">
          {academicDetails.academicDetails.board}
        </h3>
        <h4 className="text-base md:text-2xl animate-fade-in-up text-center md:text-left">
          {academicDetails.academicDetails.name}
        </h4>
        <h4 className="list-disc mt-4 text-sm md:text-lg animate-fade-in-up text-center md:text-left">
          Grade: {academicDetails.academicDetails.grade} / 100%
        </h4>
      </div>
    </div>
  );
};

const AwardRecord = (awardDetails: any) => {
  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="w-full md:w-1/12">
        <div className="h-20 w-20 mx-auto bg-white rounded-full flex justify-center items-center">
          <Medal size="52" color="black" />
        </div>
      </div>
      <div className="w-full md:w-11/12 text-zinc-300 animate-fade-in-up">
        <h4 className="text-base md:text-xl animate-fade-in-up text-center md:text-left">
          {awardDetails.awardDetails.achievement}
        </h4>
        <h3 className="text-base md:text-2xl animate-fade-in-up text-center md:text-left">
          {awardDetails.awardDetails.platform}
        </h3>
        <h4 className="text-base md:text-xl animate-fade-in-up text-center md:text-left">
          {awardDetails.awardDetails.description}
        </h4>
      </div>
    </div>
  );
};

const academicRecord = [
  {
    year: "2015-2016",
    board: "School Of Leaving Certificate(S.L.C.)",
    name: "New Modern Higher Secondary School, Jaleshwor-5, Nepal",
    grade: "81.625%",
  },
  {
    year: "2016-2018",
    board: "High School - National Examination Board (NEB)",
    name: "V.S. Niketan Higher Secondary School, Minbhawan, Kathmandu",
    grade: "85.20%",
  },
  {
    year: "2018-2022",
    board: "Bachelor of Engineering in Computer Science",
    name: "Tribhuwan University",
    grade: "81.4%",
  },
];
const cardData = {
  years: "May 2022 - Present",
  title: "Associate Software Engineer",
  location: "LIS Nepal Pvt. Ltd. Manbhawan, Kathmandu, Nepal",
  responsilities: [
    "Looking over the requirement and feasibility analysis of the software products - Project Management System(PMS) and Resource Planning System (RPS).",
    "Wireframe designing in Figma for new feature UI and its implementation in code that ensures quality, performance, and responsiveness of UI leading to enhanced user experience (UX).",
    "Writing the database languages - DDL, DML, and DCL for relational databases - PostgreSQL & MySQL.",
    "Developing the RESTful APIs with authentication and authorization in the backend technologies - Laravel (PHP) and .NET.",
    "Integration of created APIs with frontend technology, React using GraphQL and its testing using Postman.",
    "Bugs fixing, regression testing, and code refactoring to improve code quality.",
    "Maintenance and deployment of build files onto servers using RDP (Remote Desktop Connection) & FileZilla.",
    "Writing the Dockerfile for creating docker images and pushing those images to create containers onto servers for deployment.",
  ],
};

const awardRecord = [
  {
    achievement: "Winner of National Level Coding Competition",
    platform: "i-CES",
    description:
      "Organized by i-CES , Western Regional Campus (Pashchimanchal Campus), Pokhara, Nepal.",
  },
  {
    achievement: "1st position on URI",
    platform: "URI online Judge",
    description: "Placed at 1st postion in Nepal Country.",
  },
  {
    achievement: "4227 rank on Hackerrank",
    platform: "Hackerrank",
    description: "Id: oberais50",
  },
];

const circularArray = [
  {
    name: "Node.js",
    score: 80,
  },
  {
    name: "Laravel",
    score: 70,
  },
  {
    name: "Deep Learning",
    score: 50,
  },
];

const lineArray = [
  {
    name: "HTML5",
    score: 80,
  },
  {
    name: "CSS3",
    score: 60,
  },
  {
    name: "React.js",
    score: 80,
  },
  {
    name: "Flutter",
    score: 40,
  },
  {
    name: "Docker",
    score: 60,
  },
  {
    name: "Kubernetes",
    score: 50,
  },
  {
    name: "ELK stack (Data Visualization)",
    score: 50,
  },
  {
    name: "Tensorflow 2.0",
    score: 60,
  },
];

const Resume = () => {
  return (
    <div className="relative pb-16 mt-12">
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="head flex justify-between items-center">
          <div className="max-w-2xl lg:mx-0">
            <h2 className="text-md md:text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Experiences
            </h2>
          </div>
          <button className="bg-info py-2 px-4 text-black">
            <Link
              href="https://drive.google.com/uc?export=download&id=12Im6giL7hD3aqVeHjjfu5k1wdx5O6lYx"
              target="_blank"
            >
              <div className="download flex justify-center items-center space-x-2">
                <Download size="22" color="black" />
                <span className="text-xs md:text-base">MY RESUME</span>
              </div>
            </Link>
          </button>
        </div>
        <hr />
        <Card>
          <ExperienceCard cardData={cardData} />
        </Card>
      </div>

      {/* Education Section */}
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="mx-auto lg:mx-0 animate-fade-in-up">
          <FadeInSection>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Education
            </h2>
          </FadeInSection>
        </div>
        <hr />
        {academicRecord.map((record) => {
          return (
            <div className="mt-4" key={record.name}>
              <FadeInSection>
                <Card>
                  <AcademicCard academicDetails={record} />;
                </Card>
              </FadeInSection>
            </div>
          );
        })}
      </div>

      {/* Awards section */}
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Awards
          </h2>
        </div>
        <hr />
        {awardRecord.map((record) => {
          return (
            <FadeInSection key={record.achievement}>
              <div className="mt-4" key={record.achievement}>
                <Card>
                  <AwardRecord awardDetails={record} />;
                </Card>
              </div>
            </FadeInSection>
          );
        })}
      </div>

      {/* Skills */}

      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Skills
          </h2>
        </div>
        <hr />
        {/* <div className="circle flex flex-col md:flex-row">
          {circularArray.map((ele) => (
            <div className="m-12 md:w-1/3" key={ele.name}>
              <Card>
                <div className="flex flex-col space-y-4 items-center p-12">
                  <span className="text-xs font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {ele.name}
                  </span>
                  <div
                    className="radial-progress bg-info text-info-content border-4 border-info"
                    style={{ "--value": `${ele.score}` }}
                  >
                    {ele.score + "%"}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div> */}

        <div className="line flex flex-wrap flex-col md:flex-row">
          {lineArray.map((ele) => (
            <div className="m-2 md:w-96">
              <div className="label flex flex-row justify-between">
                <span className="text-sm font-medium duration-150 lg:text-xl text-zinc-200 group-hover:text-white font-display">
                  {ele.name}
                </span>
                <span className="text-sm font-medium duration-150 lg:text-xl text-zinc-200 group-hover:text-white font-display">
                  {ele.score + "%"}
                </span>
              </div>
              <progress
                className="progress progress-info w-100"
                value={ele.score}
                max="100"
              ></progress>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
