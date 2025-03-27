import React from 'react'
import Section from '@/components/sectionView/section'
import SkillView from '@/components/skillsView/skills'
import Experience from '@/components/experience/experience'
import About from '@/components/aboutme/about'
import Project from '@/components/projects/projects'
import MyTestimonial from '@/components/testimonial/testimonial'
import Email from '@/components/emailsection/email'

const Page = () => {
  return (
    <div className=''>
      <Section />
      <SkillView />
      <Experience />
      <div className='py-20'>
        <About />
      </div>
      <div className='pb-10'>
        <Project />
      </div>
      <div className='pb-10'>
        <MyTestimonial />
      </div>
      <div className='pb-10'>
        <Email />
      </div>
    </div>
  )
}

export default Page
