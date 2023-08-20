import React from 'react'
import "./_resume.scss";
import {Helmet} from "react-helmet"

// Components Import
import Navbar from "../Navbar/Navbar"
import ExpAndEdu from './ExpAndEdu/ExpAndEdu';


const Resume = () => {
  const experience = [
    {
      title: "Software Developer Trainee",
      time: "Feb 2023 - Present",
      organization: "Ace Analytics",
      description: "In my current role, I'm a React developer specializing in implementing complex functionalities, crafting appealing designs, integrating APIs for real-time data, etc."
    },
    {
      title: "React JS Developer Intern",
      time: "March 2022 - September 2022",
      organization: "Mirats Insights",
      description: "Collaborated closely with the development team across various projects using React JS, Next JS, and Firebase"
    },
    {
      title: "Frontend Developer Intern",
      time: "Sep 2021 - Dec 2021",
      organization: "Healohub Technologies India (P) Limited",
      description: "Worked as a Frontend Developer where I used to handle the complete Front-End work of company."
    },
    {
      title: "Executive Head",
      time: "April 2021 - March 2022",
      organization: "Coders Club",
      description: "I had worked as a Executive Head at Coder's Club where I used to handle the Web Development domain and took the sessions on same domain."
    }
  ]

  const education = [
    {
      title: "B.Tech - Computer Science and Technology",
      time: "2019 -2023",
      organization: "St. Andrews Institute Of Tech And Mgmt(MDU)",
      description: "I completed my B.Tech with 8.9 CGPA with specialization of Computer Science."
    },
    {
      title: "HSC",
      time: "June 2019",
      organization: "Good Shepherd English Higher Secondary School(GSEB)",
      description: "I completed my 12th board with 72% with Physics, Chemistry and Maths(PCM) as core subjects with highest 92 marks in Maths."
    },
    {
      title: "SSC",
      time: "June 2017",
      organization: "Navchetan English and Gujarati Medium School(GSEB)",
      description: "I completed my 10th board with 74% from Gujarat Secondary Education Board."
    }
  ]

  return (
    <div className='main'>
      <Helmet>
                <title>My Resume</title>
                <meta
                    name="description"
                    content="My Resume"
                />
            </Helmet>
      <div className="resume">
        <div className="resume_heading">
          <p>Check out my Experience and Education</p>
          <h3>
            Resume
          </h3>
          <div className='heading_line'>
          </div>
        </div>
        <div className="resume_details">
          <div className="resume_details_experience">
            <div className='pages_subheading'>
              <h3>Experience</h3>
              <div className='pages_subheading_circle'></div>
            </div>
            <ExpAndEdu details={experience} />
          </div>
          <div className="resume_details_experience">
            <div className='pages_subheading'>
              <h3>Education</h3>
              <div className='pages_subheading_circle'></div>
            </div>
            <ExpAndEdu details={education} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Resume