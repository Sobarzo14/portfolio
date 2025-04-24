import React from 'react';
import { ArrowRight, Dumbbell, Heart, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-amber-600 mb-4">
            <Dumbbell size={24} />
            <span className="text-lg">Gym & </span>
            <Code size={24} />
            <span className="text-lg">code enthusiast</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hey there! I'm <span className="text-amber-600">Abelardo Sobarzo</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            I’m passionate about coding, hitting the gym, and dancing. Coding lets me build creative solutions and sharpen my problem-solving skills.
            The gym is where I push my limits physically, staying disciplined and focused. Dancing brings it all together — it's my way of expressing energy, rhythm, and joy in a way that feels completely free.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              See My Work
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="#blog"
              className="inline-flex items-center px-6 py-3 border-2 border-amber-200 text-amber-700 rounded-lg hover:border-amber-300 hover:bg-amber-50 transition-colors"
            >
              Read My Blog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;