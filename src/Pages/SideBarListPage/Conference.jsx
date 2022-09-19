import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
export default function Conference() {
  return (
    <div className='conference_container' style={{textAlign:'center' ,padding:"10px"}}>
        <div>
            <p>
                Conferences are not about just learning from the speakers. it's also about meeting new people, learning from attendees
                , making connections ,getting to know each other and being part of a community.
            </p>
            <p>Having hosted conference online last year and after close consultation with the community,
                speakers, exhibotors and event partners,we have decided to host your next conference in person to make it more effective,
            </p>
            <p>We will back with more information once covid subsides</p>
        </div>
        <button style={{padding:'8px 20px',marginTop:"20px",fontSize:"1em" ,background:"red",border:"none",borderRadius:"20px",color:"white"}}>
            Notify me {""}<AiOutlineArrowRight/>
        </button>
     

    </div>
  )
}
