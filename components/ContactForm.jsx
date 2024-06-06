"use client";

import Image from "next/image";
import React, { useState } from "react";

import { IoMailUnread } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";

const ContactForm = () => {
 {/* const [subject, setSubject] = useState("");
const [body, setBody] = useState(""); */}
  return (
    <div id="contact" className="flex justify-center py-20 relative z-50">
      <div className=" backdrop-blur-lg rounded-lg  px-20 max-md:px-10 py-20 ">
        <div className="">
          <div className="flex justify-center">
            <Image
              src="/dp.jpg"
              alt="bhavin raichura"
              width={150}
              height={150}
              className="w-40 h-40 rounded-full"
            />
          </div>
          <p className=" text-center title-text">Bhavin Raichura</p>
          <p className="descriptive-text text-center">
            
            <a href="mailto:bhavinraichura28@gmail.com">
              bhavinraichura28@gmail.com
            </a>
          </p>
        </div>

        <div className="flex justify-center">
          {/*<form className="w-96 max-md:w-full px-5 py-10   ">
            <div className="group">
              <span
                className={`relative  z-30 transition-all text-lg  left-5  px-2 py-0.5  group-focus-within:b rounded-full  ${
                  subject.length === 0
                    ? " top-10 group-focus-within:bg-slate-700 group-focus-within:top-3 group-focus-within:z-50 "
                    : " top-3 bg-slate-700 z-50 "
                } `}
              >
                Subject
              </span>
              <input
                type="text"
                name="subject"
                id=""
                className="py-4 relative z-40 px-4 text-base w-full bg-transparent outline-none border rounded-md border-gray-600 focus:border-gray-300"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="group">
              <span
                className={`relative z-30 transition-all text-lg  left-5  px-2 py-0.5  group-focus-within:b rounded-full  ${
                  body.length === 0
                    ? " group-focus-within:z-50 top-10 group-focus-within:bg-slate-700 group-focus-within:top-3 "
                    : " top-3 bg-slate-700 z-50"
                } `}
              >
                Start writing...
              </span>
              <textarea
                name="body"
                id=""
                cols="30"
                rows="10"
                className="py-4 relative z-40 px-4 text-base w-full bg-transparent outline-none border rounded-md  border-gray-600 focus:border-gray-300"
                onChange={(e) => setBody(e.target.value)}
                required
              ></textarea>
            </div>
            <a
              href={`mailto:bhavinraichura28@gmail.com?subject=${subject}&body=${body}`}
              className={` cursor-pointer ${
                body.length && subject.length ? "  " : "  "
              } `}
            >
              <p className="w-full py-2 my-8 text-center bg-sky-500 rounded-md text-black">
                bhavinraichura28@gmail.com
              </p>
            </a>
          </form>*/}
        </div>
        <div className=" w-full h-40   z-50 relative flex text-3xl ">
          <a
            href="tel:8085129146"
            className="w-1/2 group text-center hover:backdrop-brightness-90 text-gray-400 flex-col hover:text-gray-100 flex justify-center items-center "
          >
            <PiPhoneCallFill className=" w-10 h-10 p-1 text-sky-500" />
            <p className="w-40 h-0.5  float-right rounded-full bg-sky-500 my-2"></p>
          </a>
          <a
            href="mailto:bhavinraichura28@gmail.com"
            className="w-1/2 group text-center hover:backdrop-brightness-90 text-gray-400 flex-col hover:text-gray-100 flex justify-center items-center"
          >
            <IoMailUnread className=" w-10 h-10 p-1 text-sky-500" />
            <p className="w-40 h-0.5  float-right rounded-full bg-sky-500 my-2"></p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
