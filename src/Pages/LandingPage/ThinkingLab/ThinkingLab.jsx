import React from "react";
import productwhite from "../../../Assest/productwhite.png"
import "./ThinkingLab.css";

export default function ThinkingLab() {
  return (
    <div className="thinking_lab_container">
      <div className="thinking_lab_detail">
        <h1 className="thinking_lab_heading">Leanpitch Thinking Labs</h1>
        <p>
          Product Thinking Community introduces PT Labe powered by Lesnitch
          Product Mallagers are BEING MERGES 30d are long researchers. Ther
          corosy to understan the problem, persistence to save them, and empathy
          to make the solutions easy makes them resourceful in solving Social
          Problems.</p> 
          <p>you have it in you and are looking for an opportunity to
          contribute back to society, join PT Laba. Become part of a product
          team of volunteers, pickup a social problem, swarm together design,
          and run experiments to find a problem solution fh, Present your
          discovery and be recognized at best Product Thinking Conference
          Product Thinking community will pursue further on implementing a
          solution in the subsequent cohorts, which you can again be part of.</p>
          <p>Share your interest by submitting your details. We will get back to
          you with more information.
        </p>
        <div className="thinking_lab_button">
        <button className="thinking_btn">
          View Detail
        </button>
        <button className="thinking_btn">
          Register Now
        </button>
        </div>
      </div>
      <div className="thinking_lab_right_image">
        <img src={productwhite}/>
      </div>
    </div>
  );
}
