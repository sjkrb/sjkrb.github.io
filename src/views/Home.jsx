import React from "react";
import { Link } from "react-router-dom";

import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div
        id="info"
        className="min-h-screen flex flex-col justify-center items-center">
        <div className="sm:w-[500px] w-screen p-5 py-20 text-lg select-none">
          <p className="mb-4">
            Hi! I'm a C++ && Qt Developer. At the moment I work @ MojPardazan Co. 
            a private contractor for embedded systems && software development.
          </p>
          <p className="mb-4">
            I'm a Linux enthusiast (particularly Arch), a Doc-worm who is addicted to try novel technologies.
            I'm a self-learner, a rationalist free thinker but your humorous teammate at the same time.
          </p>
          <p className="mb-4">
            Here is my
            <Link
              className="mx-2 px-2 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
              to="/#resume"
              title="Resume">
              Resume
            </Link>
            and
            <Link
              className="mx-2 px-2 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
              to="/#projects"
              title="Projects">
              Projects
            </Link>
            .
            {/* also sometimes i write about things on my
            <Link
              className="mx-2 px-2 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
              to="blog/">
              Blog
            </Link>
            . */}
          </p>
          <p className="mb-4">
            I am available to
            <a
              className="mx-2 px-2 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
              href="tel:+989376693558"
              title="Phone">
              Talk
            </a>
            /
            <a
              className="mx-2 px-2 bg-light-1 rounded-full text-dark-0 hover:text-light-0
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-light-1"
              href="mailto:sajjadkarbasi@gmail.com"
              title="Email">
              Chat
            </a>
            you can contacte me to talk about anything including psychology, philosophy, tech, gaming and etc. 
            feel free ;)
          </p>
          <p>
            Join me to play
            <a
              className="mx-2 px-2 bg-red-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-red-0"
              href="https://steamcommunity.com/id/lord_Nobunaga_oda"
              title="Dota2">
              Dota2
            </a>
            .
          </p>
          <div className="mt-5 flex flex-wrap gap-2 leading-snug">
            <a
              className="px-2 bg-dark-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-dark-0"
              href="https://github.com/sjkrb"
              title="Github">
              Github
            </a>
            <a
              className="px-2 bg-blue-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-blue-0"
              href="https://www.linkedin.com/in/sajjadkarbasi/"
              title="Linkedin">
              LinkedIn
            </a>
            <a
              className="px-2 bg-blue-1 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-blue-1"
              href="https://twitter.com/karbasi_sajjad"
              title="Twitter">
              Twitter
            </a>
            <a
              className="px-2 bg-blue-0 rounded-full
              transition duration-300  hover:bg-black hover:ring-2 hover:ring-blue-0"
              href="https://telegram.me/lord_nobunaga_oda/"
              title="Telegram">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
