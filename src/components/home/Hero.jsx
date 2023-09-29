import React from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"
import { handleDownloadResume } from "../common/DownloadPDF"


export const Hero = () => {

  return (
    <>
      <section className="hero">
        {home.map((val,l) =>(
            <div className="heroContainer" key={l}>
                <h3 data-aos='fade-right'>{val.text}</h3>
                <h1>
                    <Typewriter 
                    options={{ strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                    autoStart: true,
                    loop: true,
                     }}
                   />
                </h1>
                    <p data-aos='fade-left'>{val.desc}</p>
                    <button className="primaryBtn" data-aos='fade-right' onClick={handleDownloadResume }>Download Resume</button>
            </div>
        ))}
      </section>
    </>
  )
}

