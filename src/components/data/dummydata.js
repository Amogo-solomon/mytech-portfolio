import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, 
  CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined,
   PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube, LinkedIn, GitHub } from "@mui/icons-material"

   export const navlink = [
      {
          url: "/",
          text: "Home",
      },
      {
          url: "/about",
          text: "About",
      },
      {
          url: "/services",
          text: "Services",
      },
      {
          url: "/portfolio",
          text: "Portfolio",
      },
      {
          url: "/testimonials",
          text: "Testimonials",
      },
      {
          url: "/blog",
          text: "Blog",
      },
      {
          url: "/contact",
          text: "Contact",
      },
   ]
   export const home = [
      {
          text: "WELCOME, I AM",
          name: "AMOGO SOLOMOM",
          post: "A FRONTEND DEVELOPER",
          design: "",
          desc: "I create scalable and effective software applications on the frontend and offer captivating, pixel-perfect user experiences. I am an adaptable Professional who has demonstrated leadership, problem-solving, and workflow-prioritizing skills",
      },
   ]
   export const about = [
      {
          desc: "Hello, I am Amogo Solomon, a passionate front-end developer dedicated to crafting remarkable digital experiences. With a keen eye for design and a love for coding, I am on a mission to make the web more beautiful and user-friendly. My journey into the world of web development began when I took a challenge to finish a course in front end development. Since then, I've continually honed my skills and knowledge to keep pace with the dynamic world of front-end technologies.",
          desc1: "I specialize in creating visually stunning and highly functional websites. Here are some of the tools and technologies I excel in: HMTL/CSS, Javascript, React.js, Responsive Design, Performance Optimization",
          cover: "./images/man4.png",
      },
   ]
   export const services = [
      {
          id: 1,
          icon: <Settings />,
          title: "Creative Design",
          desc: "Transforming ideas into visually stunning digital masterpieces that captivate and inspire",
      },
      {
          id: 2,
          icon: <CropRotate />,
          title: "Clean Code",
          desc: "Crafting digital solutions with precision and elegance, where every line of code tells a story of efficiency and reliability.",
      },
      {
          id: 3,
          icon: <ViewInAr />,
          title: "Responsive Design",
          desc: "Creating web experiences that seamlessly adapt to every screen size, from mobile to desktop.",
      },
      {
          id: 4,
          icon: <PieChart />,
          title: "Material UI	",
          desc: "Elevating your web application's aesthetics and usability with the elegance and functionality of Material Design",
      },
      {
          id: 5,
          icon: <Code />,
          title: "Material UI Icons",
          desc: "Enhancing user interfaces with a rich library of beautiful and intuitive icons.",
      },
      {
          id: 6,
          icon: <BarChart />,
          title: "Awesome Support",
          desc: "Your success is our priority, and we're here to provide you with unparalleled assistance every step of the way",
      },
  ]
  export const project = [
      {
          id: 1,
          icon: <CloudOutlined />,
          num: "3",
          title: "HAPPY CLIENTS",
      },
      {
          id: 2,
          icon: <FavoriteBorder />,
          num: "4",
          title: "PROJECTS COMPLETED",
        },
        {
          id: 3,
          icon: <Public />,
          num: "53",
          title: "FILES DOWNLOADED",
        },
        {
          id: 4,
          icon: <PersonOutlined />,
          num: "4500",
          title: "LINES OF CODE",
        },
  ]
  export const portfolio = [
      {
          id: 1,
          cover: "../images/port/port1.png",
          name: "Click to lunch",
          category: "Portfolio Web",
          title: "Portfolio Website",
          url: "https://mytech-portfolio.vercel.app/",
        },
        {
          id: 2,
          cover: "../images/port/port2.png",
          name: "Click to lunch",
          category: "Todo App",
          title: "Todo List App",
          url: "https://todoapp-iota-bay.vercel.app/",
        },
        {
          id: 3,
          cover: "../images/port/port3.png",
          name: "Click to lunch",
          category: "Quiz App",
          title: "Quiz App",
          url: "https://quizappio.vercel.app/",
        },
        {
          id: 4,
          cover: "../images/port/port4.png",
          name: "Click to lunch",
          category: "fintech",
          title: "Defi Crypto Platform",
          url: "https://fintech-defi.vercel.app/",
        },
        {
          id: 5,
          cover: "../images/port/port5.png",
          name: "click to lunch",
          category: "fintech",
          title: "Fintek crypto",
          url: "",
        }
  ]
  export const testimonials = [
      {
          id: 1,
          text: "Amogo Solomon's front-end development expertise shines through in every pixel-perfect detail, making him a true master of his craft.",
          image: "./images/testimonials/team-1a.png",
          name: "Sabastine Sean",
          post: "Full Stack Developer",
        },
        {
          id: 2,
          text: "Amogo Solomon's expertise as a front-end developer is matched only by his unwavering commitment to delivering exceptional web solutions, making him an invaluable asset in the world of digital craftsmanship",
          image: "./images/testimonials/team-2a.png",
          name: "Barr Ochi",
          post: "Legal Practitioner",
        },
        {
          id: 3,
          text: "Amogo Solomon's exceptional front-end development skills and commitment to precision make him a valuable collaborator in any DevOps environment, where attention to detail and reliability are paramoun",
          image: "./images/testimonials/team-3a.png",
          name: "Obeya",
          post: "DevOps Engineer",
        },
  ]
  export const blog = [
          {
            id: 1,
            title: "The Power of React.js in Web Development",
            date: "July 27th, 23",
            author: "Amogo Solomon",
            content: (
              <div>
                <p>
                  React.js, often referred to simply as React, is a JavaScript library
                  that has revolutionized the world of web development. With its
                  declarative and component-based approach, React has brought a new
                  level of efficiency and flexibility to building user interfaces.
                </p>
                {/* Add the full content here */}
              </div>
            ),
            summary:
              "React.js, often referred to simply as React, is a JavaScript library...",
            cover: "./images/blog/b1.png",
          },
          {
            id: 2,
            title: "The Power of Chat GPT in Coding",
            date: "August 30th, 23",
            author: "Amogo Solomon",
            content: (
              <div>
                <p>
                In recent years, artificial intelligence has made significant strides
                in various fields, and coding is no exception. Chat GPT, powered by
                models like GPT-3.5, is a prime example of AI's potential to assist
                and enhance the coding process.
                </p>
                {/* Add the full content here */}
              </div>
            ),
            summary:
              "In recent years, artificial intelligence has made significant strides...",
            cover: "./images/blog/b2.png",
          },
          {
            id: 3,
            title: "Can Chat GPT Replace Programmers?",
            date: "Sept 22nd, 2023",
            author: "Amogo Solomon",
            content: (
              <div>
                <p>
                The rise of advanced AI models like Chat GPT has sparked discussions
                about the possibility of AI replacing programmers entirely. While AI
                has made significant strides in automating various tasks, the idea of
                replacing programmers entirely is a complex and nuanced topic.
                </p>
                {/* Add the full content here */}
              </div>
            ),
            summary:
              "The rise of advanced AI models like Chat GPT has sparked discussions...",
            cover: "./images/blog/b3.png",
          },
  ]
  export const contact = [
      {
          icon: <AddLocationAltOutlined />,
          text1: "Adjacent Golden Apple Plaza, Gidan Daya",
          text2: "Abuja, Nigeria",
        },
        {
          icon: <PhoneIphone />,
          text1: "+234 8166617463",
          text2: "+234 7016285067",
        },
        {
          icon: <EmailOutlined />,
          text1: "amogoagaba@gmail.com",
          text2: "",
        },
  ]
  export const social = [
      
        {
          icon: <YouTube />,
          url: "",
        },
        {
          icon: <LinkedIn />,
          url: "https://www.linkedin.com/in/amogosolomon/",
        },
        {
          icon: <GitHub />,
          url: "https://github.com/Amogo-solomon",
        },
  ]
