"use client"

import './styles.css'
import SkillsSection from '@/components/SkillsSection'
import HeaderSection from '@/components/HeaderSection'
import IntroSection from '@/components/IntroSection'
import ResumeSection from '@/components/ResumeSection'
import FooterSection from '@/components/FooterSection'

const page = () => {
  return (
    <div className=' overflow-hidden' >
        <HeaderSection />
        <IntroSection />
        <SkillsSection />
        <ResumeSection />
        <FooterSection/>
    </div>
  )
}

export default page
