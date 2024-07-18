import React, { useState, useEffect } from 'react';
import './Style.css';
import Section from '../components/Section';

const roles = [
  "Web Developer",
  "Data Analyst",
  "Graphic Designer",
  "Business Consultant",
  "Project Manager"
];

const quote = 'The journey to success starts with one step.';
function App() {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility of the MoreAbout component
  const [currentRole, setCurrentRole] = useState(0); // State to keep track of the current role displayed

  useEffect(() => {
    // Set up an interval to change the role every 2 seconds
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle the isVisible state
  };

  return (
    <div className="container">
      <div className="text-content">
        <p className="title" style={{color:"aqua"}}>Daniel Ogera Ongaki</p> {/* User's name */}
        <p className="title">{quote}</p>
        <p className="description"><span className="role">{roles[currentRole]}</span></p> {/* Rotating role */}
      </div>
      <button id='know-me' onClick={toggleVisibility}>{isVisible ? 'Less' : 'More'}</button> {/* Toggle button */}
      {isVisible && <MoreAbout />} {/* Conditionally render the MoreAbout component */}
    </div>
  );

  function MoreAbout() {
    return (
      <div>
        <section className='MoreAbout'>
          <Section
            imageSrc={'./src/assets/Images/AI.png'}
            title={'Bridging Technology and Business'}
            description={"Welcome to my profile. I'm Daniel Ogera Ongaki, an IT student with a strong passion for business innovation. My journey began with a fascination for the synergy between technology and entrepreneurship. Currently focusing on advanced Python development and graphic design, I am committed to exploring cutting-edge solutions that seamlessly integrate technical expertise with creative vision. Through my pursuits, I aspire to deliver impactful projects that resonate within the digital landscape and contribute meaningfully to business endeavors. Join me as I navigate this exciting intersection of technology and entrepreneurship, driven by a relentless pursuit of knowledge and innovation."}
          />
        </section>
        <section className='MoreAbout' style={{flexDirection: 'row-reverse'}}>
          <Section
            imageSrc={'./src/assets/Images/section4_img.png'}
            title={'Exploring Creativity and Technical Expertise'}
            description={"Embark on a journey through my creative projects and technical endeavors. Discover how I merge artistic flair with technical proficiency in areas such as graphic design and Python development. From visual storytelling to functional coding solutions, explore the diverse facets of my skill set that reflect a passion for innovation and craftsmanship."}
          />
        </section>
        <section className='MoreAbout'>
          <Section
            imageSrc={'./src/assets/Images/section3_img.jpg'}
            title={'Navigating the Intersection of IT and Business'}
            description={"Join me in navigating the dynamic intersection of IT and business acumen. Explore my journey as an IT student and business enthusiast, where I strive to blend technical expertise with strategic thinking. From project management to entrepreneurial endeavors, uncover how I leverage technology to drive meaningful outcomes and shape future innovations."}
          />
        </section>
      </div>
    );
  }
}

export default App;
