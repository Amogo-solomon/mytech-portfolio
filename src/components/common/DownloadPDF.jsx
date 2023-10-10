import React from "react"

//Function to handle the download when the button is clicked
export const handleDownloadResume = () => {
  
    
   {/* create  a link element */}
  const link = document.createElement("a");
  link.href = "/resume.pdf"; {/* Replace with the actual path to ou PDF file */}
  link.target = "_blank";
  link.download = "resume-Amogo-Solomon.pdf"; {/* set the default download filename */}
  
 {/*  Trigger a click event to start the download */}
  link.click();
  
};

