import React from 'react';
import ProjectCard from '../components /ProjectCards';

const Home = () => {
  return (
    <div className="font-oswald bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      
      {/* ================= Background Section ================= */}
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

            {/* Background */}
            <div className="bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl sm:text-2xl">🎓</span>
                <h3 className="text-lg sm:text-xl font-semibold">Background</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Honours Computer Science & Math student at the University of Guelph with a focus on AI/ML research and its applications in biomedical imaging, agentic systems, and software infrastructure.
              </p>
            </div>

            {/* AI & ML (Primary) */}
            <div className="bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800 lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl sm:text-2xl">🧠</span>
                <h3 className="text-lg sm:text-xl font-semibold">AI & Machine Learning</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-4 leading-relaxed">
                Research-driven focus on representation learning, biomedical ML, and agentic systems.
              </p>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                {[
                  "Physics Informed NN's",
                  "Reinforcement Learning",
                  "Probabilistic Diffusion & Denoising",
                  "Biomedical Segmentation & Classification",
                  "Large Language Models",
                ].map(skill => (
                  <span
                    key={skill}
                    className="px-2 sm:px-3 py-1 border rounded-full border-white text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl sm:text-2xl">&lt;/&gt;</span>
                <h3 className="text-lg sm:text-xl font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                {["Python", "Java", "C", "R/R Studio", "SQL", "JavaScript", "TypeScript"].map(lang => (
                  <span key={lang} className="px-2 sm:px-3 py-1 border rounded-full border-white text-gray-300">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Science */}
            <div className="bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl sm:text-2xl">📊</span>
                <h3 className="text-lg sm:text-xl font-semibold">Data Science</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                {["Pandas", "NumPy", "EDA", "Scikit-Learn", "Visualization"].map(tool => (
                  <span key={tool} className="px-2 sm:px-3 py-1 border rounded-full border-white text-gray-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Full Stack */}
            <div className="bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl sm:text-2xl">🌐</span>
                <h3 className="text-lg sm:text-xl font-semibold">Full Stack</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-4 leading-relaxed">
                Used to deploy, visualize, and operationalize machine learning systems.
              </p>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                {["React", "Next.js", "FastAPI", "Flask", "Docker"].map(skill => (
                  <span key={skill} className="px-2 sm:px-3 py-1 border rounded-full border-white text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Version Control */}
            <div className="bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl sm:text-2xl">🔧</span>
                <h3 className="text-lg sm:text-xl font-semibold">Version Control</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                {["Git", "GitHub", "GitLab"].map(tool => (
                  <span key={tool} className="px-2 sm:px-3 py-1 border rounded-full border-white text-gray-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= Currently Exploring ================= */}
      <section className="py-8 px-6 bg-black text-white text-center">
        <p className="text-sm sm:text-base text-gray-300">
          <span className="font-semibold text-white">Currently exploring:</span>{" "}
          diffusion models for denoising and representation learning in biomedical imaging.
        </p>
      </section>

      {/* ================= Featured Projects ================= */}
      <section className="py-12 px-4 sm:px-6 bg-black text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Featured Projects
          </h2>

          <div className="grid gap-6 lg:grid-cols-3">

            <ProjectCard
              title="Clarity"
              imageUrl="../images/doc.webp"
              tags={["Biomedical", "Deep Learning", "Classification"]}
              descriptions={[
                "Research prototype for pneumonia detection using medical imaging. Built with a customized ResNet-18 (~90% validation accuracy), containerized with Docker, deployed on RunPod serverless, and paired with a React + Tailwind frontend."
              ]}
              repoUrl="https://github.com/EddieJabraouti/Pneumonia-Classifier"
            />

            <ProjectCard
              title="U-Net Heart Segmentation"
              imageUrl="../images/heartsegmentation.png"
              tags={["Biomedical", "Segmentation", "Representation Learning"]}
              descriptions={[
                "Implemented a U-Net architecture for cardiac structure segmentation, focusing on encoder–decoder design, skip connections, and loss functions for class imbalance in medical imaging."
              ]}
              repoUrl="https://github.com/EddieJabraouti/U-Net-heart-segmentation"
            />

            <ProjectCard
              title="Dev-Tools AI Agent"
              imageUrl="../images/agent.webp"
              tags={["Agentic AI", "LLMs", "Systems"]}
              descriptions={[
                "Modular agentic AI system for developer workflows, emphasizing tool abstraction, structured reasoning, and orchestration of LLM-driven actions."
              ]}
              repoUrl="https://github.com/EddieJabraouti/Dev-Tools-AI-Agent"
            />

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
