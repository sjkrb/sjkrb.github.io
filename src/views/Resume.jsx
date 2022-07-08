import React, { useState } from "react";
import { Link } from "react-router-dom";
import { aboutMe, experiences, skills } from "../data";

export const Resume = () => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="flex flex-col items-center">
      <div className="md:w-4/5 w-full print:w-full">
        <div className="mb-5 p-4 border-dark-0 border-b-2 print:hidden">
          <div className="flex justify-between flex-wrap">
            <Link
              className="px-3 py-0.5 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
              to="/">
              Home
            </Link>
            <div>
              {showDetails ? (
                <span
                  className="px-3 py-0.5 bg-light-1 rounded-full text-dark-0 hover:text-light-0
            transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1 cursor-pointer"
                  onClick={() => setShowDetails(false)}>
                  Details
                </span>
              ) : (
                <span
                  className="px-3 py-0.5 bg-dark-0 rounded-full text-light-0 hover:text-light-0
            transition duration-300  hover:bg-black hover:ring-2 hover:ring-dark-0 cursor-pointer"
                  onClick={() => setShowDetails(true)}>
                  Details
                </span>
              )}
              <a
                className="ml-2 px-3 py-0.5 bg-yellow-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-yellow-0"
                href="/SajjadKarbasi.pdf"
                target="_blank">
                Download
              </a>
            </div>
          </div>
        </div>
        <div className="px-5 print:!p-0 divide-y-2 divide-dark-0">
          <div className="pb-4 flex flex-col justify-between md:flex-row print:flex-row">
            <div>
              <p className="print:text-4xl text-4xl font-bold">
                Sajjad Karbasi
              </p>
              <p className="print:text-2xl text-2xl">{aboutMe.title}</p>
            </div>
            <div className="flex flex-col print:text-sm whitespace-nowrap mt-5 md:mt-0 print:mt-0">
              <div className="mb-2 print:mb-1.5">
                <a
                  className="block max-w-[260px] px-3 py-0.5 font-bold bg-dark-0 rounded-full print:text-light-0
                            transition duration-300 hover:bg-black hover:ring-2 hover:ring-dark-0 print:bg-black"
                  href="https://sajjadkarbasi.ir"
                  title="Webpage">
                  <i className="fas fa-globe-americas text-light-0 mr-1.5" />{" "}
                  sajjadkarbasi.ir
                </a>
              </div>
              <div className="mb-2 print:mb-1.5">
                <a
                  className="block max-w-[260px] px-3 py-0.5 font-bold bg-red-0 rounded-full print:text-light-0
                            transition duration-300 hover:bg-black hover:ring-2 hover:ring-red-0"
                  href="mailto:sajjadkarbasi@gmail.com"
                  title="Email">
                  <i className="fas fa-at text-light-0 mr-1.5" />{" "}
                  sajjadkarbasi@gmail.com
                </a>
              </div>
              <div className="mb-2 print:mb-1.5">
                <a
                  className="block max-w-[260px] px-3 py-0.5 font-bold bg-yellow-0 rounded-full print:text-light-0
                            transition duration-300 hover:bg-black hover:ring-2 hover:ring-yellow-0 print:bg-yellow-0"
                  href="tel:+989376693558"
                  title="Phone">
                  <i className="fas fa-phone text-light-0 mr-1.5" />{" "}
                  +989376693558
                </a>
              </div>
              <div className="flex flex-wrap">
                <a
                  className="px-5 mr-3 py-0.5 font-bold bg-dark-0 rounded-full print:text-light-0
                            transition duration-300 hover:bg-black hover:ring-2 hover:ring-dark-0"
                  href="https://github.com/sjkrb"
                  title="Github">
                  <i className="fab fa-github-alt text-light-0" />
                </a>
                <a
                  className="px-5 mr-3 py-0.5 font-bold bg-blue-0 rounded-full print:text-light-0
                  transition duration-300 hover:bg-black hover:ring-2 hover:ring-blue-0"
                  href="https://www.linkedin.com/in/sajjadkarbasi/"
                  title="Linkedin">
                  <i className="fab fa-linkedin-in text-light-0" />
                </a>
                <a
                  className="px-5 mr-3 py-0.5 font-bold bg-blue-0 rounded-full print:text-light-0
                  transition duration-300 hover:bg-black hover:ring-2 hover:ring-blue-0"
                  href="https://twitter.com/karbasi_sajjad"
                  title="Twitter">
                  <i className="fab fa-twitter text-light-0" />
                </a>
                <a
                  className="px-5 py-0.5 font-bold bg-blue-0 rounded-full print:text-light-0
                  transition duration-300 hover:bg-black hover:ring-2 hover:ring-blue-0"
                  href="https://telegram.me/lord_nobunaga_oda/"
                  title="Telegram">
                  <i className="fab fa-telegram-plane text-light-0" />
                </a>
              </div>
            </div>
          </div>
          <div className="py-4 print:text-sm">
            <p className="mb-3 print:text-xl text-2xl font-bold">About Me</p>
            <div className="text-justify">
              {aboutMe.cover.map((line) => (
                <span> {line}</span>
              ))}
              {showDetails ? (
                <ul className="print:text-xs list-disc pl-4 pt-2 grid md:grid-cols-2 print:sm:grid-cols-2">
                  {aboutMe.info.map((info) => (
                    <li>{info}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
          <div className="py-4 print:text-sm">
            <p className="mb-3 print:text-xl text-2xl font-bold">Skills</p>
            <p className="mb-2">{skills.title}</p>
            <ul className="list-disc pl-4 grid sm:grid-cols-2 md:grid-cols-3 print:sm:grid-cols-3">
              {skills.data.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="py-4 print:text-sm">
            <p className="mb-3 print:text-xl text-2xl font-bold">Experiences</p>
            <div>
              {experiences
                .filter((exp) => exp.showExperiences)
                .map((exp) => (
                  <div
                    className={`py-2 first:pt-0 ${
                      exp.showExperiencesPrint ? "" : "print:hidden"
                    }`}>
                    <div className="flex justify-between">
                      <div>
                        <p className="print:text-lg text-lg font-semibold">
                          {exp.title}
                        </p>
                        <p className="print:text-base font-semibold">
                          {exp.company}
                        </p>
                        <div className="whitespace-nowrap sm:hidden">
                          <p className="print:text-xs text-sm font-semibold">
                            {exp.startDate} - {exp.endDate}
                          </p>
                          <p className="print:text-xs text-sm font-semibold">
                            {exp.location}
                          </p>
                          <p className="print:text-xs text-sm font-semibold">
                            {exp.type}
                          </p>
                        </div>
                        <div className="print:text-xs text-sm">
                          {exp.stack.map((stack) => (
                            <span className="text-green-1 print:text-green-0 font-semibold">
                              {stack},{" "}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right whitespace-nowrap hidden sm:block">
                        <p className="print:text-xs text-sm font-semibold">
                          {exp.startDate} - {exp.endDate}
                        </p>
                        <p className="print:text-xs text-sm font-semibold">
                          {exp.location}
                        </p>
                        <p className="print:text-xs text-sm font-semibold">
                          {exp.type}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 mb-2 text-justify">
                      {exp.about.map((line) => (
                        <span> {line}</span>
                      ))}
                    </div>
                    {exp.links?.length > 0 ? (
                      <div className="flex flex-row flex-wrap">
                        {exp.links.map((link) => (
                          <a
                            className="px-3 py-0.5 mx-1 my-1 font-bold bg-blue-0 rounded-full print:text-light-0
                            transition duration-300 hover:bg-black hover:ring-2 hover:ring-blue-0
                            print:text-sm print:px-2 print:py-0"
                            href={link.href}>
                            {link.title}
                          </a>
                        ))}
                      </div>
                    ) : null}
                    {showDetails && exp.responsibilities?.length > 0 ? (
                      <div className="mt-2 mb-2 print:text-sm text-justify">
                        <p className="font-bold">{exp.responsible}</p>
                        <ul className="list-disc pl-4">
                          {exp.responsibilities.map((line) => (
                            <li>{line}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {showDetails && exp.contributions?.length > 0 ? (
                      <div className="mt-2 mb-2 print:text-sm text-justify">
                        <p className="font-bold">{exp.contribution}</p>
                        <ul className="list-disc pl-4">
                          {exp.contributions?.map((line) => (
                            <li>{line}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {showDetails && exp.achievements?.length > 0 ? (
                      <div className="mt-2 mb-2 print:text-sm text-justify">
                        <p className="font-bold">{exp.achievement}</p>
                        <ul className="list-disc pl-4">
                          {exp.achievements?.map((line) => (
                            <li>{line}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="print:hidden pb-20"></div>
      </div>
    </div>
  );
};
