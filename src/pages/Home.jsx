import React, { useEffect, useState } from 'react';

const Home = () => {


  return (
    <div className="font-oswald bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <section className="py-10 px-6 bg-black text-white">
        <div className=" bg-cover bg-center h-screen border border-gray-800 p-10  max-w-8xl mx-auto"
        style={{backgroundImage: "url('/images/backgroundi.webp')"}}>
         <h2 className="text-2xl font-bold text-center mb-16"> <img  className="mx-auto" src='/images/sparkle.png' ></img>Background</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

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
            "React.js",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Node.js"
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
          {["Git", "GitHub"].map(tool => (
            <span key={tool} className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">{tool}</span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


      <section className="py-24 px-6 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-400 mb-12">
                Coming Soon...
            </p>

        </div>

      </section>

      <hr className="px-0.5 py-0.5 color-gray-800"></hr>
    </div>
  );
};

export default Home;
