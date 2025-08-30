"use client"

import React, { useEffect, useRef, useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import gsap, { ScrollTrigger } from 'gsap/all'
import Link from 'next/link'
import Title from '@/components/Title'
import { projects } from '@/utils/projects'
import WavesUI from './WavesUI'


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
      return () => {
        tl.kill();
      }

    },[])
    
    
  return (
    <>
    <div id='project' className='w-full h-full py-20' style={{backgroundColor:"rgb(24, 27, 33)"}} ref={mainRef} >
        {/* main */}
        <Title title={"Projects"}/>
        <div className='container mx-auto max-w-7xl px-4 my-16 flex flex-wrap gap-y-20 max-md:gap-y-12 justify-center' ref={cardRef}>
            {/* project */}
            {
                projects.map((project, key)=>(
                      <div key={key} className={`w-full md:w-1/2 px-4 transition-all ${(key)%2===0 ? "md:mt-0" : "md:mt-32"}`}>
                          <div className="max-w-[480px] mx-auto transform transition-all duration-500 hover:-translate-y-2">
                              <div 
                                className="relative group aspect-[16/10] overflow-hidden rounded-xl border border-white/5 bg-black/20 backdrop-blur-sm transition-all duration-500"
                                onMouseEnter={() => setActive(key)} 
                                onMouseLeave={() => setActive(-1)}
                              >
                                {/* Image Container */}
                                <div className="absolute inset-0 transform transition-all duration-700">
                                  <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className={`w-full h-full object-cover transition-all duration-700 ${active === key ? 'scale-110' : 'scale-100'}`}
                                  />
                                </div>
                                
                                {/* Bottom Gradient Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent backdrop-blur-sm" />
                                
                                {/* Always Visible Content */}
                                <div className="absolute inset-x-0 bottom-0 p-6">
                                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                </div>

                                {/* Hover Content */}
                                <div className={`absolute inset-0 bg-black/80 backdrop-blur-[2px] flex flex-col p-8 transition-all duration-500 ${active === key ? 'opacity-100' : 'opacity-0'}`}>
                                  {/* Title */}
                                  <h3 className="text-2xl font-bold text-white mb-6">{project.title}</h3>
                                  {/* Description - Scrollable */}
                                  <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent pr-3">
                                    <p className="text-gray-200 text-lg leading-relaxed">
                                      {project.description}
                                    </p>
                                  </div>
                                  
                                  {/* Button */}
                                  <div className="pt-8 border-t border-white/10">
                                    <a 
                                      href={project.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="inline-flex items-center text-white hover:text-white/80 transition-colors duration-300 text-base font-medium group/link"
                                    >
                                      Visit Live 
                                      <span className="ml-2 transform transition-all duration-300 group-hover/link:translate-x-1">→</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                          </div>
                      </div>
                    )
                )
            }
        </div>
    </div>
    <WavesUI backgroundColor="rgb(24, 27, 33)" classes="" rotation="0" fillColor="rgb(19, 22, 27)" />
    </>
  )
}

export default ProjectSection