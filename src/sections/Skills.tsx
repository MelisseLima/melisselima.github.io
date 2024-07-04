import React from 'react';
import './../App.css';

interface Skill {
  name: string;
  level: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills-cont">
      <h3>Skills</h3>
      {skills.map((skill, index) => (
        <div key={index}>
          <span>{skill.name}</span>
          <span>{skill.level}</span>
        </div>
      ))}

      <div className="badges">
        <span className="badge badge-pill badge-primary">Jquery</span>
        <span className="badge badge-pill badge-secondary">Bootstrap</span>
        <span className="badge badge-pill badge-success">NodeJS</span>
        <span className="badge badge-pill badge-success">ExpressJS</span>
        <span className="badge badge-pill badge-danger">ReactNative</span>
        <span className="badge badge-pill badge-warning">Firebase</span>
        <span className="badge badge-pill badge-info">ReactJS</span>
        <span className="badge badge-pill badge-dark">MongoDB</span>
        <span className="badge badge-pill badge-secondary">MySql</span>
        <span className="badge badge-pill badge-primary">Postgres</span>
        <span className="badge badge-pill badge-info">Docker</span>
        <span className="badge badge-pill badge-secondary">SqLite</span>
        <span className="badge badge-pill badge-danger">AWS</span>
      </div>
    </section>
  );
};

export default Skills;
