import React, { useState, useEffect } from "react";

import Experience from "./Experience";
import Skills from "./Skills";

import data from "../data/data";

const Main = () => {
  const [mySkills, setMySkills] = useState([]);

  useEffect(() => {
    setMySkills(data);
  }, []);

  return (
    <main>
      <div className="relative mx-10vw mt-32">
        <div className="relative grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl">
          <div className="col-span-full lg:col-span-4 grid justify-center items-center">
            <h2 className="text-center leading-tight text-3xl md:text-4xl text-white mb-10">
              Minhas Skills
            </h2>
            <div className="inline-grid grid-cols-3 gap-10">
              {mySkills.map((skill, index) => (
                <Skills key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="col-span-full mt-12 lg:col-span-6 lg:col-start-6 lg:mt-0">
            <h2 className="leading-tight text-3xl md:text-4xl text-white">
              Olá, eu sou Gustavo Fernandes Costa. Lorem ipsum, dolor sit amet
              consectetur.
            </h2>
            <p className="text-2xl font-medium md:text-3xl text-gray-400 mt-12">
              Especialista em desenvolvimento Front-End, eu ajudo pessoas a
              desenvolverem seus sonhos e terem mais resultados pelo meio sa
              programação
            </p>
          </div>
        </div>
      </div>
      <div className="h-56 lg:h-64"></div>
      <div className="relative mx-10vw py-10 md:py-24 lg:pb-20 lg:pt-36">
        <div className="absolute inset-0 -mx-5vw">
          <div className="bg-gray-800 mx-auto h-full w-full max-w-8xl rounded-lg"></div>
        </div>
        <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl">
          <Experience />
          <Experience />
          <Experience />
        </div>
      </div>
    </main>
  );
};

export default Main;
