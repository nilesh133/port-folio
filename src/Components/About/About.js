import React from 'react'
import "./_about.scss"
import { Helmet } from "react-helmet";

// Componets Import
import Navbar from '../Navbar/Navbar'

// Icons Import
import { ImLocation2 } from "react-icons/im"
import { HiOutlineCode } from "react-icons/hi"
import { ImBook } from "react-icons/im"
import { MdLocalMovies, MdSportsCricket } from "react-icons/md"
import { RiMusic2Fill } from "react-icons/ri"

// Context Import
import { ColorContext } from '../../context/ColorProvider'

const About = () => {
    return (
        <div className='main'>
            <Helmet>
                <title>About Me</title>
                <meta
                    name="description"
                    content="About Me"
                />
            </Helmet>
            <div className='about'>
                <div className='about_heading'>
                    <p>Get to know me</p>
                    <h3>About Me</h3>
                    <div className='heading_line'></div>
                </div>
                <div className='about_details'>
                    <div className='about_details_avatar'>
                    </div>
                    <div className='about_details_detail'>
                        <h3>Nilesh Prajapati</h3>
                        <div className='about_details_detail_location'>
                            <span><ImLocation2 /></span>
                            <p>Gurgaon, India</p>
                        </div>
                        <p>Hey there! I'm Nilesh Prajapati, and I've been on this exciting journey in the world of tech and development. I graduated with a B.Tech in Computer Science from St. Andrews Institute of Tech. and Mgmt. in 2023.
                        </p>
                        <p>I began my developer journey as a Frontend Developer intern in Healohub Technologies, Bangalore when I was in 2nd year of my college. From there I jumped into a 6-month React Developer internship in Mirats Insights, Mumbai.
                        </p>
                        <p>Currently I am working as a full time React Developer in Ace Analytics, Ahmedabad from Feb 2023.</p>
                    </div>
                </div>
                <div className="about_interests">
                    <div className='pages_subheading'>
                        <h3>My Interests</h3>
                        <div className='pages_subheading_circle'></div>
                    </div>
                    <div className='about_interests_container'>
                        <div className='about_interests_container_single'>
                            <span><HiOutlineCode /></span>
                            <p>Web-Dev</p>
                        </div>
                        <div className='about_interests_container_single'>
                            <span><HiOutlineCode /></span>
                            <p>Coding</p>
                        </div>
                        <div className='about_interests_container_single'>
                            <span><ImBook /></span>
                            <p>Books</p>
                        </div>
                        <div className='about_interests_container_single'>
                            <span><MdSportsCricket /></span>
                            <p>Cricket</p>
                        </div>
                        <div className='about_interests_container_single'>
                            <span><MdLocalMovies /></span>
                            <p>Movies</p>
                        </div>
                        <div className='about_interests_container_single'>
                            <span><RiMusic2Fill /></span>
                            <p>Music</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About