import React from 'react'
import "./_expandedu.scss"

// Icons Import
import { HiCalendar } from "react-icons/hi"
import { MdOutlineDoubleArrow } from "react-icons/md"
import {CgArrowLongRightL} from "react-icons/cg"
import {IoArrowRedo} from "react-icons/io5"
import {ImArrowRight} from "react-icons/im"

// Icons Import
const ExpAndEdu = ({ details }) => {

    return (
        <div className="expandedu">
            {
                details.map((detail) => (
                    <div className="expandedu_single">
                        <div className='expandedu_single_heading'>
                            <span><ImArrowRight /></span>
                            <h3>{detail.title}</h3>
                        </div>
                        <div className='expandedu_single_time_organization'>
                            <span><HiCalendar /></span>
                            <span>{detail.time} | {detail.organization}</span>
                        </div>
                        <p>{detail.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ExpAndEdu