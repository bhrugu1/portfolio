import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Analytics } from "@vercel/analytics/react"
import Header from './components/header';
import Home from './components/Home';
import About from './components/About'; 
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience'; 
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetails';
import ScrollToTop from './components/ScrollToTop'; // ✅ import

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ ensures route change scrolls to top */}
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Contact />
              </>
            } />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
