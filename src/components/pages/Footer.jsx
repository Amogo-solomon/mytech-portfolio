import React from "react"
import { social } from '../data/dummydata'


export const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
            <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.id}>
                <i data-aos='zoom-in-left'>{item.icon}</i>
           </a>
        ))}
        <p data-aos='zoom-in-right'>All Right Reserves 2023</p>
      </footer>
    </>
  )
}

