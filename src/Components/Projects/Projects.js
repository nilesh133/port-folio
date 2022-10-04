import React from 'react'
import "./_project.scss"
import {Helmet} from "react-helmet"

// Components Import
import Navbar from "../Navbar/Navbar"
import Project from './Project/Project'

// Images Import
import Project_Demo from "../../images/project_demo.png"
import AmazonPrime from "../../images/Projects/amazon-prime.png"
import GoogleKeep from "../../images/Projects/Google-Keep.png"
import GoogleDocs from "../../images/Projects/Google-Docs.png"
import Codepen from "../../images/Projects/codepen.png"
import MusicPlayer from "../../images/Projects/music-player.jpg"
import RealEstate from "../../images/Projects/real-estate.jpg"
import WeatherApp from "../../images/Projects/weather-app.jpg"
import SnakeGame from "../../images/Projects/snake-game.jpg"
import CoffeeShop from "../../images/Projects/coffee-shop.jpg"
import RegisterLogin from "../../images/Projects/register.jpg"

import MovieDashBoard from "../../images/Projects/Movie-Dashboard.png"
import MusicDashBoard from "../../images/Projects/Music-Dashboard.png"
import SmartHomeDashBoard from "../../images/Projects/Smart-Dashboard.png"

import MusicPlayerFigma from "../../images/Projects/Music-Player-Figma.png"
import ChatDesignFigma from "../../images/Projects/Chat-Design-Figma.png"

const Projects = () => {
    const projectsList = [
        {
            name: "Amazon Prime Clone",
            tech: "Next JS, Firebase, Tailwind, Next-Auth",
            link: "https://amazon-prime-clone-nilesh133.vercel.app/",
            image: AmazonPrime
        },
        {
            name: "Google Keep Clone",
            tech: "Next JS, Firebase, Tailwind, Next-Auth",
            link: "https://google-keep-clone-nilesh133.vercel.app/",
            image: GoogleKeep
        },
        {
            name: "Google Docs Clone",
            tech: "Next JS, Firebase, Tailwind, Next-Auth",
            link: "https://google-docs-clone-nilesh133.vercel.app/",
            image: GoogleDocs
        },
        {
            name: "Codepen Clone",
            tech: "React JS, SCSS",
            link: "https://nilesh133.github.io/Codepen-Clone/",
            image: Codepen
        },
        {
            name: "Music Player",
            tech: "HTML, CSS, JavaScript",
            link: "https://nilesh133.github.io/Music-Player/",
            image: MusicPlayer
        },
        {
            name: "Real Estate Website",
            tech: "HTML, CSS, JavaScript",
            link: "https://nilesh133.github.io/Real-Estate-Responsive-Website/",
            image: RealEstate
        },
        {
            name: "Weather App",
            tech: "HTML, CSS, JavaScript, Node JS",
            link: "http://weather-info-website.herokuapp.com/weather",
            image: WeatherApp
        },
        {
            name: "Snake Game",
            tech: "HTML, CSS, JavaScript",
            link: "https://nilesh133.github.io/Snake-Game/",
            image: SnakeGame
        },
        {
            name: "Coffee Shop Website",
            tech: "HTML, CSS, JavaScript",
            link: "https://nilesh133.github.io/Coffee-Shop-Website/",
            image: CoffeeShop
        },
        {
            name: "Registration-Login Form",
            tech: "HTML, CSS, JavaScript, Node JS, Mongo DB",
            link: "https://registrationloginform.herokuapp.com/",
            image: RegisterLogin
        },
    ]

    const uilists = [
        {
            name: "Movie Dashboard",
            tech: "React JS, SCSS",
            link: "https://nilesh133.github.io/Movie-Dashboard/",
            image: MovieDashBoard
        },
        {
            name: "Music Dashboard",
            tech: "React JS, SCSS",
            link: "https://nilesh133.github.io/Music-Dashboard/",
            image: MusicDashBoard
        },
        {
            name: "Smart Home Dashboard",
            tech: "React JS, SCSS",
            link: "https://nilesh133.github.io/Smart-Home-Dashboard/",
            image: SmartHomeDashBoard
        },
    ]

    const uxlists = [
        {
            name: "Music Player",
            tech: "Figma",
            link: "https://www.figma.com/file/isqidDMr3HiS6vmB3b30Mu/MyFigma?node-id=0%3A1",
            image: MusicPlayerFigma
        },
        {
            name: "Chat Design",
            tech: "Figma",
            link: "https://www.figma.com/file/isqidDMr3HiS6vmB3b30Mu/MyFigma?node-id=0%3A1",
            image: ChatDesignFigma
        },
    ]

    return (
        <div className='main'>
            <Helmet>
                <title>My Projects</title>
                <meta
                    name="description"
                    content="My Projects"
                />
            </Helmet>
            <div className='projects'>
                <div className='projects_heading'>
                    <p>Some of my best works</p>
                    <h3>Projects</h3>
                    <div className='heading_line'>
                    </div>
                </div>
                <div className='projects_container'>
                    {
                        projectsList.map((project) => (
                            <Project details={project} />
                        ))
                    }
                </div>
                <div className='pages_subheading' style={{marginLeft: "3rem", marginTop: "3rem"}}>
                    <h3>UI Designs</h3>
                    <div className='pages_subheading_circle'></div>
                </div>
                <div className='projects_container'>
                    {
                        uilists.map((project) => (
                            <Project details={project} />
                        ))
                    }
                </div>
                <div className='pages_subheading' style={{marginLeft: "3rem", marginTop: "3rem"}}>
                    <h3>UX Designs</h3>
                    <div className='pages_subheading_circle'></div>
                </div>
                <div className='projects_container'>
                    {
                        uxlists.map((project) => (
                            <Project details={project} />
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Projects