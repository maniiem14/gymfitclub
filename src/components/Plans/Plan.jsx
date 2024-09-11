import React from "react";
import "./Plan.css";
import whiteTick from "../../assets/whiteTick.webp";
import { plansData } from "../../data/plansData";
const Plan = () => {
  return (
    <div className="plans-container" id="Plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      {/* Plans Card */}

      <div className="plans">
        {plansData.map((plan, i)=> (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>₹ {plan.price} <span></span>
            <div className="features">
              {plan.features.map((feature, i)=> (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="white tick" />
                  <span>{feature}</span>
                </div>
        ))}
            </div>
            <div>
              <span>See more benefits - </span>
            </div>
              <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
