import React, { useState } from "react";
import Modal from "../utils/Modal";

import HeroImage from "../images/tv2.svg";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-hero">
      {/* Illustration behind hero content */}
      {/* <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none "
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="yellow" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="140" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-yellow font-Lexend"
              data-aos="zoom-y-out"
            >
              Extra benefits that don't break the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green to-yellow">
                budget
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-white font-average-400"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Your team is important to you. Show them you value their time
                outside of work with extra fringe benefits that don't break the
                budget.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                {/* <div>
                  <a
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#0"
                  >
                    Start free trial
                  </a>
                </div> */}
                {/* <div>
                  <a
                    className="btn text-hero bg-yellow font-Lexend hover:bg-green w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    Learn more
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center "
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              {/* <img
                  className="mx-auto"
                  src={HeroImage}
                  width="768"
                  height="432"
                  alt="Hero"
                /> */}

              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold  bg-green tracking-wide text-yellow transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
              >
                Join the waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
