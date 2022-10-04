import React, { useContext } from 'react'
import "./_skills.scss"
import {Helmet} from "react-helmet"

// Components Import
import Navbar from "../Navbar/Navbar"
import SkillsContainer from './SkillsContainer/SkillsContainer'

// Context Import
import { ColorContext } from '../../context/ColorProvider'

const Skills = () => {
    const { overAllColor, setOverAllColor } = useContext(ColorContext);
    const frontend = [
        {
            name: "HTML",
            percentage: "95"
        },
        {
            name: "CSS",
            percentage: "90"
        },
        {
            name: "JavaScript",
            percentage: "85"
        },
    ]

    const frontend_frameworks_libraries = [
        {

            name: "React JS",
            percentage: "85"

        },
        {
            name: "Next JS",
            percentage: "80"
        },
        {
            name: "Material UI",
            percentage: "70"
        }
    ]

    const css_frameworks = [
        {
            name: "SCSS",
            percentage: "85"
        },
        {
            name: "Tailwind",
            percentage: "80"
        },
        {
            name: "Bootstrap",
            percentage: "80"
        },
    ]

    const coding = [
        {
            name: "Java",
            percentage: "85"
        },
        {
            name: "Python",
            percentage: "80"
        },
        {
            name: "C/C++",
            percentage: "75"
        }
    ]

    const backend = [
        {
            name: "Node JS",
            percentage: "80"
        },
        {
            name: "Express JS",
            percentage: "80"
        },
    ]

    const database = [
        {
            name: "Mongo DB",
            percentage: "85"
        },
        {
            name: "Firebase",
            percentage: "80"
        },
    ]

    return (
        <div className='main'>
            <Helmet>
                <title>My Skills</title>
                <meta
                    name="description"
                    content="My Skills"
                />
            </Helmet>
            <div className='skills'>
                <div className='skills_heading'>
                    <p>My level of knowledge in Tech languages</p>
                    <h3>
                        Skills
                    </h3>
                    <div className='heading_line'>
                    </div>
                </div>
                <div className='skills_skillscontainer'>
                    <SkillsContainer skills={frontend} heading="FrontEnd" />
                    <SkillsContainer skills={frontend_frameworks_libraries} heading="FrontEnd Frameworks & Libraries" />
                    <SkillsContainer skills={css_frameworks} heading="CSS Frameworks" />
                    <SkillsContainer skills={coding} heading="Coding" />
                    <SkillsContainer skills={backend} heading="BackEnd" />
                    <SkillsContainer skills={database} heading="Database" />
                </div>
            </div></div>

    )
}

export default Skills