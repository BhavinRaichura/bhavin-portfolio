"use client";

import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import SocialButtons from "@/components/SocialButtons";

const ResumeSection = () => {
  const [light, setLight] = useState(0);
  const heroRef = useRef();
  const lightRef = useRef();
  const lightImgRef = useRef();
  const resumeRef = useRef();

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let pin = gsap.timeline();
    pin.to(heroRef.current, {
      scrollTrigger: {
        trigger: lightRef.current,

        scrub: 5,
        pin: true,
        start: "150 top",
        end: "+=1800 bottom",
        //markers: true,
        onEnter: () => {
          setLight(1);
        },
        onLeaveBack: () => {
          setLight(0);
        },
      },
    });

    pin.to(resumeRef.current, {
      rotate: -15,
      scrollTrigger: {
        trigger: resumeRef.current,
        scrub: 5,
        pin: true,
        start: "-=300 200",
        end: "+=800 bottom",
      },
    });
  }, []);

  return (
    <div
      className=" h-full  overflow-hidden "
      style={{ background: "#1f232b" }}
      id="resumeSection"
    >
      
      <div ref={heroRef}>
        <div
          ref={lightRef}
          className=" flex justify-center w-full h-screen items-center"
        >
          <img
            ref={lightImgRef}
            src="/spotlight.png"
            className={
              " max-md:scale-150 z-0 absolute my-28 max-md:my-40 max-sm:my-48 transition-all " +
              (light ? " brightness-50 " : " brightness-0 opacity-20")
            }
            alt=""
          />
          <div
            className={
              "group flex z-10 p-5 flex-col max-md:w-full gap-4 justify-center items-center text-gray-200  w-full bg-transparent "
            }
          >
            <h1
              className={` text-3xl text-center ${
                light ? " text-gray-200 " : "text-gray-600"
              }`}
            >
              {"Let's meet up toghether!"}
            </h1>
            <p
              className={
                "w-40 h-0.5  float-right rounded-full  group-hover:bg-sky-500 my-2 " +
                (light ? " bg-gray-500" : " bg-gray-700")
              }
            ></p>

            <p
              className={` text-base ${
                light ? " text-gray-200 " : "text-gray-600"
              }`}
            >
              Follow me on
            </p>

            <div className={`  ${
                light ? " brightness-100 " : "brightness-50"
              }`}>
              <SocialButtons />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" flex flex-col justify-center items-center"
          style={{ background: "#1f232b" }}
        >
          <div>
            <a href={process.env.RESUME_URI} className="linked-btn hover:underline my-10">Download resume</a>
          </div>
          <div className=" relative top-20 max-md:top-60 w-full h-96 flex justify-center">
            <img
              ref={resumeRef}
              className="  w-1/2 max-md:w-3/5 absolute mb-60  rounded-lg  rotate-2  z-10"
              src="/resume-p1.png"
              alt=""
            />
            <img
              className="  w-1/2 max-md:w-3/5  absolute mb-60 rounded-lg rotate-12  z-0"
              src="/resume-p2.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <svg
        _ngcontent-serverApp-c9=""
        className="z-50 relative top-1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="250px"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
        class="ng-tns-c9-3"
      >
        <path
          _ngcontent-serverApp-c9=""
          fill="#222730"
          fill-opacity="1"
          d="M0,96L30,117.3C60,139,120,181,180,197.3C240,213,300,203,360,176C420,149,480,107,540,117.3C600,128,660,192,720,192C780,192,840,128,900,90.7C960,53,1020,43,1080,53.3C1140,64,1200,96,1260,117.3C1320,139,1380,149,1410,154.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          class="ng-tns-c9-3"
        ></path>
      </svg>
    </div>
  );
};

export default ResumeSection;
