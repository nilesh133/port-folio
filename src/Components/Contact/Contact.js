import React from 'react'
import "./_contact.scss"
import {Helmet} from "react-helmet"

// Components Import
import Navbar from '../Navbar/Navbar'

// Icons Import
import { BiCurrentLocation } from "react-icons/bi"
import { IoMdSend } from "react-icons/io"
import { MdCall } from "react-icons/md"
import { RiInstagramLine, RiFacebookFill, RiLinkedinFill } from "react-icons/ri"
import {AiFillTwitterCircle} from "react-icons/ai"

const Contact = () => {
    return (
        <div className='main'>
        <Helmet>
        <title>Contact Me</title>
        <meta
            name="description"
            content="Conact Me"
        />
    </Helmet>
            <div className='contact'>
                <div className='contact_heading'>
                    <p>Feel free to contact me anytime</p>
                    <h3>Contact Me</h3>
                    <div className='heading_line'>
                    </div>
                </div>
                <div className='contact_messageinfo'>
                    <div className='contact_messageinfo_message'>
                        <h3>Message me</h3>
                        <form className='contact_messageinfo_message_form'>
                            <div className='contact_messageinfo_message_form_input'>
                                <p>Name</p>
                                <input type="text" />
                            </div>
                            <div className='contact_messageinfo_message_form_input'>
                                <p>Email</p>
                                <input type="email" name="" id="" />
                            </div>
                            <div className='contact_messageinfo_message_form_input'>
                                <p>Subject</p>
                                <input type="text" name="" id="" />
                            </div>
                            <div className='contact_messageinfo_message_form_input'>
                                <p>Message</p>
                                <textarea name="" id="" cols="30" rows="6"></textarea>
                            </div>
                            <div className='contact_messageinfo_message_form_input'>
                                <input type="submit" value="Send Message" style={{ backgroundColor: "#25ca7f", color: "#070708", fontWeight: "600" }} />
                            </div>
                        </form>
                    </div>
                    <div className='contact_messageinfo_info'>
                        <h3>Contact Info</h3>
                        <div className='contact_messageinfo_info_image'></div>
                        <h2>Nilesh Prajapati</h2>
                        <p>Always available for freelance work if the right project comes along, Feel free to contact me!</p>

                        <div className='contact_messageinfo_info_details'>
                            <div className='contact_messageinfo_info_details_icons'>
                                <span><BiCurrentLocation /></span>
                                <span><MdCall /></span>
                                <span><IoMdSend /></span>
                            </div>
                            <div className='contact_messageinfo_info_details_detail'>
                                <div className='contact_messageinfo_info_details_detail_single'>
                                    <h4>Location</h4>
                                    <h4>Sagar Nagar Society, Tarsadi, Kosamba</h4>
                                </div>
                                <div className='contact_messageinfo_info_details_detail_single'>
                                    <h4>Call Me</h4>
                                    <h4>+91 9904332821</h4>
                                </div>
                                <div className='contact_messageinfo_info_details_detail_single'>
                                    <h4>Email Me</h4>
                                    <h4>nkpnilesh13@gmail.com</h4>
                                </div>
                            </div>
                        </div>
                        <div className='contact_messageinfo_info_social'>
                            <a href="https://www.instagram.com/nileshprajapati_13/"><span><RiInstagramLine /></span></a>
                            <a href="https://twitter.com/Nileshp1313"><span><AiFillTwitterCircle /></span></a>
                            <a href="https://www.linkedin.com/in/nilesh-prajapati-432983214/"><span><RiLinkedinFill /></span></a>
                        </div>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>


    )
}

export default Contact