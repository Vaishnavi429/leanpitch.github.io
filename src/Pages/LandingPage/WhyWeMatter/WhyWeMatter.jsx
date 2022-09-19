import React from "react";
import arrow from "../../../Assest/arrow.png";
import "./WhyWeMatter.css";

export default function WhyWeMatter() {
  return (
    <div className="matter_container">
      <div className="matter_header">
        <div className="matter_heading">
          <h1>Why We Matter</h1>
          <div className="arrow_image">
            <img src={arrow} style={{ width: "100%" }} />
          </div>
        </div>
        <div>
          <div className="matter_textArea_container">
            <div className="matter_text_area">
              <h1>Creative Thinking for creative Impact!</h1>
              <p style={{ marginTop: "10px" }}>
                Leanpitch is problem solving. Whether it's your kid asking for a
                solution to his day to day problems or the rise in threats of
                Global Warming, it's evident that the whole human kind needs to
                be product thinkers. We, at Product Thinking community, strive
                to provide such a platform for practitioners to come together
                and learn from each other about the craft of building products.
                This Platform is run by the community for the community. We are
                a community with 46k+ product thinkers hosting various events
                across India: Webinars every week, meet-ups every month in every
                city, two conference a year.
              </p>
            </div>

            <div className="matter_right_container">
              <div className="matter_right_image">Image</div>
            </div>
          </div>
        </div>

        <button className="community_btn">Join Our Community</button>
      </div>
    </div>
  );
}
