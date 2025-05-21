export function Projects() {
 const projects = [
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
    live: "https://bob-backend-nine.vercel.app",
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



  return (
    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden group"
          >
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            {/* Project Image */}
            {project.image && (
              <img
                src={`${project.image}`}
                alt={project.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}

            {/* Title & Duration */}
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
              {project.duration && (
                <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-0.5 text-sm font-medium text-blue-800 dark:text-blue-200">
                  {project.duration}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-gray-700 dark:text-gray-300">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="mt-auto pt-4 flex items-center gap-4 border-t border-gray-100 dark:border-gray-700">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577..."/>
                  </svg>
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  <span className="text-sm font-medium">Live Demo</span>
                </a>
              )}
              {project.contributors && project.contributors.length > 0 && (
                <div className="ml-auto flex items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">Contributors:</span>
                  <div className="flex -space-x-1">
                    {project.contributors.map((contributor, idx) => (
                      <span
                        key={idx}
                        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-xs font-medium text-gray-800 dark:text-gray-200"
                      >
                        {contributor[1].toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
