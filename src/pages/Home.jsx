import React from 'react';

const Home = () => {
  return (
    <div className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="min-h-screen bg-black text-white px-6 flex flex-col justify-center items-center">
        <div className="max-w-4xl text-center">
            <img
            src="your-image.jpg"
            alt="Eddie Jabraouti"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full mx-auto mb-6 border-4 border-gray-800 shadow-lg object-cover"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Eddie Jabraouti</h1>
            <p className="text-lg text-gray-400 mb-6 max-w-xl mx-auto">
            Honours Computer Science student at the University of Guelph · Passionate about building ML-powered solutions and impactful data-driven tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
            <button className=" border-2 border-black rounded bg-white hover:bg-gray-400 text-black px-6 py-2 rounded-md text-lg transition">
                Get In Touch
            </button>
            <button className="bg-black-800 border border-white rounded hover:bg-gray-700 text-white px-6 py-2 rounded-md text-lg transition">
                View Projects
            </button>
            </div>
        </div>
    </section>

    <hr></hr>
      {/* About Section */}
      <section className="py-24 px-6 bg-black text-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16"> <img src=''></img>About Me</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Background */}
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

      {/* AI & Machine Learning */}
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

      {/* Programming */}
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

      {/* Data Science */}
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

      {/* Web Development */}
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

            <hr></hr>

      {/* Projects Section */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-400 mb-12">
                Coming Soon...
            </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-6 text-center text-sm text-lg dark:text-lg-400">
        <p>&copy; {new Date().getFullYear()} Eddie Jabraouti · All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
