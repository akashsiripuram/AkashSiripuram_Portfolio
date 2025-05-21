import { GlowingEffect } from "../ui/glowing-effect";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Digital Guruji",
      title: "Full Stack Development Lead Intern",
      period: "January 2025 - February 2025",
      location: "Remote",
      description: [
        "Led full-stack projects, integrating frontend and backend technologies to build scalable web applications.",
        "Mentored three interns, fostering technical growth and collaboration."
      ],
      skills: ["React", "Node.js", "MongoDB", "Team Leadership"]
    },
    {
      id: 2,
      company: "Digital Guruji",
      title: "Frontend Developer Intern",
      period: "September 2024 - December 2024",
      location: "Remote",
      description: [
        "Developed AI-powered websites using HTML, CSS, JavaScript, and TailwindCSS.",
        "Collaborated on UI/UX design to enhance user engagement and performance."
      ],
      skills: ["HTML", "CSS", "JavaScript", "TailwindCSS", "UI/UX"]
    }
  ];

  return (
    <div className="w-full py-8 px-4 sm:px-6 lg:px-8">      
      <div className="flex flex-col items-center">
       
        {experiences.map((experience) => (
          <div 
            key={experience.id} 
            className="bg-gray-900 dark:bg-gray-950 border border-gray-800 rounded-lg p-6 mb-6 w-full max-w-3xl transform transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
          >
           
           
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  
              <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-500">{experience.title}</h3>
              <span className="px-3 py-1 mt-2 md:mt-0 text-xs font-medium bg-gray-800 dark:bg-gray-900 text-gray-300 rounded-full">
                {experience.period}
              </span>
            </div>
            
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{experience.company}</p>
            <p className="text-gray-600 dark:text-gray-400 ">{experience.location}</p>
            
            <ul className="space-y-2">
              {experience.description.map((desc, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 dark:text-blue-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">{desc}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium px-3 py-1 rounded-full border border-blue-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}