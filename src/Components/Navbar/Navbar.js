import React, { useContext, useState } from 'react'
import "./_navbar.scss"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@nextui-org/react";
import classNames from "classnames";
import resume from "../../images/Nilesh-Resume.pdf"

// Icons import
import { IoHomeSharp, IoPersonSharp, IoBagRemoveSharp, IoCallSharp } from "react-icons/io5"
import { BsFileEarmarkTextFill, BsFillEyeFill } from "react-icons/bs"

// Context Import
import { ColorContext } from '../../context/ColorProvider'
import { FiMenu } from "react-icons/fi"


const Navbar = () => {
    let navigate = useNavigate();
    const { overAllColor, setOverAllColor, loader, setLoader } = useContext(ColorContext);
    console.log(overAllColor)

    const [showNavbar, setShowNavbar] = useState(false)

    return (
        <>
            <div className="navbar">
                <div className='navbar_heading'>
                    <h3>nilesh</h3>
                </div>
                <div className='navbar_items'>
                    <div className='navbar_items_item' onClick={() => navigate("/")}>
                        <span><IoHomeSharp /></span>
                        <span>Home</span>
                    </div>
                    <div className='navbar_items_item' onClick={() => navigate("/about")}>
                        <span><IoPersonSharp /></span>
                        <span>About</span>
                    </div>
                    <div className='navbar_items_item' onClick={() => navigate("/resume")}>
                        <span><BsFileEarmarkTextFill /></span>
                        <span>Resume</span>
                    </div>
                    <div className='navbar_items_item' onClick={() => navigate("/projects")}>
                        <span><IoBagRemoveSharp /></span>
                        <span>Projects</span>
                    </div>
                    <div className='navbar_items_item' onClick={() => navigate("/skills")}>
                        <span><BsFileEarmarkTextFill /></span>
                        <span>Skills</span>
                    </div>
                    <div className='navbar_items_item' onClick={() => navigate("/contact")}>
                        <span><IoCallSharp /></span>
                        <span>Contact</span>
                    </div>
                    {/* <div onClick={(e) => setOverAllColor("#ca9025")} style = {{width: "40px", height: "40px", backgroundColor: "#ca9025"}}></div>
                <div onClick={(e) => setOverAllColor("#121496")} style = {{width: "40px", height: "40px", backgroundColor: "#121496"}}></div> */}
                    {/* <div onClick={() => setLoader(true)}>
                        Loader
                    </div> */}
                </div>
                <div className='navbar_resume'>
                    <a href={resume}>
                        <Button className='navbar_resume_button' size="xs" color="#000" css={{ padding: '1.2rem', fontSize: '0.6rem', fontWeight: "500" }}>
                            <span><BsFillEyeFill /></span>
                            <h4>Resume</h4>
                        </Button>
                    </a>
                </div>
            </div>
            <div className="navbar_smallscreen">
                <div className='navbar_smallscreen_menuicon' onClick={() => setShowNavbar(!showNavbar)}>
                    <span><FiMenu /></span>
                </div>
                <div className={classNames(
                    "navbar_smallscreen_list",
                    showNavbar ? "navbar_smallscreen_show" : "navbar_smallscreen_hide"
                )}>
                    <li onClick={() => {
                        navigate("/")
                        setShowNavbar(!showNavbar)
                    }}>
                        Home
                    </li>
                    <li onClick={() => {
                        navigate("/about")
                        setShowNavbar(!showNavbar)
                    }}>
                        About
                    </li>
                    <li onClick={() => {
                        navigate("/resume")
                        setShowNavbar(!showNavbar)
                    }}>
                        Resume
                    </li>
                    <li onClick={() => {
                        navigate("/projects")
                        setShowNavbar(!showNavbar)
                    }}>
                        Projects
                    </li>
                    <li onClick={() => {
                        navigate("/skills")
                        setShowNavbar(!showNavbar)
                    }}>
                        Skills
                    </li>
                    <li onClick={() => {
                        navigate("/contact")
                        setShowNavbar(!showNavbar)
                    }}>
                        Contact
                    </li>
                </div>
            </div>
        </>

    )
}

export default Navbar