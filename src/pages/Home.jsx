import React, { useEffect, useState } from 'react';
import ProjectCard from '../components /ProjectCards';

const Home = () => {
  return (
    <div className="font-oswald bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      
      <section className="py-6 px-6 bg-black text-white">
        <div
          className="bg-cover bg-center min-h-screen border border-gray-800 p-4 sm:p-10 max-w-8xl mx-auto overflow-hidden"
          style={{ backgroundImage: "url('/images/back3.jpg')" }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
            <img className="mx-auto" src="/images/sparkle.png" alt="sparkle" />
            Background
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">

            <div className="bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl sm:text-2xl">🎓</span>
                <h3 className="text-lg sm:text-xl font-semibold">Background</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                I'm an Honours Computer Science student at the University of Guelph with a passion for Machine Learning and Data Science.
                I enjoy creating meaningful AI models and real-world solutions through code and analytics.
              </p>
            </div>

            <div className="bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl sm:text-2xl">🧠</span>
                <h3 className="text-lg sm:text-xl font-semibold">AI & Machine Learning</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                {[
                  "Supervised Learning",
                  "Unsupervised Learning",
                  "Model Evaluation",
                  "Regression & Classification",
                  "Neural Networks"
                ].map(skill => (
                  <span key={skill} className="px-2 sm:px-3 py-1 border rounded-full border-white text-gray-300">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl sm:text-2xl">&lt;/&gt;</span>
                <h3 className="text-lg sm:text-xl font-semibold">Programming</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                {[
                  "Python",
                  "Java",
                  "C",
                  "JavaScript",
                  "React.js",
                  "SQL"
                ].map(lang => (
                  <span key={lang} className="px-2 sm:px-3 py-1 border rounded-full border-white text-gray-300">{lang}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl sm:text-2xl">📊</span>
                <h3 className="text-lg sm:text-xl font-semibold">Data Science</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                {[
                  "Pandas",
                  "NumPy",
                  "Data Cleaning",
                  "EDA",
                  "Scikit-Learn",
                  "Visualization"
                ].map(tool => (
                  <span key={tool} className="px-2 sm:px-3 py-1 border rounded-full border-white text-gray-300">{tool}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl sm:text-2xl">🌐</span>
                <h3 className="text-lg sm:text-xl font-semibold">Web Development</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
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
                  <span key={skill} className="px-2 sm:px-3 py-1 border rounded-full border-white text-gray-300">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl sm:text-2xl">🔧</span>
                <h3 className="text-lg sm:text-xl font-semibold">Version Control</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                {["Git", "GitHub", "GitLab"].map(tool => (
                  <span key={tool} className="px-2 sm:px-3 py-1 border rounded-full border-white text-gray-300">{tool}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 bg-black text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Featured Projects:</h2>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-x-10">
            <ProjectCard
              title="PrimePrep"
              imageUrl="../images/PrimePrep.png"
              descriptions={[
                "AI powered platform, where you can design and take part in personalized interviews that are meant simulate real world behavioural and technical questions. Built With Next.Js, React.Js, TypeScript, Tailwind CSS, Firestore, Google Gemeni, shadCn,"
              ]}
              repoUrl="https://github.com/EddieJabraouti/PrimePrep"
            />
            <ProjectCard 
              title="Student Information Management System" 
              imageUrl="../images/project1.jpg" 
              descriptions={["This C project was a terminal-based application designed to manage student information through a binary file system. The user interacted strictly via the command line interface. Upon execution, the program prompted the user with the option to create a new binary file that would store all student data."]} 
              repoUrl="https://github.com/EddieJabraouti/Student-Information-Management-System"
            />
            <ProjectCard 
              title="Terminal-Based Playlist Manager" 
              imageUrl="../images/project2.webp" 
              descriptions={["This C project was a terminal-based application that simulated a playlist management system, with a strong emphasis on linked list data structures. The program began by importing an initial playlist from a CSV file, where each song entry included a unique ID and associated notes."]} 
              repoUrl="https://github.com/EddieJabraouti/Terminal-Based-Playlist-Manager"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;