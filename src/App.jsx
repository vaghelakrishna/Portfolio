import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Chat from './pages/Chat'
import About from './pages/About'
import Experience from './pages/Experience'
import CV from './pages/CV'
import CustomCursor from './components/CustomCursor'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
          <CustomCursor />


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </motion.div>
      <Footer/>
        </div>
      </Router>
      
    </ThemeProvider>
  )
}

export default App