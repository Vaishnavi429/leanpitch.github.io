import React,{Fragment} from 'react'
import logo from "../../Assest/logo.png"
import "./Navbar.css"

export default function Navbar() {
  return (
    <Fragment>
        <div className='navbar_container'>
            <div className='navbar_logo_container'>
               <img src={logo} alt="logo" className='navbar_logo_image' />
               <p style={{color:'white'}}>Leanpitch</p>
            </div>
            <div className='navbar_btn_container'>
                <button className='navbar_btn subscribe_btn'>
                  Subscribe
                </button>
                <button className='navbar_btn'>
                    Contact Us
                </button>
            </div>

        </div>
      
    </Fragment>
  )
}
