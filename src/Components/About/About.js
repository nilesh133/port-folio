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
                        <p>A B.Tech Computer Science Student At Saint Andrews Institute Of Technology And Management. I Am A Web Developer And A Java And Python Coder. I Also Have A Good Knowledge Of C/C++.
                        </p>
                        <p>I Had Worked As A Software Developer In Healohub Technologies.
                            Currently I Am Working As A React Developer At Mirats Insights, Mumbai.</p>
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