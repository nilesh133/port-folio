import React from 'react'
import "./_project.scss"
import {BsFillEyeFill} from "react-icons/bs"

const Project = ({ details }) => {
    console.log(details)
    return (
       
        <div className='project'>
            <div className='project_link'>
                <div className='project_link_image' style={{backgroundImage: `url(${details.image})`}}></div>
                <div className='project_link_hidden'>
                    <a href={details.link} className='project_link_hidden_icon'>
                        <span><BsFillEyeFill/></span>
                    </a>
                </div>
            </div>
            <div className='project_detail'>
                <h3>{details.name}</h3>
                <p><span>Tech Used:</span> {details.tech}</p>
            </div>
        </div>
    )
}

export default Project