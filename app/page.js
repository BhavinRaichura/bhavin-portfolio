"use client"

import './styles.css'
import SkillsSection from '@/components/SkillsSection'
import HeaderSection from '@/components/HeaderSection'
import IntroSection from '@/components/IntroSection'
import ResumeSection from '@/components/ResumeSection'
import FooterSection from '@/components/FooterSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectSection from '@/components/ProjectSection'

const page = () => {
  return (
    <div className=' overflow-hidden' >
        <HeaderSection />
        <IntroSection />
        <SkillsSection />
        <ProjectSection />
        <ExperienceSection />
        <ResumeSection />
        <FooterSection/>
    </div>
  )
}

export default page
