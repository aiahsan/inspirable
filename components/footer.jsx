import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import {CgFacebook} from 'react-icons/cg'
import {ImInstagram,ImTwitter} from 'react-icons/im'
import {AiFillYoutube} from 'react-icons/ai'
import {FaInstagram} from 'react-icons/fa'
import { useRouter } from 'next/router'

import Link from 'next/link'
import Image from 'next/link'
export default ({color}) => {
    const history = useRouter();

    return <>
    <div className="container-fluid footer bjasdfre" >
            <div className="ml-5 mr-5">
                <div className="row">
                   <div className="col-md-9">
                    <div className="row">
                    <div className="col-md-3">
                        <img style={{cursor:'pointer'}} onClick={()=>{
                history.push('/');

                        }} src="../images/logo1.png" className="logo-main-1 mt-5" />
                        <div className="social-links ml-3">
                        <a style={{color:'white'}} href="https://www.facebook.com/inspirableBooks" target="_blank"><CgFacebook className={`mr-3 `} /></a>
                           <a style={{color:'white'}} href="https://www.instagram.com/inspirablebooks/" target="_blank"><FaInstagram className={`mr-3`} /></a>
                           <a style={{color:'white'}} href="https://www.youtube.com/channel/UCW5p3U29I4rdV1aVCSf9zVQ?view_as=subscriber" target="_blank"><AiFillYoutube className={`mr-3`} /></a>
                           
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-white mt-5 nunito-bold-18">INSPIRABLE</h5>
                        <ul className="nav flex-column bjasdfre">
                            <li className="nav-item">
                                <a className="nav-link text-white pl-0 mt-15px"   href="/about"  >About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white pl-0 mt-15px"   href="/blog"  >Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white pl-0 mt-15px"   href="/press" >Press</a>
                            </li>
                            <li className="nav-item">
                            {/*}    <a className="nav-link text-white pl-0 mt-15px"   href="/auther" >Author/Writer?</a> */}
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-white mt-5  nunito-bold-18">HELP AND SUPPORT</h5>
                        <ul className="nav flex-column bjasdfre">
                            <li className="nav-item">
                                <a className="nav-link text-white pl-0 mt-15px"  href="/faq" >FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white pl-0 mt-15px"  href="/contact" >Contact Us</a>
                            </li>
                            </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-white mt-5 nunito-bold-18">LEGAL</h5>
                        <ul className="nav flex-column dasfjdsfjo3i4rwdfs" style={{marginTop: -9}} >
                            <li className="nav-item" >
                                <a className="nav-link text-white pl-0 mb-1" href="/terms" >Terms of Use</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white pl-0" href="/privacy">Privacy Policy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white pl-0" href="/cookies">Cookies Policy</a>
                            </li>
                        </ul>
                    </div>
                
                  
                    </div>
                
                   </div>
                   <div className="col-md-3 dsp-flex-23">
                   
                   <div className="d-flex justify-content-center align-items-center">
                   <div className="row d-flex justify-content-center sdaf30dasn2">
                   <a href="#" className="shadaskldhask-12812y8hasdh-sad shadaskldhask-12812y8hasdh-sd"><img className="w-100" src='../images/images/appstore.png'/></a>
                    <a href="#" className="shadaskldhask-12812y8hasdh-sad shadaskldhask-12812y8hasdh-sd ml-2"><img className="w-100" src="../images/images/playstore.png"/></a>
                   </div>
                    </div>

                   </div>
                </div>
            </div>
        </div>
        <div className="container-fluid asdfjlrhwio98sfdafsd" >
            <p className="text-white pt-3 text-center" > ©2021 | <b>INSPIRABLE</b></p>
        </div></>
}