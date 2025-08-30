"use client"

import React, { useEffect, useRef, useState } from 'react'
import Title from '@/components/Title'
import { experiences } from '@/utils/experience'
import WavesUI from './WavesUI'

const ExperienceSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const experience = experiences[currentIndex]

    const handleNext = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex(prev => (prev + 1) % experiences.length)
        setTimeout(() => setIsAnimating(false), 400)
    }

    const handlePrev = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex(prev => (prev - 1 + experiences.length) % experiences.length)
        setTimeout(() => setIsAnimating(false), 400)
    }

    const handleDotClick = (index) => {
        if (isAnimating || index === currentIndex) return
        setIsAnimating(true)
        setCurrentIndex(index)
        setTimeout(() => setIsAnimating(false), 400)
    }

    return (
        <>
            <div id="experience" className="w-full h-full py-20 relative" style={{backgroundColor: "rgb(19, 22, 27)" /*"#22262f"*/}}>
                <Title title="Experience" />
                <div className="container mx-auto px-4 relative">
                    {/* Navigation Buttons */}
                    <button 
                        onClick={handlePrev}
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all z-10"
                        disabled={isAnimating}
                    >
                        ←
                    </button>
                    <button 
                        onClick={handleNext}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all z-10"
                        disabled={isAnimating}
                    >
                        →
                    </button>

                    {/* Experience Card */}
                    <div className="w-full my-10">
                        <div 
                            className={`relative bg-black/20 backdrop-blur-sm border border-white/5 rounded-xl p-8 transition-all duration-500 hover:border-white/10 group hover:bg-white/5 w-full max-w-4xl mx-auto ${isAnimating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}
                        >
                            {/* Left border accent */}
                            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-white/20 to-white/10 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                            {/* Top accent glow */}
                            <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            
                            {/* Content */}
                            <div className="flex flex-col gap-6">
                                {/* Header Section */}
                                <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-4">
                                    <div className="space-y-2 flex-1">
                                        <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                                            {experience.title}
                                        </h3>
                                        {experience.companyLink ? (
                                            <a 
                                                href={experience.companyLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-lg text-gray-300 hover:text-white transition-all duration-300 inline-flex items-center gap-1 group/link hover:tracking-wide"
                                            >
                                                {experience.company}
                                                <span className="opacity-0 group-hover/link:opacity-100 transition-all duration-300 transform translate-y-0.5">↗</span>
                                            </a>
                                        ) : (
                                            <p className="text-lg text-gray-300">{experience.company}</p>
                                        )}
                                    </div>
                                    <div className="text-gray-400 lg:text-right lg:min-w-[200px]">
                                        <p className="text-lg bg-gradient-to-r from-sky-400/90 to-sky-500/90 bg-clip-text text-transparent font-medium">
                                            {experience.duration}
                                        </p>
                                        <p className="text-base mt-1.5 text-gray-500">{experience.location}</p>
                                    </div>
                                </div>

                                {/* Responsibilities Section */}
                                <div className="pl-4 border-l border-white/5 relative">
                                    <div className="absolute -left-[3px] top-0 h-2 w-2 rounded-full bg-white/20"></div>
                                    <ul className="space-y-4 text-gray-300 list-none">
                                        {experience.responsibilities.map((responsibility, idx) => (
                                            <li key={idx} className="relative pl-6 group/item">
                                                <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 bg-white/20 rounded-full group-hover/item:bg-white/40 transition-colors duration-300"></span>
                                                <span className="text-gray-300/90 leading-relaxed">{responsibility}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Projects Section */}
                                {experience.projectLinks && experience.projectLinks.length > 0 && (
                                    <div className="pt-4 border-t border-white/5">
                                        <p className="text-gray-400 mb-4 text-base uppercase tracking-wider font-medium">
                                            Projects & Links
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            {experience.projectLinks.map((project, idx) => (
                                                <a
                                                    key={idx}
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center px-4 py-2 rounded-lg bg-white/5 text-gray-300 hover:text-white border border-white/5 hover:border-white/20 transition-all duration-300 text-base group/project"
                                                >
                                                    {project.name}
                                                    <span className="ml-2 opacity-0 group-hover/project:opacity-100 transform group-hover/project:translate-x-1 transition-all duration-300">↗</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Technologies Section */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                    {experience.technologies.map((tech, idx) => (
                                        <span 
                                            key={idx} 
                                            className="px-3 py-1.5 bg-white/5 rounded-full text-base text-gray-400 hover:text-white transition-all duration-300 border border-white/5 hover:border-white/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center items-center gap-2 mt-8">
                        {experiences.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleDotClick(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    idx === currentIndex 
                                    ? 'bg-white scale-125' 
                                    : 'bg-white/20 hover:bg-white/40'
                                }`}
                                aria-label={`Go to experience ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <WavesUI backgroundColor="rgb(19, 22, 27)" fillColor="rgb(18, 20, 25)" rotation="180" />
        </>
    )
}

export default ExperienceSection
