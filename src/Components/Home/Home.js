import React from 'react'
import "./_home.scss";
// import TypingTextAnimation from 'react-typing-text-animation'
import { Helmet } from "react-helmet"
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from "../../images/Nilesh-Resume.pdf"
// Icons Import
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"
import Typical from 'react-typical'
// import Typing from 'react-typing-animation';

// Next UI
import { Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';


const Home = () => {
    let navigate = useNavigate();
    return (
        // <div className='home_main'>
        <div className='home'>
            <Helmet>
                <title>Home | Portfolio</title>
                <meta
                    name="description"
                    content="Home"
                />
            </Helmet>
            <div className='home_name'>
                <h3>nilesh</h3>
            </div>
            <div className='home_content'>
                <div className='home_content_avatar'></div>
                <div className='home_content_details'>

                    <div className='home_content_details_hi'>
                        <span>Hi there</span>
                    </div>
                    <div className="home_content_details_name">
                        <h3>I'm Nilesh Prajapati</h3>
                    </div>
                    <div className="home_content_details_typinganimation">
                        <p>
                            <Typical
                                steps={['MERN Stack Developer', 4000, 'Java Coder', 4000]}
                                loop={Infinity}
                            />
                        </p>
                        {/* <TypingTextAnimation text='example' /> */}
                    </div>

                    <div className="home_content_details_socialicons">
                        <div className='home_content_details_socialicons_heading'>
                            FIND ME ON:
                        </div>
                        <div className='home_content_details_socialicons_icons'>
                            <a href="https://www.instagram.com/nileshprajapati_13/"><span><AiFillInstagram /></span></a>
                            <a href="https://twitter.com/Nileshp1313"><span><AiFillTwitterCircle /></span></a>
                            <a href="https://www.linkedin.com/in/nilesh-prajapati-432983214/"><span><FaLinkedin /></span></a>
                            <a href="https://github.com/nilesh133"><span><AiFillGithub /></span></a>
                        </div>
                    </div>
                    <div className='home_content_details_buttons'>
                        <Button className='home_content_details_buttons_button_1' size="xs" color="#000" css={{ padding: '1.2rem', fontSize: '0.85rem', fontWeight: "600" }} onClick={() => navigate("/about")}>About Me</Button>;
                        <a href={resume}>
                            <Button className='home_content_details_buttons_button_2' size="xs" color="#000" css={{ padding: '1.2rem', fontSize: '0.85rem', fontWeight: "600" }}>View Resume</Button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
        // </div>

    )
}

export default Home