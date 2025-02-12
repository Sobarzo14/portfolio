import React from 'react';
import { Menu, X, Camera, Coffee, Pen } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-platinum backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-amaranth">Abelardo</a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="flex items-center gap-2 text-amaranth">
              <Coffee size={18} />
              <span>Projects</span>
            </a>
            <a href="#blog" className="flex items-center gap-2 text-amaranth">
              <Pen size={18} />
              <span>Writing</span>
            </a>
            <a href="#photography" className="flex items-center gap-2 text-amaranth">
              <Camera size={18} />
              <span>Photos</span>
            </a>
            <a href="#contact" className="px-4 py-2 bg-amber-100 text-amaranth rounded-lg">
              Say Hello
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#projects" className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-amber-600">
                <Coffee size={18} />
                <span>Projects</span>
              </a>
              <a href="#blog" className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-amber-600">
                <Pen size={18} />
                <span>Writing</span>
              </a>
              <a href="#photography" className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-amber-600">
                <Camera size={18} />
                <span>Photos</span>
              </a>
              <a href="#contact" className="block px-3 py-2 text-amber-600 font-medium">
                Say Hello
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;