import React, { useEffect, useState } from 'react';
import ProjectCard from '../components /ProjectCards';

const Home = () => {
  return (
    <div className="font-oswald bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      
      <section className="py-6 px-6 bg-black text-white">
        <div
          className="bg-cover bg-center h-screen border border-gray-800 p-10 max-w-8xl mx-auto"
          style={{ backgroundImage: "url('/images/backgroundi.webp')" }}
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            <img className="mx-auto" src="/images/sparkle.png" alt="sparkle" />
            Background
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎓</span>
                <h3 className="text-xl font-semibold">Background</h3>
              </div>
              <p className="text-sm text-gray-300">
                I'm an Honours Computer Science student at the University of Guelph with a passion for Machine Learning and Data Science.
                I enjoy creating meaningful AI models and real-world solutions through code and analytics.
              </p>
            </div>

            {/* AI & Machine Learning Card */}
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
                  "Neural Networks"
                ].map(skill => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">&lt;/&gt;</span>
                <h3 className="text-xl font-semibold">Programming</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                {[
                  "Python",
                  "Java",
                  "C",
                  "JavaScript",
                  "React.js",
                  "SQL"
                ].map(lang => (
                  <span key={lang} className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">{lang}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📊</span>
                <h3 className="text-xl font-semibold">Data Science</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                {[
                  "Pandas",
                  "NumPy",
                  "Data Cleaning",
                  "EDA",
                  "Scikit-Learn",
                  "Visualization"
                ].map(tool => (
                  <span key={tool} className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">{tool}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🌐</span>
                <h3 className="text-xl font-semibold">Web Development</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React.js",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "Node.js",
                  "Next.js"
                ].map(skill => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🔧</span>
                <h3 className="text-xl font-semibold">Version Control</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                {["Git", "GitHub", "GitLab"].map(tool => (
                  <span key={tool} className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">{tool}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Featured Projects:</h2>
          <div className="flex flex-row gap-x-10 justify-center">
            <ProjectCard
              title="PrimePrep"
              imageUrl="../images/PrimePrep.png"
              descriptions={[
                "AI powered platform, where you can design and take part in personalized interviews that are meant simulate real world behavioural and technical questions. Built With Next.Js, React.Js, TypeScript, Tailwind CSS, Firestore, Google Gemeni, shadCn,"
              ]}
              repoUrl="https://github.com/EddieJabraouti/PrimePrep"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
