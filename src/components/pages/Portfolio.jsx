import React, { useState } from "react"
import { Heading } from "../common/Heading"
import { portfolio } from "../data/dummydata"
import { VisibilityOutlined } from "@mui/icons-material"

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category ))]
export const Portfolio = () => {
    const [list, setLists] = useState(portfolio)
    const [category, setCategory] = useState(allCategory)
    console.log(setCategory)

    const filterItems = (category) => {
        const newItems = portfolio.filter((item) => item.category === category)
        setLists(newItems)
        if (category === "all") {
            setLists(portfolio);
        }
    }
  return (
  <>
  <article>
        <div className="container">
            <Heading title='Portfolio Projects' />
            <div className="catButton">
                {category.map((category) => (
                    <button className="primaryBtn" onClick={() => filterItems(category)} data-aos='zoom-out-down'>
                       {category}  
                    </button>
                ))}
            </div>
            <div className="content grid2"> 
            {list.map((items) => (
                <a href={items.url} target="_blank" rel="noopener noreferrer" key={items.title}>
                {/* wrap each project in an ancor element */}
                <div className="box" data-aos='flip-left'>
                    <div className="img">
                        <img src={items.cover} alt='' />
                    </div>
                    <div className="overlay">
                        <h3>{items.title}</h3>
                        <span>{items.name}</span>
                        <VisibilityOutlined />
                    </div>
                </div>
                </a>
            ))}
            </div>
        </div>
  </article>
  </>
  )
}


