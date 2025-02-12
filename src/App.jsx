import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Content from './components/Content';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Content />
        <Blog />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-amber-400 mb-2">Let's create something amazing together</p>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} John Doe. Fueled by coffee and curiosity.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;