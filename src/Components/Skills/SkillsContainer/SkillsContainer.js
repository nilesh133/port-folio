import React from 'react'
import { useContext } from 'react';
import "./_skillscontainer.scss"

// Context Import
import { ColorContext } from '../../../context/ColorProvider'

const SkillsContainer = ({ skills, heading }) => {
  const { overAllColor, setOverAllColor } = useContext(ColorContext);
  return (
    <div className='skillscontainer'>
      <div className='skillscontainer_subheading'>
        <h3>{heading}</h3>
      </div>
      <div className='skillscontainer_box'>
        {
          skills.map((skill) => (
            <div className='skillscontainer_box_skill'>
              <div className='skillscontainer_box_skill_name'>
                <p>{skill.name}</p>
              </div>
              <div className='skillscontainer_box_skill_percentage'>
                <div className='skillscontainer_box_skill_percentage_outer'>
                  <div className='skillscontainer_box_skill_percentage_inner' style={{ width: `${skill.percentage}%` }}></div>
                  <div className='skillscontainer_box_skill_percentage_indicator' style={{ left: `${skill.percentage - 3.5}%` }}>
                    {skill.percentage}
                  </div>
                  <div className='skillscontainer_box_skill_percentage_mobile'>{skill.percentage}%</div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SkillsContainer