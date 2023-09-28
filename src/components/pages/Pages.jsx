import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../common/Header";
import { Footer } from "./Footer";
import { Home } from "../home/Home"; // Import the specific component
import { About } from "./About"; // Import the specific component
import { Services } from "./Services"; // Import the specific component
import { Portfolio } from "./Portfolio"; // Import the specific component
import { Testimonials } from "./Testimonials"; // Import the specific component
import { Blog } from "./Blog"; // Import the specific component
import { Contact } from "./Contact"; // Import the specific component
import { Link, Element } from "react-scroll"; // Import Link and Element from react-scroll

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
        <Footer />
      </Router>
      <Link
        to="top" // Specify the ID of the element you want to scroll to (e.g., "top")
        smooth={true} // Enable smooth scrolling
        duration={500} // Duration of the scrolling animation in milliseconds
        className="scroll-to-top" // You can add a class for styling
      >
        Scroll to Top
      </Link>
      {/* Add the Element component with an ID corresponding to the Link */}
      <Element name="top" className="element" />
    </>
  );
};



/* REACT SCROLL
npm install react-scroll
# or
yarn add react-scroll
 */

