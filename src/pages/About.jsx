import React from 'react';
import BottomNav from './BottonNav';

const About = () => {
  return (
    <div className="font-oswald bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <section className="py-10 px-6 bg-black text-white">
        <div
          className="bg-cover bg-center min-h-screen border border-gray-800 p-10 max-w-8xl mx-auto"
          style={{ backgroundImage: "url('/images/backgroundi.webp')" }}
        >
          {/* Heading with Sparkle */}
          <div className="text-center mb-8">
            <img className="mx-auto mb-2" src="/images/sparkle.png" alt="Sparkle" />
            <h2 className="text-2xl font-bold">About Me</h2>
          </div>

          {/* Name + Summary */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Eddie Jabraouti</h1>

            <div className="max-w-3xl mx-auto text-gray-300 text-md leading-relaxed space-y-5 bg-[#111] p-6 rounded-xl border border-gray-800 text-left">
              <p>
              <span className="text-2xl">👋 </span>
                Hello! I'm Eddie Jabraouti, a Computer Science student at the University of Guelph with a passion for utilizing AI and Machine Learning models to create beneficial, purpose-driven solutions and tools. 
                I have built and am continuously developing my foundation in Mathematics, Statistics, and Computer Science.
              </p>

              <p>
                Beyond academics, I am a fully certified food handler. I enjoy cooking and have served as a leader in high-intensity kitchens, with expertise in menu development and mass staff training.
              </p>

              <p>
                <strong>Hobbies:</strong> Cooking, Working out, Exploring, Research, Soccer, Video Games.
              </p>

              <p>
                <strong>I Love To Chat About:</strong> Machine Learning, AI solutions, Purpose-driven research.
              </p>
            </div>

            <div className="flex justify-center flex-wrap gap-2 text-sm mt-6">
              {["AI/ML", "Data Science", "Full Stack"].map(skill => (
                <span
                  key={skill}
                  className="bg-gray-800 px-3 py-1 rounded-full text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI & ML */}
            <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🧠</span>
                <h3 className="text-xl font-semibold">AI & Machine Learning</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                {[
                  "Supervised Learning",
                  "Unsupervised Learning",
                  "Model Evaluation",
                  "Regression & Classification",
                  "Neural Networks",
                ].map(skill => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">{skill}</span>
                ))}
              </div>
            </div>

            {/* Programming */}
            <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">&lt;/&gt;</span>
                <h3 className="text-xl font-semibold">Programming</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                {["Python", "Java", "C", "JavaScript", "React.js", "SQL"].map(lang => (
                  <span key={lang} className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">{lang}</span>
                ))}
              </div>
            </div>

            {/* Data Science */}
            <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📊</span>
                <h3 className="text-xl font-semibold">Data Science</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                {["Pandas", "NumPy", "Data Cleaning", "EDA", "Scikit-Learn", "Visualization"].map(tool => (
                  <span key={tool} className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">{tool}</span>
                ))}
              </div>
            </div>

            {/* Web Dev */}
            <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🌐</span>
                <h3 className="text-xl font-semibold">Web Development</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                {["React.js", "HTML", "CSS", "Tailwind CSS", "Node.js"].map(skill => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">{skill}</span>
                ))}
              </div>
            </div>

            {/* Version Control */}
            <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🔧</span>
                <h3 className="text-xl font-semibold">Version Control</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                {["Git", "GitHub"].map(tool => (
                  <span key={tool} className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default About;
