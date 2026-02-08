import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// Import images
import acePyImg from '../assets/images/ace-py.png';
import sallm3Img from '../assets/images/SALLM3.png';
import debateImg from '../assets/images/LLM-debate-battle.png';
import timingIndicatorImg from '../assets/images/timing-indicator.png';
import starImg from '../assets/images/STAR.png';
import fineTuningImg from '../assets/images/FineTuning.png';

interface Project {
  title: string;
  category: string;
  description: string;
  tech?: string[];
  link?: string;
  github?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "ace-py",
    category: "OSS",
    description: "A wrapper library to use the AI agent ACE from Python.",
    tech: ["AI", "MCP", "Library", "Python"],
    github: "https://github.com/kurusugawa-computer/ace-py",
    image: acePyImg
  },
  {
    title: "SALLM3",
    category: "AI Application",
    description: "Object detection application combining SAM3 and LLM.",
    tech: ["AI", "LLM", "SAM3", "Python", "TypeScript"],
    github: "https://github.com/levyxx/SALLM3",
    image: sallm3Img
  },
  {
    title: "LLM-debate-battle",
    category: "AI Application",
    description: "AI interactive debate application.",
    tech: ["AI", "LLM", "Chat", "Go", "TypeScript"],
    github: "https://github.com/levyxx/LLM-debate-battle",
    image: debateImg
  },
  {
    title: "osu-mania-timing-indicator",
    category: "Tools",
    description: "Overlay tool used in osu!mania.",
    tech: ["Tool", "Game", "Overlay", "Electron", "TypeScript"],
    github: "https://github.com/levyxx/osu-mania-timing-indicator",
    image: timingIndicatorImg
  },
  {
    title: "Research on STAR Framework",
    category: "Research",
    description: "Research and report on the AI architecture framework \"STAR\".",
    tech: ["AI", "LLM"],
    link: "https://arxiv.org/pdf/2411.17800",
    image: starImg
  },
  {
    title: "LLM Finetuning Competition",
    category: "Competition",
    description: "Participated in an LLM fine-tuning competition.",
    tech: ["AI", "LLM", "PyTorch", "Competition", "Python"],
    image: fineTuningImg
  }
];

const ProjectCard = ({ project, index }: { project: Project, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10 group"
  >
    {/* Image Placeholder */}
    <div className="h-48 bg-slate-800 w-full flex items-center justify-center text-slate-500 group-hover:bg-slate-700 transition-colors">
        {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
            <span>Image Placeholder</span>
        )}
    </div>
    
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
          {project.category}
        </span>
        <div className="flex gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
              <Github size={18} />
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-slate-400 mb-4 text-sm leading-relaxed">
        {project.description}
      </p>

      {project.tech && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map(t => (
            <span key={t} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-white"
        >
          Selected Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
