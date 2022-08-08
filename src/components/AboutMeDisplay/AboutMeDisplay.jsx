import React from 'react'
import BioDisplay from "../../components/BioDisplay/BioDisplay"
import SkillsDisplay from "../../components/SkillsDisplay/SkillsDisplay"
import EducationDisplay from "../../components/EducationDisplay/EducationDisplay"

export default function AboutMeDisplay() {
  return (
    <div>
      <BioDisplay/>
      <SkillsDisplay/>
      <EducationDisplay/> 
    </div>
  )
}
