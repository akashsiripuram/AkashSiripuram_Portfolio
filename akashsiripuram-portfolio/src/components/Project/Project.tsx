import React, { useState } from 'react';
import { ExternalLink, Globe } from 'lucide-react';

const projectsData = [
  {
    name: "HerCycleDiary",
    github: "https://github.com/akashsiripuram/HerCycleDiary",
    duration: "Apr 2025",
    description:
      "Menstrual tracker with cycle prediction, food tips, and Gemini AI chatbot.",
    features: [
      "Period tracking & prediction",
      "Cramp-based food tips",
      "Cycle history view",
      "Gemini AI support"
    ],
    techStack: ["React.js (Vite)", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Gemini AI"],
    image: "HERCYCLEDIARY.png",
  },
  {
    name: "CivicSphere",
    github: "https://github.com/akashsiripuram/CivicSphere",
    live: "https://civic-sphere.vercel.app/",
    duration: "Feb 2025",
    description:
      "Sustainable city platform for issue reporting, planning, and emergency response.",
    features: [
      "Real-time planning",
      "AI emergency alerts",
      "Issue reporting with images",
      "Resource sharing"
    ],
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "AWS S3", "Gemini AI"],
    image: "civicsphere.png"
  },
  {
    name: "Bob",
    github: "https://github.com/akashsiripuram/bob",
    live: "https://bob-v1.vercel.app/",
    duration: "Jan 2025",
    description:
      "Solana-powered platform for crowdsourced data labeling and crypto rewards.",
    features: [
      "Quest creation & bounty",
      "Analytics dashboard",
      "Solana payments",
      "Multi-format exports"
    ],
    techStack: ["React", "Tailwind CSS", "shadcn/ui", "Node.js", "MongoDB", "Solana"],
    image: "BOB.png",
  },
  {
    name: "eduWave",
    github: "https://github.com/akashsiripuram/eduWave",
    live: "https://edu-wave.vercel.app",
    duration: "Mar 2024",
    description:
      "Interactive learning platform with tasks, assessments, and video classes.",
    features: [
      "Student & task management",
      "Live video sessions",
      "Progress analytics",
      "Quizzes & resources"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Vite"],
    image: "EDUWAVE.png",
  }
];

function ProjectCard({ project }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    const handleViewProject = () => {
        if (project.live) {
            window.open(project.live, '_blank');
        }
    };

    const handleViewGithub = () => {
        window.open(project.github, '_blank');
    };

    return ( 
        <div className="flex flex-col items-center justify-center border border-gray-800 rounded-3xl p-6 w-full max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 group">
            {/* iframe Container - Only show if live link exists */}
            {project.live && (
                <div className="relative w-full mb-6 overflow-hidden rounded-2xl bg-gray-800">
                    {/* Loading State */}
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-2xl z-10">
                            <div className="flex flex-col items-center space-y-4">
                                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                <p className="text-gray-400 text-sm">Loading preview...</p>
                            </div>
                        </div>
                    )}
                    
                    {/* Browser Frame */}
                    <div className="bg-gray-800 p-3 rounded-t-2xl border-b border-gray-700">
                        <div className="flex items-center space-x-2">
                            <div className="flex space-x-1.5">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="flex-1 mx-4">
                                <div className="bg-gray-700 rounded-md px-3 py-1 text-gray-300 text-xs font-mono flex items-center space-x-2">
                                    <Globe size={12} />
                                    <span>{project.live.replace('https://', '').replace('http://', '')}</span>
                                </div>
                            </div>
                            <button 
                                onClick={handleViewProject}
                                className="text-gray-400 hover:text-white transition-colors"
                                title="Open in new tab"
                            >
                                <ExternalLink size={16} />
                            </button>
                        </div>
                    </div>

                    {/* iframe */}
                    <iframe 
                        src={project.live} 
                        width="100%" 
                        height="400px" 
                        className="border-none rounded-b-2xl"
                        onLoad={handleIframeLoad}
                        title={`${project.name} Project Preview`}
                        style={{ overflow: 'hidden' }}
                        scrolling="no"
                    />
                    
                    {/* Hover Overlay */}
                    <div 
                        className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center cursor-pointer"
                        onClick={handleViewProject}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className={`flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white transform transition-all duration-300 ${
                            isHovered ? 'scale-110' : 'scale-100'
                        }`}>
                            <Globe size={20} />
                            <span className="font-medium">View Live Site</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Project Info */}
            <div className="text-center w-full space-y-3">
                <h2 className="text-white text-xl md:text-2xl font-bold uppercase">
                    {project.name}
                </h2>
                
                <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
                    {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-row gap-3 justify-center items-center pt-2">
                    {project.live && (
                        <button 
                            onClick={handleViewProject}
                            className="px-4 py-2 bg-gray-800/70 hover:bg-gray-700/70 text-white text-sm rounded-lg transition-colors border border-gray-700/50"
                        >
                            View Project
                        </button>
                    )}
                    
                    <button 
                        onClick={handleViewGithub}
                        className="px-4 py-2 bg-gray-800/70 hover:bg-gray-700/70 text-white text-sm rounded-lg transition-colors border border-gray-700/50"
                    >
                        View Code
                    </button>
                </div>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <div className="min-h-screen bg-black py-16 px-4">
            <div className=" mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 uppercase">
                    My Projects
                </h1>
                
                <div className="space-y-16">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;