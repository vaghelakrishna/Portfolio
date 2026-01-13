import { motion } from 'framer-motion'
import { SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiNodedotjs, SiGit, SiFigma, SiPostman, SiCss3 } from 'react-icons/si'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdApi } from 'react-icons/md'
import Navigation from '../components/Navigation'

const Experience = () => {
  const experiences = [
    {
      company: "Kattalyx labs ltd",
      position: "Full stack web Developer",
      period: "August 2025 - Present",
      location: "United States (Remote)",
      description: [
        "Architected and developed the complete frontend infrastructure for the platform, a comprehensive solution for creating and managing promotional campaigns.",
        "Led a comprehensive codebase refactoring initiative that improved maintainability, scalability, and development velocity across the entire platform.",
        "Integrated and optimized backend API connections, implementing efficient data fetching strategies and error handling mechanisms.",
        "Enhanced user experience and interface design through implementation of consistent design systems, accessibility standards, and performance optimizations."
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript", "Git", "Figma", "AWS"],
      logo: "/assets/src/LOGO1.png",
      status: "Working"
    },
    {
      company: "Curio.AI",
      position: "Frontend Developer Intern",
      period: "June 2025 - July 2025",
      location: "Bangalore, India (On-Site)",
      description: [
        "Developed AI-powered interfaces and contributed to machine learning integration projects.",
        "Collaborated with the design team to create intuitive user experiences.",
        "Built responsive web applications using modern technologies."
      ],
      technologies: ["React", "CSS3" , "tailwindCSS"],
      logo: "/assets/src/LOGO2.png",
      status: null
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-left mb-16">
            <h1 className="text-5xl font-bold mb-4">Work Experience</h1>
            <p className="text-gray-400 text-lg">
              My work experiences across different companies and roles.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">All Experiences <span className="text-gray-500 text-lg">({experiences.length} experiences)</span></h2>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="border-b border-gray-800 pb-12 last:border-b-0"
              >
                <div className="flex items-start gap-6">
                  {/* Company Logo */}
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img 
                      src={exp.logo} 
                      alt={exp.company}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="text-xl font-semibold">{exp.position}</h3>
                          <div className="flex items-center gap-2">
                            <a href="#" className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600">
                              <FaTwitter className="w-3 h-3" />
                            </a>
                            <a href="#" className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600">
                              <FaLinkedin className="w-3 h-3" />
                            </a>
                            <a href="#" className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600">
                              <FaGithub className="w-3 h-3" />
                            </a>
                          </div>
                          {exp.status && (
                            <span className="flex items-center gap-1 text-green-400 text-sm">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              {exp.status}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm text-gray-400">
                        <div>{exp.period}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-medium mb-3">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => {
                          const getIcon = (techName) => {
                            const icons = {
                              'React': <SiReact className="w-3 h-3 text-[#61DAFB]" />,
                              'JavaScript': <SiJavascript className="w-3 h-3 text-[#F7DF1E]" />,
                              'TypeScript': <SiTypescript className="w-3 h-3 text-[#3178C6]" />,
                              'Tailwind CSS': <SiTailwindcss className="w-3 h-3 text-[#06B6D4]" />,
                              'CSS3': <SiCss3 className="w-3 h-3 text-[#1572B6]" />,
                              'Git': <SiGit className="w-3 h-3 text-[#F05032]" />,
                              'Figma': <SiFigma className="w-3 h-3 text-[#F24E1E]" />,
                              // 'AWS': <SiAmazonaws className="w-3 h-3 text-[#FF9900]" />,
                              'Postman': <SiPostman className="w-3 h-3 text-[#FF6C37]" />,
                              'Bun': <span className="w-3 h-3 bg-[#FBF0DF] rounded-full"></span>,
                              'API Integration': <MdApi className="w-3 h-3 text-green-400" />
                            }
                            return icons[techName] || <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                          }
                          
                          return (
                            <span
                              key={techIndex}
                              className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-md border border-gray-700"
                            >
                              {getIcon(tech)}
                              {tech}
                            </span>
                          )
                        })}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3">
                      {exp.description.map((desc, descIndex) => (
                        <p key={descIndex} className="text-gray-300 leading-relaxed">
                          • {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience