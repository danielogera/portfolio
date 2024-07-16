import React from 'react';
import './Style.css';

const SkillsPage = () => {
  // Defining arrays for the list items
  const technicalSkills = [
    "Programming Languages: Python, JavaScript",
    "Web Development: HTML, CSS, React",
    "Database Management: SQL, NoSQL",
    "Tools and Technologies: Git, Docker, AWS"
  ];

  const designSkills = [
    "Graphic Design Software: Adobe Photoshop, Capcut, Canva",
    "UI/UX Design: Figma, Sketch"
  ];

  const businessSkills = [
    "Project Management: Agile, Scrum",
    "Business Analysis",
    "Marketing and SEO"
  ];

  const softSkills = [
    "Communication",
    "Team Collaboration",
    "Problem-Solving",
    "Time Management"
  ];

  const certificationsAndCourses = [
    "AWS Certified Solutions Architect",
    "Google Analytics",
    "Various Online Courses and Workshops"
  ];

  const experienceAndProjects = [
    "Notable Projects: AI Asistant, React web development",
    "Freelance and Internship Experiences"
  ];

  const languages = [
    "English",
    "Kiswahili",
    "Ekegusii"
  ];

  const hobbiesAndInterests = [
    "Blogging",
    "Open-source Contributions",
    "Reading",
    "Travelling" 
  ];

  return (
    <div className="skills-page">
      <h1 className="title1">My Skills</h1>

      <section className="skills-section">
        <h2>Technical Skills</h2>
        <ul>
          {technicalSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="skills-section">
        <h2>Design Skills</h2>
        <ul>
          {designSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="skills-section">
        <h2>Business Skills</h2>
        <ul>
          {businessSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="skills-section">
        <h2>Soft Skills</h2>
        <ul>
          {softSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="skills-section">
        <h2>Certifications and Courses</h2>
        <ul>
          {certificationsAndCourses.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="skills-section">
        <h2>Experience and Projects</h2>
        <ul>
          {experienceAndProjects.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="skills-section">
        <h2>Languages</h2>
        <ul>
          {languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </section>

      <section className="skills-section">
        <h2>Hobbies and Interests</h2>
        <ul>
          {hobbiesAndInterests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SkillsPage;
