import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <footer className="bg-raisinblack text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-amaranth">&copy; {new Date().getFullYear()} Abelardo Sobarzo</p>
        </div>
      </footer>
    </div>
  );
}

export default App;