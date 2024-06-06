"use client";


import React, { useEffect, useRef, useState } from "react";

// intro comp
import { FaQuoteRight } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// social comp light
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import Title from "./Title";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export const IntroSection = () => {
  const quoteText = useRef(null);
  const heroRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    quoteText.current.childNodes.forEach((node, index) => {
      tl.from(
        node,
        {
          duration: 0.3,
          opacity: 0,
        },
        ">"
      );
    });

    tl.from(
      rightRef.current,
      {
        duration: 0.3,
        opacity: 0,
      },
      ">"
    );

    tl.pause();

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => tl.play(),
      //onLeave:()=>tl.reverse(),
      onEnterBack: () => tl.play(),
      onLeaveBack: () => tl.reverse(),
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      className="z-50 relative h-full"
      style={{ background: "#1f232b" }}
      ref={heroRef}
    >
      <div className=" w-full h-full text-gray-400 ">
        <Title title={"INTRODUCTION"} />

        <div className="  p-2  text-center   flex  justify-center">
          <div className=" h-full gap-10 flex items-baseline max-md:flex-col justify-center w-3/5  max-xl:w-11/12 max-md:w-full">
            <div ref={quoteText} className="w-1/2 max-md:w-full  p-5">
              <p className=" descriptive-text my-10">
                Based in Raipur, Chhattisgarh, my journey into software development began during my college, where I was introduced to coding through data structures, AI, ML, and web development. Supplementing my academic foundation with several web development courses and internships, I have evolved into a proficient Full Stack Developer.
              </p>
              
              <div className="flex items-baseline  gap-8 ">
                <div>
                  <FaQuoteRight className=" w-10 h-10 text-slate-800" />
                </div>
                <p className=" text-xl font-normal  leading-10 my-10 text-left">
                  "Your work is going to fill a large part of your life, and the
                  only way to be truly satisfied is to do what you believe is
                  great work." - Steve Jobs
                </p>
              </div>
            </div>
            <div
              ref={rightRef}
              className="w-1/2 max-md:w-full flex flex-col justify-center items-center h-full px-2  z-50"
            >
              <p className=" title-text w-full ">
                National Institute Of Technology Raipur
              </p>
              <p className="w-40 h-0.5  rounded-full bg-sky-400 my-2"></p>
              <p className="flex items-center text-xs">
                <span>2019</span>{" "}
                <span className=" text-sky-400 text-3xl mx-2 rounded-full">
                  {" "}
                  -{" "}
                </span>{" "}
                <span className=" text-xs">2023</span>
              </p>

              <p className=" text-xl p-2">Bachelor of Technology</p>
              <p className=" text-base p-2  w-full">Biomedical Engineering</p>
              <img
                src="/degree-man.png"
                alt="degree"
                className=" h-80 py-5 w-full brightness-75"
              />
            </div>
          </div>
        </div>
      </div>
      <svg
        _ngcontent-serverApp-c7=""
        className=" rotate-180  bg-slate-950"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="250px"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
        class="ng-tns-c7-2"
      >
        <path
          _ngcontent-serverApp-c7=""
          fill="#1f232b"
          fill-opacity="1"
          d="M0,224L30,208C60,192,120,160,180,165.3C240,171,300,213,360,213.3C420,213,480,171,540,154.7C600,139,660,149,720,160C780,171,840,181,900,160C960,139,1020,85,1080,90.7C1140,96,1200,160,1260,186.7C1320,213,1380,203,1410,197.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          class="ng-tns-c7-2"
        ></path>
      </svg>
    </div>
  );
};

export default IntroSection;
