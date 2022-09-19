
import Training from "../SideBarListPage/Training/Training";
import Meeting from "../SideBarListPage/Meeting";
import Webinars from "../SideBarListPage/Webinars";
import Conference from "../SideBarListPage/Conference";
import Videos from "../SideBarListPage/Videos/Videos";
import PMSpeakSeries from "../SideBarListPage/PMSpeakSeries";
import Blogs from "../SideBarListPage/Blogs";
import Podcasts from "../SideBarListPage/Podcasts";
import Speaker from "../SideBarListPage/Speaker";
import Volunteer from "../SideBarListPage/Volunteer";
import AboutUs from "../SideBarListPage/AboutUs"

export const sidebar_list = [
  { id: 1, text: "Trainings",visible:false , component:Training,style:{}},
  { id: 2, text: "Meetups", visible:false, component:Meeting,style:{} },
  { id: 3, text: "Webinars", visible:false,component:Webinars,style:{} },
  { id: 4, text: "Conference", visible:false,component:Conference, style:{} },
  { id: 5, text: "Videos", visible:false,component:Videos,style:{} },
  { id: 6, text: "PM Speak Series", visible:false, component:PMSpeakSeries, style:{}},
  { id: 7, text: "Blogs", visible:false,component:Blogs,style:{} },
  { id: 8, text: "Podcasts", visible:false,component:Podcasts,style:{} },
  { id: 9, text: "Be A Speaker", visible:false, component:Speaker,style:{}},
  { id: 10, text: "Be A Volunteer", visible:false,component:Volunteer,style:{}},
  { id: 11, text: "About Us", visible:false,component:AboutUs,style:{}},
];

