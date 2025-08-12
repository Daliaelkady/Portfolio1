import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
  { icon: <FaJsSquare />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <FaReact />, name: "React", color: "#61DAFB" },
  { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map(({ icon, name, color }) => (
          <div key={name} className="skill" style={{ color }}>
            {icon}
            <p>{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
