import React, { Fragment } from "react";
import NavBar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/SideBar/SideBar";
import { sidebar_list } from "./SideBarData";
import meeting from "../../Assest/meeting4.webp";
import TrainingPage from "../SideBarListPage/Training/Training";
import WhyWeMatter from "./WhyWeMatter/WhyWeMatter";
import ThinkingLab from "./ThinkingLab/ThinkingLab";
import Conference from "../SideBarListPage/Conference";
import Videos from "../SideBarListPage/Videos/Videos";
import Meeting from "../SideBarListPage/Meeting";
import Webinars from "../SideBarListPage/Webinars";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <Fragment>
      <NavBar />
      {/* background Image */}
      <div
        className="landingPage_container"
        style={{
          backgroundImage: `url(${meeting})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "90vh",
        }}
      >
        {/* side bar Components  */}
        <SideBar sidebar_list={sidebar_list} />
      </div>

      <WhyWeMatter />
      <ThinkingLab />

      <div className="landing_center_page">
        {/* Training Page  */}
        <h1 className="landing_center_heading">Our Trainings</h1>
        <TrainingPage />

        {/* meeting page */}
        <h1 className="landing_center_heading">Our Meetups</h1>
        <Meeting />

        {/* Webinar page */}
        <h1 className="landing_center_heading">Our Webinars</h1>
        <Webinars />

        {/* conference page */}
        <div className="landing_conference">
          <h1 className="landing_center_heading">Our Conference</h1>
          <Conference />
        </div>
        <h1 className="landing_center_heading">Videos</h1>
        <Videos />
      </div>
    </Fragment>
  );
}
