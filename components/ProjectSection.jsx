"use client"

import React, { useEffect, useRef, useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import gsap, { ScrollTrigger } from 'gsap/all'
import Title from '@/components/Title'
import { projects } from '@/utils/projects'


gsap.registerPlugin(ScrollTrigger)

const ProjectSection = () => {

    const [active, setActive] = useState(-1)

    const cardRef = useRef(null)
    const mainRef = useRef(null)

    useEffect(()=>{
      let tl = gsap.timeline()
      cardRef.current.childNodes.forEach((node)=>{
        tl.fromTo(node, {opacity:0 }, { opacity:1, duration:0.5}, "+=1")
      })
      
      tl.pause()
      ScrollTrigger.create({
        trigger: mainRef.current,
        start: '-200 top',
        toggleActions: 'play none pause reverse reset',
        //markers: true,
        animation: tl,
        end:'bottom, bottom',
        scrub: 5
      })

    },[])
    
    
  return (
    <div id='project' className='w-full h-full my-20' ref={mainRef} >
        {/* main */}
        <Title title={"Projects"}/>
        <div className=' w-full my-10 flex flex-wrap max-md:gap-10 max-md:justify-center ' ref={cardRef}>
            {/* project */}
            {
                projects.map((project, key)=>(
                      <div key={key} className={` infinite-bouncing-animation  flex flex-wrap  md:px-5 max-md:justify-center  transition-all w-1/2 max-md:w-full  cursor-pointer   ${(key)%2===0 ? " md:justify-end  md:mb-32 " : " md:justify-start  md:mt-32 "}  ${active===-1 ? " " : active!==key ? " brightness-50 ": " "} `} >
                          <div className={` w-96 max-lg:w-80  `} >
                              <div className='  w-96 h-96 max-lg:w-80 max-lg:h-80 ' onMouseEnter={() => setActive(key)} onMouseLeave={()=>setActive(-1)}>
                                  <img src={project.image} title={project.title} alt="" className={` w-full h-full transition-all   ${active===key ? "  rounded-full ": " rounded-lg "}`} />
                                  
                              </div>
                              <ProjectCard  index={key} active={active} {...project}   />
                              
                          </div>
                      </div>
                    )
                )
            }
        </div>
    </div>
  )
}

export default ProjectSection