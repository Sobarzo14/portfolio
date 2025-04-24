import React from 'react';
import { Mail, Coffee, MapPin, Camera, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Connect!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Whether you want to discuss a project or just chat about
              anything – I'd love to hear from you! I'm always open to meeting new
              people and exploring creative collaborations.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="text-amber-600 mr-4" size={24} />
                <span className="text-gray-600">abelardo.sobarzo.14@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Github className="text-amber-600 mr-4" size={24} />
                <a href='https://github.com/Sobarzo14'>
                  <span className="text-gray-600">Take a look at my GitHub!</span>
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="text-amber-600 mr-4" size={24} />
                <span className="text-gray-600">Pittsburgh, PA</span>
              </div>
            </div>
          </div>
          <form className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">What's your name?</label>
              <input
                type="text"
                id="name"
                placeholder="Jane Smith"
                className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Your email</label>
              <input
                type="email"
                id="email"
                placeholder="jane@example.com"
                className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Your message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your ideas..."
                className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;