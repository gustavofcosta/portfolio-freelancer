import React from "react";

const Header = () => {
  return (
    <div>
      <header className="relative mx-10vw">
        <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl h-auto pt-24 lg:min-h-[10rem] lg:pb-12 lg:mb-64">
          <div className="col-span-full mb-12 lg:mb-0 flex items-center justify-center lg:col-span-7 lg:col-start-6 lg:-mt-20 lg:-mr-5vw lg:px-0">
            <img
              className="h-auto w-full object-contain max-h-75vh animate-pulse"
              src="/rocket.png"
              alt=""
            />
          </div>
          <div className="col-span-full pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5">
            <div className="flex flex-auto flex-col">
              <div className="">
                <h2 className="leading-tight text-3xl md:text-4xl text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                  ab, maiores quisquam aliquid in maxime mollitia quas quod
                  repellat ius.
                </h2>
              </div>
              <div
                className="mt-14 flex flex-col space-y-4"
                style={{ opacity: "1", transform: "none" }}
              >
                <div className="mr-auto flex flex-col gap-4 hover:opacity-50">
                  <a
                    href="/"
                    className="relative inline-flex text-lg font-medium focus:outline-none opacity-100 disabled:opacity-50 transition"
                  >
                    <div className="focus-ring absolute inset-0 transform rounded-full opacity-y-100 transition disabled:opacity-50 bg-inverse"></div>
                    <div className="relative flex h-full items-center justify-center whitespace-nowrap text-inverse space-x-5 px-11 py-6">
                      Fale comigo
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
