 import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"
import { handleDownloadResume } from "../common/DownloadPDF"

export const About = () => {
  return (
    <>
     <section className="about">
        <div className="container">
          {about.map((val, k) =>(
            <div className="flex"  key={k} > {/* Add a unique key here */}
                <div className="left" data-aos='fade-down-right'>
                    <img src={val.cover} alt='' height='90%' width='75%' />
                </div>
                <div className="right" data-aos='fade-down-left'>
                    <Heading title='About Me' />
                    <p>{val.desc}</p>
                    <p>{val.desc1}</p>
                    {/* <button className="primaryBtn2" onClick={handleDownloadResume }>Download Resume</button> */}
                    <button className="primaryBtn" onClick={handleDownloadResume }>Download Resume</button>
                </div>
            </div>
          ))}
        </div>
      </section>
    </>
)}