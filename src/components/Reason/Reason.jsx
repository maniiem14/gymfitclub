import React from "react";
import "./Reason.css";
import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
import image4 from "../../assets/image4.webp";
import tick from "../../assets/tick.webp";
import nb from "../../assets/nb.webp";
import adidas from "../../assets/adidas.webp";
import nike from "../../assets/nike.webp";
const Reason = () => {
  return (
    <div className="Reasons" id="Reasons">
      <div className="left-r">
        <img src={image1} alt="a gym boy pic" />
        <img src={image2} alt="a gym boy pic" />
        <img src={image3} alt="a gym boy pic" />
        <img src={image4} alt="a gym boy pic" />
      </div>
      <div className="right-r">
        <span>some reasons</span>

        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="tick symbol"></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="tick symbol"></img>
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="tick symbol"></img>
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="tick symbol"></img>
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          OUR PARTNERS
        </span>

        <div className="partners">
          <img src={nb} alt="nb logo" />
          <img src={adidas} alt="adidas logo" />
          <img src={nike} alt="nike logo" />
        </div>
      </div>
    </div>
  );
};

export default Reason;
