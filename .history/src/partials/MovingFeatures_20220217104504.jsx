import React from "react";

function FeaturesAnimation() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className=" left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2 ">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 font-Lexend mb-4 text-hero">
              Custom built ecosystem
            </h1>
            <p className="text-xl font-average-400 text-gray-600 ">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est.
            </p>
          </div>

          {/* Custom animation */}
          <div className="max-w-3xl mx-auto">
            <div className="relative flex justify-center items-center overflow-hidden">
              {/* Big circle behind: light layout */}
              <svg
                className=""
                width="432"
                height="432"
                viewBox="0 0 432 432"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="50%"
                    cy="50%"
                    fx="50%"
                    fy="50%"
                    r="48.919%"
                    id="prefix__a"
                  >
                    <stop stopColor="#B2F5EA" stopOpacity=".64" offset="0%" />
                    <stop stopColor="#B2F5EA" stopOpacity="0" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <circle fill="url(#prefix__a)" cx="216" cy="216" r="216" />
                  <g transform="translate(22 22)" stroke="#0fbe7b">
                    <circle strokeOpacity=".04" cx="194" cy="194" r="193.5" />
                    <circle
                      strokeOpacity=".08"
                      strokeWidth="2"
                      cx="194"
                      cy="194"
                      r="153"
                    />
                    <circle
                      strokeOpacity=".16"
                      strokeWidth="2.5"
                      cx="194"
                      cy="194"
                      r="112.75"
                    />
                  </g>
                </g>
              </svg>

              {/* Big circle behind: dark layout */}
              {/* <svg
                className=""
                width="432"
                height="432"
                viewBox="0 0 432 432"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="50%"
                    cy="50%"
                    fx="50%"
                    fy="50%"
                    r="50%"
                    id="circleill_a"
                  >
                    <stop stopColor="#1D1D21" stopOpacity="0" offset="0%" />
                    <stop stopColor="#2E2E33" stopOpacity=".32" offset="100%" />
                  </radialGradient>
                </defs>
                <circle
                  cx="216"
                  cy="216"
                  r="216"
                  fill="url(#circleill_a)"
                  fillRule="evenodd"
                />
              </svg> */}

              {/* Moving tags */}
              <div className="absolute inset-0 font-average-400">
                <div className="absolute font-medium px-4 py-2 text-white  bg-gradient-to-tr from-indigo-500 to-indigo-400   rounded-full inline-flex items-center justify-center tags-animation mt-28">
                  Benefits
                </div>
                <div className="absolute font-medium px-4 py-2 text-white bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500   rounded-full inline-flex items-center justify-center tags-animation tags-1 mt-72">
                  Appreciation
                </div>
                <div className="absolute font-medium px-4 py-2 text-white  bg-gradient-to-tr from-pink-500 to-pink-400   rounded-full inline-flex items-center justify-center tags-animation tags-2 mt-40">
                  Morale
                </div>
                <div className="absolute font-medium px-4 py-2 text-white  bg-gradient-to-tr from-indigo-500 to-indigo-400  rounded-full inline-flex items-center justify-center tags-animation tags-3 mt-80 top-4">
                  Productivity
                </div>
                <div className="absolute font-medium px-4 py-2 text-white  bg-gradient-to-tr from-indigo-500 to-indigo-400  rounded-full inline-flex items-center justify-center tags-animation tags-4 mt-56">
                  Retention
                </div>
                <div className="absolute font-medium px-4 py-2 text-white  bg-gradient-to-tr from-pink-500 to-pink-400  rounded-full inline-flex items-center justify-center tags-animation tags-4">
                  Budget Friendly
                </div>
                <div className="absolute font-medium px-4 py-2 text-white bg-gradient-to-tr from-teal-500 to-teal-400  rounded-full inline-flex items-center justify-center tags-animation tags-5 mt-14">
                  Recruiting
                </div>
                <div className="absolute font-medium px-4 py-2 text-white  bg-gradient-to-tr from-purple-500 to-purple-400  rounded-full inline-flex items-center justify-center tags-animation tags-5 mt-80 top-4">
                  Fringeify
                </div>
                <div className="absolute font-medium px-4 py-2 text-white  bg-gradient-to-tr from-indigo-500 to-indigo-400  rounded-full inline-flex items-center justify-center tags-animation tags-6 mt-40">
                  Payroll
                </div>
                <div className="absolute font-medium px-4 py-2 text-white  bg-gradient-to-tr from-indigo-500 to-indigo-400  rounded-full inline-flex items-center justify-center tags-animation tags-7">
                  Team
                </div>
                <div className="absolute font-medium px-4 py-2 text-white  bg-gradient-to-tr from-pink-500 to-pink-400  rounded-full inline-flex items-center justify-center tags-animation tags-7 mt-72">
                  Engagement
                </div>
                <div className="absolute font-medium px-4 py-2 text-white  bg-gradient-to-tr from-purple-500 to-purple-400  rounded-full inline-flex items-center justify-center tags-animation tags-8 mt-28">
                  Reviews
                </div>
                <div className="absolute font-medium px-4 py-2 text-white  bg-gradient-to-tr from-teal-500 to-teal-400  rounded-full inline-flex items-center justify-center tags-animation tags-9 mt-80 top-4">
                  Perks
                </div>
                <div className="absolute font-medium px-4 py-2 text-white  bg-gradient-to-tr from-teal-500 to-teal-400  rounded-full inline-flex items-center justify-center tags-animation tags-10 mt-56">
                  Trust
                </div>
              </div>

              {/* Inner cricle */}
              <svg
                className="absolute rounded-full shadow-xl"
                width="148"
                height="148"
                viewBox="0 0 148 148"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="74"
                  cy="74"
                  r="74"
                  fill="#042976"
                  fillRule="evenodd"
                />
              </svg>
              {/* spinning circle */}
              <svg
                className="absolute w-12 h-12 animate-spin"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    x1="26%"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    id="logo_a"
                  >
                    <stop stopColor="#3ABAB4" offset="0%" />
                    <stop stopColor="#7F9CF5" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="26%"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    id="logo_b"
                  >
                    <stop stopColor="#3ABAB4" offset="0%" />
                    <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                  </linearGradient>
                </defs>
                <path
                  d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z"
                  fill="url(#logo_a)"
                />
                <path
                  d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z"
                  fill="url(#logo_b)"
                />
              </svg>
              {/* Side gradients */}
              <div
                className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white "
                aria-hidden="true"
              ></div>
              <div
                className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white "
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesAnimation;
