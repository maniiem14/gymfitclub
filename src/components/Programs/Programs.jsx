import React from "react";
import "./Programs.css";
import RightArrow from "../../assets/rightArrow.webp";
import { programsData } from "../../data/programsData";
const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/* Header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our </span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program, i) => (
          <div className="category" key={i}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="Right arrow image" />
            </div>
          </div>
))}
      </div>
    </div>
  );
};

export default Programs;
