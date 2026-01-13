import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'

const CV = () => {
  const handleDownload = () => {
    // Create a simple CV content
    const cvContent = `
KRISHNA VAGHELA
Frontend Developer & Designer

Contact Information:
Email: vghelakrishna523@gmail.com
LinkedIn: https://www.linkedin.com/in/krishna-vaghela-395072284
GitHub: https://github.com/vaghelakrishna

EXPERIENCE:
GemBank - Frontend Developer (Current / Part-Time)
• Working on modern web applications with focus on user experience
• Developing responsive interfaces using React and Tailwind CSS
• Performance optimization and code quality improvements

Curio.AI - Frontend Developer Intern (Feb 2024 - Oct 2024)
• Developed AI-powered interfaces and ML integration projects
• Collaborated with design team for intuitive user experiences
• Built responsive web applications using modern technologies

SKILLS:
Frontend: React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS
Design: UI/UX Design, Figma, Adobe Creative Suite, Responsive Design
Tools: Git, VS Code, Chrome DevTools
Learning: Backend Development, AI/ML, Node.js, Python

PROJECTS:
• Algorithm Visualizer - Interactive sorting algorithm visualization
• E-commerce Platform - Full-stack solution with modern UI
• Portfolio Website - Personal portfolio with animations
• Weather App - Real-time weather with API integration

EDUCATION:
Currently pursuing studies while expanding expertise in web development
    `
    
    const blob = new Blob([cvContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Krishna_Vaghela_CV.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Curriculum Vitae</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Download my resume or view it online
            </p>
          </div>

          <div className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)]">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Krishna Vaghela</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Frontend Developer & Designer</p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="mailto:vghelakrishna523@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  vghelakrishna523@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/krishna-vaghela-395072284" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  LinkedIn
                </a>
                <a href="https://github.com/vaghelakrishna" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  GitHub
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">Experience</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">GemBank</h4>
                        <p className="text-gray-600 dark:text-gray-400">Frontend Developer</p>
                      </div>
                      <span className="text-sm text-gray-500">Current / Part-Time</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Working on modern web applications with focus on user experience and performance optimization.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Curio.AI</h4>
                        <p className="text-gray-600 dark:text-gray-400">Frontend Developer Intern</p>
                      </div>
                      <span className="text-sm text-gray-500">Feb 2024 - Oct 2024</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Developed AI-powered interfaces and contributed to machine learning integration projects.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">Skills</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Frontend</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Design</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">UI/UX Design, Figma, Adobe Creative Suite</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Tools</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Git, VS Code, Chrome DevTools</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">Projects</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium">Algorithm Visualizer</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Interactive sorting algorithm visualization</p>
                  </div>
                  <div>
                    <h4 className="font-medium">E-commerce Platform</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Full-stack solution with modern UI</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Portfolio Website</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Personal portfolio with animations</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Weather App</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Real-time weather with API integration</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="text-center mt-8">
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 dark:bg-[#171717] hover:bg-blue-700 dark:hover:bg-[#171717]/80 text-white px-6 py-3 rounded-2xl font-semibold transition-colors"
              >
                Download CV
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CV