import { motion } from "framer-motion"
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiFigma,
  SiPostman,
  SiCss3,
} from "react-icons/si"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import { MdApi } from "react-icons/md"
import Navigation from "../components/Navigation"

const Experience = () => {
  const experiences = [
    {
      company: "Kattalyx Labs Ltd",
      position: "Full Stack Web Developer",
      period: "August 2025 – Present",
      location: "United States (Remote)",
      description: [
        "Architected and developed the complete frontend infrastructure for the platform.",
        "Led a large-scale codebase refactor improving maintainability and scalability.",
        "Integrated backend APIs with efficient data fetching and error handling.",
        "Improved UX through design consistency, accessibility, and performance tuning.",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Git",
        "Figma",
        "API Integration",
        "Postman",
      ],
      logo: "/assets/src/LOGO1.png",
      status: "Working",
    },
    {
      company: "Curio.AI",
      position: "Frontend Developer Intern",
      period: "June 2025 – July 2025",
      location: "Bangalore, India (On-site)",
      description: [
        "Built AI-powered interfaces for internal tools.",
        "Worked closely with designers to refine user flows.",
        "Developed responsive UI components.",
      ],
      technologies: ["React", "CSS3", "Tailwind CSS"],
      logo: "/assets/src/LOGO2.png",
    },
  ]

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Work Experience
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            My professional experience across different companies and roles.
          </p>
        </motion.div>

        {/* Count */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold">
            All Experiences{" "}
            <span className="text-gray-500 text-lg">
              ({experiences.length})
            </span>
          </h2>
        </div>

        {/* Experience List */}
        <div className="space-y-14">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="border-b border-[var(--border)] pb-14 last:border-none"
            >
              <div className="flex gap-6 items-start">
                {/* Logo */}
                <div className="w-12 h-12 rounded-lg border border-[var(--border)] bg-[var(--card)] flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between mb-4 gap-2">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="text-xl font-semibold">
                          {exp.position}
                        </h3>

                        {exp.status && (
                          <span className="inline-flex items-center gap-1 text-sm px-2 py-0.5 rounded-md bg-green-500/15 text-green-600 dark:text-green-400">
                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                            {exp.status}
                          </span>
                        )}
                      </div>

                      <p className="text-gray-600 dark:text-gray-400">
                        {exp.company}
                      </p>
                    </div>

                    <div className="text-sm text-gray-500 md:text-right">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-2 mb-6">
                    <SocialIcon icon={<FaTwitter />} />
                    <SocialIcon icon={<FaLinkedin />} />
                    <SocialIcon icon={<FaGithub />} />
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-3">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <TechBadge key={i} tech={tech} />
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience

/* ---------- HELPERS ---------- */

const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="w-8 h-8 flex items-center justify-center rounded-md
    border border-[var(--border)] bg-[var(--card)]
    hover:bg-gray-200 dark:hover:bg-[#222] transition"
  >
    {icon}
  </a>
)

const TechBadge = ({ tech }) => {
  const icons = {
    React: <SiReact className="text-[#61DAFB]" />,
    JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
    TypeScript: <SiTypescript className="text-[#3178C6]" />,
    "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
    CSS3: <SiCss3 className="text-[#1572B6]" />,
    Git: <SiGit className="text-[#F05032]" />,
    Figma: <SiFigma className="text-[#F24E1E]" />,
    Postman: <SiPostman className="text-[#FF6C37]" />,
    "API Integration": <MdApi className="text-green-500" />,
  }

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-md
      border border-[var(--border)]
      bg-[var(--card)] text-gray-700 dark:text-gray-300">
      {icons[tech]}
      {tech}
    </span>
  )
}
