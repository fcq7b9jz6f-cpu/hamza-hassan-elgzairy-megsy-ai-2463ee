import React from 'react';
import { ui } from '../lib/theme';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Megsy AI Core",
    description: "Developing the core AI architecture for Megsy, focusing on scalable model deployment and real-time processing.",
    tags: ["Python", "PyTorch", "FastAPI", "Docker"],
    link: "#",
    github: "#"
  },
  {
    title: "EcoSmart Predictor",
    description: "An AI-powered system for predicting energy consumption in smart buildings, reducing waste by 25%.",
    tags: ["TensorFlow", "Scikit-learn", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    title: "VisionScan Pro",
    description: "Advanced computer vision application for automated quality control in manufacturing lines.",
    tags: ["OpenCV", "React", "Node.js"],
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  return (
    <div className={`${ui.section} ${ui.container}`}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className={`${ui.h1} ${ui.gradientText} mb-4`}>Projects</h1>
        <p className="text-lg text-text-muted">A showcase of my recent work in AI engineering and full-stack development.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className={ui.card}>
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-text-muted mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-violet-400 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.link} className="text-white hover:text-violet-400 transition-colors"><ExternalLink size={20} /></a>
              <a href={project.github} className="text-white hover:text-violet-400 transition-colors"><Github size={20} /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
