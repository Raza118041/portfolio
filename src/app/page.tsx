import React from 'react'
import Section from '@/components/sectionView/section'
import SkillView from '@/components/skillsView/skills'
import Experience from '@/components/experience/experience'
import About from '@/components/aboutme/about'

const Page = () => {
  return (
    <div className=''>
      <Section />
      <SkillView />
      <Experience />
      <div className='py-10'>
        <About />
      </div>
    </div>
  )
}

export default Page
