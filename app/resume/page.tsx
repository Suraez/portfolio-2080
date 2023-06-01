import React from "react";
import { Navigation } from "../components/nav";
import { Briefcase, BookOpen, Medal } from "lucide-react";
import { Card } from "../components/card";
import FadeInSection from "../components/fadeInUp";
const ExperienceCard = (cardData: any) => {
  return (
    <div className="flex container p-4">
      <div className="container w-1/12">
        <div className="container h-20 w-20 bg-white rounded-full flex justify-center items-center">
          <Briefcase size="52" color="black" />
        </div>
      </div>
      <div className="container w-11/12 text-zinc-300 animate-fade-in-up">
        <h4 className="text-xl animate-fade-in-up">{cardData.cardData.years}</h4>
        <h3 className="text-4xl animate-fade-in-up">{cardData.cardData.title}</h3>
        <h4 className="text-2xl animate-fade-in-up">{cardData.cardData.location}</h4>
        <ul className="list-disc mt-4 text-lg animate-fade-in-up">
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
    <div className="flex container p-4">
      <div className="container w-1/12">
        <div className="container h-20 w-20 bg-white rounded-full flex justify-center items-center">
          <BookOpen size="52" color="black" />
        </div>
      </div>
      <div className="container w-11/12 text-zinc-300">
        <h4 className="text-xl">{academicDetails.academicDetails.year}</h4>
        <h3 className="text-4xl">{academicDetails.academicDetails.board}</h3>
        <h4 className="text-2xl">{academicDetails.academicDetails.name}</h4>
        <h4 className="text-lg">Grade: {academicDetails.academicDetails.grade} / 100%</h4>
      </div>
    </div>
  );
};

const AwardRecord = (awardDetails: any) => {
  return (
    <div className="flex container p-4">
      <div className="container w-1/12">
        <div className="container h-20 w-20 bg-white rounded-full flex justify-center items-center">
          <Medal size="52" color="black" />
        </div>
      </div>
      <div className="container w-11/12 text-zinc-300">
        <h4 className="text-4xl">{awardDetails.awardDetails.achievement}</h4>
        <h3 className="text-2xl">{awardDetails.awardDetails.platform}</h3>
        <h4 className="text-xl">{awardDetails.awardDetails.description}</h4>
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

const Resume = () => {
  return (
    <div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      {/* experiences section */}
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Experiences
          </h2>
        </div>
        <hr />
        <div className="container">
          <Card>
            <ExperienceCard cardData={cardData} />
          </Card>
        </div>
      </div>

      {/* Education Section */}
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0 animate-fade-in-up">
          <FadeInSection>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Education
            </h2>
          </FadeInSection>
        </div>
        <hr />
        <div className="container">
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
      </div>

      {/* Awards section */}
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Awards
          </h2>
        </div>
        <hr />
        <div className="container">
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
      </div>

      {/* Tools & technologies */}
    </div>
  );
};

export default Resume;
