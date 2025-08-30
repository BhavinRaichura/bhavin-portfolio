"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import Title from "./Title";
import ProjectSection from "./ProjectSection";

import { FaNode, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFlask,SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import WavesUI from "./WavesUI";






gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const quoteText = useRef(null);
  const heroRef = useRef(null);
  const skillsCardRef = useRef(null);

  useEffect(() => {
    const tlText = gsap.timeline();
    const tlCard = gsap.timeline();
    
    
    skillsCardRef.current.childNodes.forEach((node, index)=>{
      tlCard.from(node,{
        x : -1000,
        ease : "slow.in",
        duration:0.2,
        
      },">")
    })
    
    quoteText.current.childNodes.forEach((node, index) => {
      tlCard.from(
        node,
        {
          duration: 0.3,
          opacity: 0,
        
        },
        ">"
      );
    });


    tlText.pause();
    tlCard.pause();

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "-200 top",
      end: "bottom center",
      scrub:5,
      onEnter: () =>{ 
            tlText.play()
            tlCard.play()
      },
      //onLeave:()=>tlText.reverse(),
      onEnterBack: () =>{
        tlText.play()
      },
      onLeaveBack: () => {
        tlText.reverse(),
        tlCard.reverse()
      },
      

      
    });

    return () => {
      tlText.kill();
    };
  }, []);

  return (
    <div className="w-full h-full" style={{backgroundColor:"#1c2027"}} id="skills">
    <div ref={heroRef}  >
      <Title title={"SKILLS"}/>
      <div className="  flex justify-center  items-center h-full ">
        <div className="w-3/5  max-xl:w-11/12 max-md:w-full flex flex-wrap justify-center ">
          <div ref={skillsCardRef} className=" infinite-bouncing-animation  w-1/2 p-2 max-md:w-full flex flex-col  justify-center items-center ">
            <div
              className="  relative z-30 md:w-96 max-md:w-80 h-40 bg-gray-900 rounded-2xl shadow-xl shadow-black hover:shadow-gray-950  transition-all border-b-2 border-l-4 border-gray-800 "
              style={{ transform: "rotate3d(-.9,-.6,.2,-44deg)" }}
            >
              <div className="">
                <div className="flex  items-center md:px-10 max-md:pl-8 max-md:pr-12 py-10 gap-5 justify-start">
                  <img
                    className="w-14 h-14"
                    src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
                    alt=""
                    title="C++"
                  />
                  <img
                    className="w-14 h-14"
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                    alt=""
                    title="JavaScript"
                  />
                  <img
                    className="w-14 h-14"
                    src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
                    alt=""
                    title="Python"
                  />
                </div>
                <p className=" relative md:-right-40 md:top-16 max-md:-right-32  max-md:top-9 rotate-90  ">
                  Programming <br /> Languages
                </p>
              </div>
            </div>

            <div
              className=" relative z-20 -top-10 md:w-96 max-md:w-80 h-40 bg-gray-900 rounded-2xl shadow-xl shadow-black hover:shadow-gray-950 hover:translate-x-10 transition-all border-b-2 border-l-4 border-gray-800 "
              style={{ transform: "rotate3d(-.9,-.6,.2,-44deg)" }}
            >
              <div className="">
                <div className="flex  items-center md:px-10 max-md:pl-8 max-md:pr-12 py-10 gap-5 justify-start">
                  <img
                    className="w-14 h-14"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png"
                    alt=""
                    title="React.js"
                  />
                  <img
                    className="w-14 h-14"
                    src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
                    alt=""
                    title="Next.js"
                  />
                  <img
                    className="w-14 h-14"
                    src="https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp"
                    alt=""
                    title="TailwindCSS"
                  />
                </div>
                <p className=" relative md:-right-40 md:top-20 max-md:-right-32 max-md:top-12 rotate-90  ">
                  Frontend
                </p>
              </div>
            </div>

            <div
              className=" relative z-10 -top-20 md:w-96 max-md:w-80 h-40 bg-gray-900 rounded-2xl shadow-xl shadow-black hover:shadow-gray-950 hover:translate-x-10 transition-all border-b-2 border-l-4 border-gray-800 "
              style={{ transform: "rotate3d(-.9,-.6,.2,-44deg)" }}
            >
              <div className="">
                <div className="flex  items-center md:px-10 max-md:pl-8 max-md:pr-12 py-10 gap-5 justify-start">
                  <img
                    className="w-14 h-14"
                    src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png"
                    alt=""
                    title="Express.js"
                  />
                  <img
                    className="w-14 h-14 bg-white"
                    src="https://static-00.iconduck.com/assets.00/flask-icon-2048x1826-nxzeqh6a.png"
                    alt=""
                    title="Flask"
                  />
                  <img
                    className="w-14 h-14"
                    src="https://p7.hiclipart.com/preview/306/37/167/node-js-javascript-web-application-express-js-computer-software-others.jpg"
                    alt=""
                    title="Node.js"

                  />
                </div>
                <p className=" relative md:-right-40 md:top-20 max-md:-right-32 max-md:top-12 rotate-90  ">
                  Backend
                </p>
              </div>
            </div>

            <div
              className=" relative z-0 -top-32 md:w-96 max-md:w-80 h-40 bg-gray-900 rounded-2xl shadow-xl shadow-black hover:shadow-gray-950 hover:translate-x-10 transition-all border-b-2 border-l-4 border-gray-800 "
              style={{ transform: "rotate3d(-.9,-.6,.2,-44deg)" }}
            >
              <div className="">
                <div className="flex  items-center md:px-10 max-md:pl-8 max-md:pr-12 py-10 gap-5 justify-start">
                  <img
                    className="w-14 h-14"
                    src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
                    alt=""
                    title="MongoDB"
                  />
                  <img
                    className="w-14 h-14"
                    src="https://cdn.icon-icons.com/icons2/1381/PNG/512/mysqlworkbench_93532.png"
                    alt=""
                    title="MySQL"
                  />
                </div>
                <p className=" relative md:-right-40 md:top-20 max-md:-right-32 max-md:top-12 rotate-90  ">
                  Databse
                </p>
              </div>
            </div>
          </div>

          <div
            ref={quoteText}
            className="  w-1/2 p-5 max-md:w-full text-center  font-light  my-10   "
          >
            <p className=" overflow-hidden pb-5 descriptive-text">
              With 1.5 years of industry experience, I've developed strong expertise in both frontend and backend technologies. I specialize in building scalable web applications using modern frameworks and tools shown here.
            </p>
              
            <p className=" overflow-hidden  py-5 descriptive-text">
              My professional experience has equipped me with strong problem-solving skills and a deep understanding of software development best practices. I excel in collaborative environments and focus on delivering efficient, maintainable solutions.
            </p>
           
          </div>
        </div>
      </div>
      <WavesUI backgroundColor="#1c2027" rotation="0" fillColor="rgb(24, 27, 33)" classes="bg-slate-950 relative top-2 " />
      
    </div>
    </div>
  );
};
export default SkillsSection;
