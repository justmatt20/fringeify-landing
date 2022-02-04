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
            <div className="flex flex-col lg:flex-row justify-between items-center font-aven">
              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-hero mb-2">Ready to get started?</h3>
                <p className="text-gray-900 text-lg opacity-75">
                  We have a generous free tier available to get you started
                  right away.
                </p>
              </div>

              {/* CTA button */}
              <div>
                <a
                  className="btn text-hero bg-yellow hover:text-green"
                  href="#0"
                >
                  Get started for free
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
