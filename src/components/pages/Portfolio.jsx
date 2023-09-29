import React, { useState } from "react"
import { Heading } from "../common/Heading"
import { portfolio } from "../data/dummydata"
import { VisibilityOutlined } from "@mui/icons-material"

// Create an array containing unique categories by mapping over the portfolio data
const allCategory = ["all", ...new Set(portfolio.map((item) => item.category ))]
export const Portfolio = () => {
    // Initialize state variables using the useState hook
    const [list, setLists] = useState(portfolio)// list contains portfolio items
    const [category, setCategory] = useState(allCategory)// category contains unique categories
    console.log(setCategory)

    // Define a function to filter portfolio items based on selected category
    const filterItems = (category) => {
         // Filter portfolio items that match the selected category
        const newItems = portfolio.filter((item) => item.category === category)
         // Update the list state with the filtered items
        setLists(newItems)
         // If the category is "all," show all portfolio items
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
                    <button className="primaryBtn" 
                    key={category} // Add a unique key here (the category itself)
                    onClick={() => filterItems(category)}
                     data-aos='zoom-out-down' 
                    >
                       {category}  
                    </button>
                ))}
            </div>
            <div className="content grid2"> 
            {/* Map over the list of portfolio items and render project boxes */}
            {list.map((items) => (
                <a href={items.url} 
                   target="_blank"
                   rel="noopener noreferrer" 
                   key={items.cover} // Add a unique key here (using the project title)
                >
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


