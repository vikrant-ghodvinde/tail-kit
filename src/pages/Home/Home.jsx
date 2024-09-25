/* eslint-disable react/no-unescaped-entities */
import { ChevronsRightIcon, GithubIcon } from "@/icons";
import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header/Header";
import { HOMEPATH, SOCIALPATH } from "@/lib/routes/path";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <section className="relative overflow-x-hidden">
        <div className="container">
          <div className="w-full h-full lg:min-h-[calc(100vh-64px)] py-20 lg:py-0 flex items-center">
            <div className="grid grid-cols-12 gap-y-10 lg:gap-10">
              <div className="col-span-12 lg:col-span-6 lg:py-20">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
                  <span className="lowercase block font-extrabold">
                    Tail-Kit
                  </span>{" "}
                  Components and Design Elements
                </h1>
                <p className="my-5">
                  <span className="lowercase">Tail-Kit</span> offers a
                  comprehensive collection of free design components and UI
                  elements tailored specifically for Tailwind CSS projects.
                  Built on top of Tailwind CSS 3.4 and higher,{" "}
                  <span className="lowercase">Tail-Kit</span> provides
                  developers with a seamless and modern approach to building
                  responsive, highly customizable interfaces. Whether you're
                  working with HTML, ReactJS, Next.js, Vue.js, or Angular, these
                  components are fully compatible, ensuring smooth integration
                  across different frameworks and technologies.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    to={HOMEPATH.INTRODUCTION}
                    className="inline-flex items-center justify-center gap-1 whitespace-nowrap text-xs py-2 px-3 text-white dark:text-black bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-white/80 rounded-md transition-all duration-300"
                  >
                    Get Started <ChevronsRightIcon size={16} />
                  </Link>
                  <Link
                    to={SOCIALPATH.GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 whitespace-nowrap text-xs py-2 px-3 text-white dark:text-black bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-white/80 rounded-md transition-all duration-300"
                  >
                    <GithubIcon />
                    GitHub
                  </Link>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <img
                  src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                  alt=""
                  className="lg:absolute lg:top-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
