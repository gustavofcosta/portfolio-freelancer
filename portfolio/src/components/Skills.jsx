import React from "react";

const Skills = ({ skill }) => {
  return (
    <div className="text-center h-16 w-16 mb-8">
      <img className="h-full" src={skill.img} alt="" />
      <h3 className="pt-2">{skill.name}</h3>
    </div>
  );
};

export default Skills;
