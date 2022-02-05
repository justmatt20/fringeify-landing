import React from "react";

function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-16">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="bg-green rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl"
            data-aos="zoom-y-out"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center ">
              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-hero mb-2 font-Lexend">
                  Join the waitlist!
                </h3>
                <p className="text-gray-900 text-lg opacity-75 font-average-400">
                  Join our waitlist to get notified when we launch.
                </p>
              </div>

              {/* CTA button */}
              <div>
                <a
                  className="btn text-hero bg-yellow hover:text-green font-average-400"
                  href="http://eepurl.com/hTX3qf"
                >
                  Join the waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
