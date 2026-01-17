import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, Send } from 'lucide-react'
import { SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiNodedotjs } from 'react-icons/si'
import Navigation from '../components/Navigation'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const projects = [
    {
      title: "Algorithm Visualizer",
      tech: "React | Tailwind",
      description: "Interactive algorithm visualization tool with clean animations and real-time sorting demonstrations.",
      image: "/assets/src/resume-tracker.jpg"
    },
    {
      title: "E-commerce Platform",
      tech: "React | Node.js",
      description: "Full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.",
      image: "/assets/src/Screenshot 2025-10-06 144145.jpg"
    }
  ]

  return (
    <><div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto px-4 pb-16"
      >            <Navigation />

        {/* Hero Section */}
        <motion.div variants={itemVariants} className="mb-16 flex flex-col items-start pvb">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative inline-block mb-8 mt-4"
          >
            <img
              src="/assets/src/profileImg3.jpg"
              alt="Krishna Vaghela"
              className="w-32 h-32 rounded-full mx-auto hover:scale-105 transition-transform duration-300 object-cover border-4 border-gray-800" />

          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Hi, I'm Krishna — <span className="text-gray-400">A Full Stack web developer.</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            <p className="mb-4 leading-loose dark:text-white text-black">
              I build interactive web apps using{' '}
              <span className="inline-flex items-center gap-1 text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-lg mx-1 ">
                <SiReact className="w-4 h-4 text-[#61DAFB]" />
                <span className="font-medium">React</span>
              </span>
              ,{' '}
              <span className="inline-flex items-center gap-1 text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-lg mx-1">
                <SiJavascript className="w-4 h-4 text-[#F7DF1E]" />
                <span className="font-medium">JavaScript</span>
              </span>
              ,{' '}
              <span className="inline-flex items-center gap-1 text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-lg mx-1">
                <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />
                <span className="font-medium">Tailwind</span>
              </span>
              , and{' '}
              <span className="inline-flex items-center gap-1 text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-lg mx-1">
                <SiNodedotjs className="w-4 h-4 text-[#339933]" />
                <span className="font-medium">Node.js</span>
              </span>
              . With a focus on <strong>UI</strong> design. Enthusiastic about modern web technologies, driven by a keen eye for design.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex sm:flex-row gap-4 justify-center mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-[#171717] dark:border-input dark:hover:bg-input/50 px-6 py-2  transition-colors duration-200 "
            >
              <FileText className="w-4 h-4" />
              Resume / CV
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3   dark:text-black dark:bg-gray-100 rounded-lg transition-colors bg-black text-white"
            >
              <Send className="w-4 h-4" />
              Get in touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <div className="space-y-4 text-gray-900 leading-relaxed dark:text-gray-300">
            <p>
              Hello and welcome! I'm Krishna Vaghela, a passionate and dedicated Frontend Developer & Designer.
              With a keen eye for detail and a love for web development, I create innovative solutions that make a difference.
            </p>
            <p>
              Currently, I'm expanding my expertise by learning backend development and artificial intelligence.
              Explore my work and see how I can help bring your vision to life.
            </p>
          </div>

          <motion.div
            whileHover={{ x: 5 }}
            className="flex justify-end mt-6"
          >
            <Link to="/about" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <span className="mr-2">Read More</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor" />
              </svg>
            </Link>
          </motion.div>
        </motion.section>

        {/* Work Section */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Work</h2>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col md:flex-row bg-[var(--card)] rounded-2xl overflow-hidden border border-[var(--border)] hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{project.tech}</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-black  hover:bg-black/80  rounded-lg text-sm transition-colors text-white"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </motion.button>
                  </div>
                </div>

                <div className="flex-1 bg-black flex items-center justify-center p-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-48 object-contain rounded-lg" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ x: 5 }}
            className="flex justify-end mt-6"
          >
            <Link to="/projects" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <span className="mr-2">See More Projects</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor" />
              </svg>
            </Link>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>

          <div className="space-y-6">
            <h3 className="text-lg text-gray-300 leading-relaxed">
              A Snapshot of my creative<br />growth
            </h3>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="border-t border-gray-800 pt-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">GemBank</h4>
                  <span className="text-sm text-gray-400">Current / Part-Time</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Working on modern web applications with focus on user experience and performance optimization.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="border-t border-gray-800 pt-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Curio.AI</h4>
                  <span className="text-sm text-gray-400">2/07 To 2/10</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Developed AI-powered interfaces and contributed to machine learning integration projects.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

      </motion.div>
    </div></>
  )
}

export default Home