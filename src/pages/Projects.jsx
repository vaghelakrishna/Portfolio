import { motion } from 'framer-motion'
import { useState } from 'react'
import { SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiNodedotjs, SiNextdotjs, SiMongodb, SiSocketdotio, SiCss3, SiOpenai, SiAppwrite } from 'react-icons/si'
import Navigation from '../components/Navigation'

const Projects = () => {
  const [filter, setFilter] = useState('All')
  
  const projects = [
    {
      title: "Trilok eCommerce Website",
      description:
        "Production-grade full-stack eCommerce platform with product browsing, cart, checkout flow, and scalable architecture.",
      image: "/assets/src/trilok-ecomm.jpg",
      tech: ["React", "Tailwind CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
      github: "#",
      live: "#",
      status: "Working",
      category: "Working",
      gradient: "from-gray-800 to-gray-900"
    },
    {
      title: "Code Viewer / Code Playground",
      description:
        "Interactive code viewer that renders and previews HTML, CSS, and JavaScript in real time with a clean developer-focused UI.",
      image: "/assets/src/code-viewer.jpg",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
      status: "Working",
      category: "Working",
      gradient: "from-gray-800 to-gray-900"
    },
    {
      title: "Real-Time Algorithm Visualizer",
      description:
        "Animated visualization of algorithms with step-by-step execution to understand logic, flow, and performance.",
      image: "/assets/src/algorithm-visualizer.jpg",
      tech: ["JavaScript", "React", "CSS Animations"],
      github: "#",
      live: "#",
      status: "Building",
      category: "Building",
      gradient: "from-gray-800 to-gray-900"
    },
    {
      title: "Digital Canvas / UI Builder",
      description:
        "Browser-based design canvas to draw, resize, layer elements, and create interactive visual layouts.",
      image: "/assets/src/digital-canvas.jpg",
      tech: ["JavaScript", "HTML5 Canvas", "CSS"],
      github: "#",
      live: "#",
      status: "Building",
      category: "Building",
      gradient: "from-gray-700 to-gray-800"
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter)
  const workingCount = projects.filter(p => p.category === 'Working').length
  const buildingCount = projects.filter(p => p.category === 'Building').length

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
            <h1 className="text-5xl font-bold mb-4">Projects</h1>
            <p className="text-gray-400 text-lg">
              My projects and work across different technologies and domains.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-medium">Filter by Status</span>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setFilter('Working')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  filter === 'Working' ? 'bg-gray-700 dark:bg-[#171717] text-white border border-1 border-gray-600' : 'bg-gray-800 dark:bg-[#171717]/50 text-gray-400 hover:bg-gray-700 dark:hover:bg-[#171717] border border-1 border-gray-600'
                }`}
              >
                Working ({workingCount})
              </button>
              <button
                onClick={() => setFilter('Building')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  filter === 'Building' ? 'bg-gray-700 dark:bg-[#171717] text-white border border-1 border-gray-600' : 'bg-gray-800 dark:bg-[#171717]/50 text-gray-400 hover:bg-gray-700 dark:hover:bg-[#171717] border border-1 border-gray-600'
                }`}
              >
                Building ({buildingCount})
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">All Projects <span className="text-gray-500 text-lg">({filteredProjects.length} projects)</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[var(--card)] rounded-2xl overflow-hidden border border-[var(--border)] hover:border-gray-700 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover relative z-10 mix-blend-overlay"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-2 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm">
                      {project.status === 'Working' ? '🟢 All Systems Operational' : '🔨 Building in progress'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex gap-2">
                      <a href={project.github} className="w-8 h-8 bg-gray-800 dark:bg-[#171717] rounded flex items-center justify-center hover:bg-gray-700 dark:hover:bg-[#171717]/80 transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a href={project.live} className="w-8 h-8 bg-gray-800 dark:bg-[#171717] rounded flex items-center justify-center hover:bg-gray-700 dark:hover:bg-[#171717]/80 transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15,3 21,3 21,9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => {
                        const getIcon = (techName) => {
                          const icons = {
                            'React': <SiReact className="w-3 h-3 text-[#61DAFB]" />,
                            'JavaScript': <SiJavascript className="w-3 h-3 text-[#F7DF1E]" />,
                            'TypeScript': <SiTypescript className="w-3 h-3 text-[#3178C6]" />,
                            'Node.js': <SiNodedotjs className="w-3 h-3 text-[#339933]" />,
                            'MongoDB': <SiMongodb className="w-3 h-3 text-[#47A248]" />,
                            'Tailwind': <SiTailwindcss className="w-3 h-3 text-[#06B6D4]" />,
                            'Next.js': <SiNextdotjs className="w-3 h-3 text-[#000000]" />,
                            'Socket.io': <SiSocketdotio className="w-3 h-3 text-[#010101]" />,
                            'CSS3': <SiCss3 className="w-3 h-3 text-[#1572B6]" />,
                            'OpenAI': <SiOpenai className="w-3 h-3 text-[#412991]" />,
                            'MCP': <span className="w-2 h-2 bg-blue-400 rounded-full"></span>,
                            'Appwrite': <SiAppwrite className="w-3 h-3 text-[#FD366E]" />
                          }
                          return icons[techName] || <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        }
                        
                        return (
                          <div
                            key={techIndex}
                            className="inline-flex items-center justify-center w-8 h-8 bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 rounded-md"
                            title={tech}
                          >
                            {getIcon(tech)}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-green-900 text-green-300 text-xs rounded-full">
                      {project.status === 'Working' ? '🟢 All Systems Operational' : '🔨 Building in progress'}
                    </span>
                    <button className="text-gray-400 text-sm hover:underline flex items-center gap-1">
                      View Details
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </button>
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

export default Projects