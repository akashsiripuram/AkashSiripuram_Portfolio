import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './Components/ThemeContext';
import GlobalBackground from './Components/GlobalBackground';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

// Lazy load sections for optimized initial bundle loading
const About = lazy(() => import('./Components/About/AboutSection'));
const Experience = lazy(() => import('./Components/Experience/ExperienceSection'));
const Projects = lazy(() => import('./Components/Projects/ProjectsSection'));
const Skills = lazy(() => import('./Components/Skills/SkillsSection'));
const Achievements = lazy(() => import('./Components/Achievements/AchievementsSection'));
const ContactSection = lazy(() => import('./Components/Contact/ContactSection'));
const Footer = lazy(() => import('./Components/Footer'));

const LoadingFallback = () => (
  <div className="flex justify-center items-center h-48">
    <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <GlobalBackground>
        <div className="min-h-screen flex flex-col w-full selection:bg-emerald-500 selection:text-white">
          <Navbar />
          <main className="flex-1 w-full">
            <Home />
            <Suspense fallback={<LoadingFallback />}>
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Achievements />
              <ContactSection />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      </GlobalBackground>
    </ThemeProvider>
  );
}

export default React.memo(App);
