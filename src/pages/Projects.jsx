import { motion } from "framer-motion"
import { useState } from "react"
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiSocketdotio,
  SiCss3,
  SiOpenai,
  SiAppwrite,
} from "react-icons/si"
import Navigation from "../components/Navigation"
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom"
const Projects = () => {
  const [filter, setFilter] = useState("All")


  const projects = [
    {
      title: "Trilok eCommerce Website",
      description:
        "Production-grade full-stack eCommerce platform with product browsing, cart, checkout flow, and scalable architecture.",
      image: "/assets/src/trilok-ecomm.jpg",
      tech: ["React", "Tailwind CSS", "JavaScript", "Node.js", "MongoDB"],
      github: "#",
      live: "#",
      status: "Working",
      category: "Working",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      title: "Code Viewer / Playground",
      description:
        "Interactive code viewer that renders and previews HTML, CSS, and JavaScript in real time.",
      image: "/assets/src/code-viewer.jpg",
      tech: ["HTML", "CSS3", "JavaScript"],
      github: "#",
      live: "#",
      status: "Working",
      category: "Working",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      title: "Algorithm Visualizer",
      description:
        "Step-by-step animated algorithm visualizations to understand logic and performance.",
      image: "/assets/src/algorithm-visualizer.jpg",
      tech: ["React", "JavaScript"],
      github: "#",
      live: "#",
      status: "Building",
      category: "Building",
      gradient: "from-gray-600 to-gray-800",
    },
  ]

  const filteredProjects =
    filter === "All" ? projects : projects.filter(p => p.category === filter)

  const workingCount = projects.filter(p => p.category === "Working").length
  const buildingCount = projects.filter(p => p.category === "Building").length

  const techIcons = {
    React: <SiReact className="text-[#61DAFB]" />,
    JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
    TypeScript: <SiTypescript className="text-[#3178C6]" />,
    "Node.js": <SiNodedotjs className="text-[#339933]" />,
    MongoDB: <SiMongodb className="text-[#47A248]" />,
    "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
    "Next.js": <SiNextdotjs />,
    "Socket.io": <SiSocketdotio />,
    CSS3: <SiCss3 className="text-[#1572B6]" />,
    OpenAI: <SiOpenai />,
    Appwrite: <SiAppwrite className="text-[#FD366E]" />,
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-14">
            <h1 className="text-5xl font-bold mb-3">Projects</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              A collection of real-world projects and experiments.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-10">
            <div className="flex gap-3">
              {["Working", "Building"].map(type => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-3 py-1 rounded text-sm border transition
                    ${filter === type
                      ? "bg-[var(--card)] border-[var(--border)]"
                      : "text-gray-500 hover:bg-[var(--card)] border-transparent"
                    }`}
                >
                  {type} ({type === "Working" ? workingCount : buildingCount})
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-gray-400 dark:hover:border-gray-600 transition"
              >
                {/* Image */}
                <div className="relative h-56">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 flex items-center justify-center rounded-md
                          bg-gray-100 dark:bg-[#1a1a1a]
                          border border-[var(--border)]"
                        title={tech}
                      >
                        {techIcons[tech]}
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 rounded-full
                      bg-green-100 text-green-700
                      dark:bg-green-900 dark:text-green-300">
                      {project.status}
                    </span>

                    <Link to={`/projects/${project.slug}`}
                      className="text-gray-400 text-sm hover:underline flex items-center gap-1"
                    >
                      View Details
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </Link>

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
