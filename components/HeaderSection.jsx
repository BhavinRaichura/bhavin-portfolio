"use client";

import React, {useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import SocialButtons from "@/components/SocialButtons";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

export const HeaderSection = () => {
  const textRef = useRef(null)

  const scrollToSection = (target) =>{
    gsap.to(window, {
      duration:1,
      scrollTo:`#${target}`,
    })
  }
  
    useEffect(() => {
      const tl = gsap.timeline();
      // Text animation
      textRef.current.childNodes.forEach((node,index)=>{
        tl.from(node,{
          opacity:0,
          //y:(window.innerHeight - node.offsetTop)/2 +50,
          //x:1000,
          scaleX:0.1,
          duration:0.5,
        },">")
      })

      return ()=>tl.kill()

    }, []);
    return (
      <div
        className="w-full h-full"
        style={{ background: "linear-gradient(10deg,#222730,#222730,#3b4658)" }}
      >
        <ParticlesHead /> 
        <div className="flex justify-center   h-full pt-20 items-center ">
          <div className=" flex w-4/5 max-lg:w-11/12 max-md:w-full">
            <div className="w-1/2 max-md:w-0  px-5 flex justify-end ">
             
              <div className="slider-thumb bg-sky-400"></div>
              <img
                src="/mypic.png"
                className=" absolute  scale-150 z-10 mx-20"
                alt="bhvain raichura"
              />
            </div>
            <div ref={textRef} className=" z-20 w-1/2 max-md:w-full  px-5 text-right flex flex-col gap-14">
              <h2 className=" ">

                  <span onClick={()=>scrollToSection("project")} className="text-gray-100 hover:underline hover:text-gray-200 font-light text-base cursor-pointer mr-10">MY WORK</span>

                  <span onClick={()=>scrollToSection("contact")} className="text-gray-100 hover:underline hover:text-gray-200 font-light text-base cursor-pointer">MESSAGE ME</span>

              </h2>
              <div className="flex  justify-end gap-5 items-center flex-wrap">
                <span className=" font-normal text-gray-400 ">Follow me on</span>
                <SocialButtons />
              </div>
  
              <div className="">
               
                <img
                  src="/signature.png"
                  id="signature"
                  className=" float-right"
                  alt="bhavin raichura"
                />
  
                <p className="w-60 h-2 float-right rounded-full bg-sky-500 my-2"></p>
              </div>
  
              <div className="">
                <h1 className=" text-3xl py-5">Full Stack Web developer</h1>
                <p className="text-base font-normal text-lime-500 ">Available</p>
              </div>
  
              <div className=" infinite-bouncing-animation ">
                <span onClick={()=>scrollToSection("project")} className=" linked-btn hover:underline">See my projects</span>
              </div>
            </div>
          </div>
        </div>
  
        <svg
          _ngcontent-serverApp-c6=""
          className=" relative z-30   "
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="400px"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            _ngcontent-serverApp-c6=""
            fill="#1f232b"
            fill-opacity="1"
            d="M0,64L30,80C60,96,120,128,180,138.7C240,149,300,139,360,149.3C420,160,480,192,540,176C600,160,660,96,720,85.3C780,75,840,117,900,117.3C960,117,1020,75,1080,64C1140,53,1200,75,1260,80C1320,85,1380,75,1410,69.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  };

  const ParticlesHead = () => {
    useEffect(() => {
      particlesJS("particles-js-head", {
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 400,
            },
          },
          color: {
            value: "#ffffff",
          },
  
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 10,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: true,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 100,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }, []);
  
    return (
      <div id="particles-js-head" className=" absolute w-full h-full z-10 "></div>
    );
  };
  
export default HeaderSection