import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Get to know more about my journey and passion
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <img
                src="/assets/src/profileImg3.jpg"
                alt="Krishna Vaghela"
                className="w-full max-w-md mx-auto rounded-3xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Hello, I'm Krishna</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Frontend Developer and Designer with a keen eye for detail and a love for creating 
                innovative web solutions. My journey in web development started with curiosity and has evolved into 
                a deep passion for crafting user experiences that make a difference.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently pursuing my studies while actively expanding my expertise in backend development and 
                artificial intelligence. I believe in continuous learning and staying updated with the latest 
                technologies and design trends.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-[var(--secondary)] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="flex items-center gap-1 text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded">
                  <svg className="w-3 h-3" viewBox="0 0 128 128">
                    <g fill="#61DAFB">
                      <circle cx="64" cy="64" r="11.4"></circle>
                      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8z"></path>
                    </g>
                  </svg>
                  React
                </div>
                <div className="flex items-center gap-1 text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded">
                  <svg className="w-3 h-3" viewBox="0 0 128 128">
                    <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
                    <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581z"/>
                  </svg>
                  JS
                </div>
                <div className="flex items-center gap-1 text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded">
                  <svg className="w-3 h-3" viewBox="0 0 128 128">
                    <path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738z"/>
                  </svg>
                  Tailwind
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                TypeScript, HTML5, CSS3
              </p>
            </div>
            <div className="bg-[var(--secondary)] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                UI/UX Design, Figma, Adobe Creative Suite, Responsive Design
              </p>
            </div>
            <div className="bg-[var(--secondary)] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Learning</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="flex items-center gap-1 text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded">
                  <svg className="w-3 h-3" viewBox="0 0 128 128">
                    <path fill="#3776ab" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.638c0-7.652-6.47-13.401-14.732-14.238C72.979 4.289 67.734 4 63.5 4c-4.234 0-9.479.289-14.768 1.4C40.47 6.237 34 11.986 34 19.638v10.946h29v4H34.331C25.776 34.584 20.705 40.154 19.079 49.5c-1.805 10.342-1.883 16.802 0 27.5C20.705 87.842 25.776 93.416 34.331 94h18.669V82.959C53 73.943 61.612 62.001 49.33 62.001z"/>
                    <path fill="#ffd43b" d="M122.281 48.811c-1.701-10.337-4.957-15.681-13.5-16.811h-17.969v12.969c0 9.718-8.212 17.031-17.969 17.031H43.682c-8.551 0-14.719 7.688-14.719 16.25v27.188c0 7.666 6.677 12.191 14.719 14.188 9.6 2.375 18.8 2.807 29.159 0 6.865-1.866 14.719-5.627 14.719-14.188V94.469H58.421v-4h43.938C110.982 90.469 116.07 85.719 118.281 76.469c2.28-9.718 2.179-19.062 0-27.658z"/>
                  </svg>
                  Python
                </div>
                <div className="flex items-center gap-1 text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded">
                  <svg className="w-3 h-3" viewBox="0 0 128 128">
                    <path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 40 41 41.402 41 42.176v50.49c0 4.624-1.781 9.194-8.941 9.194-3.416 0-5.418 0-8.749-1.331l-11.775-6.688c-1.649-1.017-2.748-2.904-2.748-5.041V38.407c0-2.109 1.05-4.017 2.748-5.041L55.758 7.757c1.785-1.017 4.96-1.017 6.667 0L106.67 33.366c1.698 1.024 2.748 2.932 2.748 5.041v51.142c0 2.137-1.05 4.024-2.748 5.041L62.425 120.199c-1.707 1.017-4.882 1.017-6.667 0L44.981 113.676c-.64-.749-1.28-.476-1.28.237 0 .476.213 1.017.64 1.331l11.775 6.688c1.390.640 2.781.959 4.172.959 1.390 0 2.781-.319 4.172-.959l44.097-25.605c2.87-1.66 4.955-4.764 4.955-8.083V38.407c0-3.319-2.031-6.423-4.901-8.073z"/>
                  </svg>
                  Node.js
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Backend Development, AI/ML
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About