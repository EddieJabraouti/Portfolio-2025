import React from 'react';
import BottomNav from './BottonNav';

const Experiences = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      
      <section className="py-12 px-4 sm:px-6 bg-black text-white text-center">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            Experience
          </h2>

          <p className="text-gray-400 text-base md:text-lg text-center mb-10">
            Research-driven and technical experience gained through independent projects,
            academic work, and system-level experimentation.
          </p>

          <div className="grid gap-6 lg:grid-cols-3">

            {/* ===== Experience Card 1 ===== */}
            <div className="mt-10 rounded-lg border border-gray-800 bg-black text-white shadow-md hover:shadow-xl transition-shadow duration-300 p-6 max-w-md text-left">
              <h3 className="text-lg font-bold mb-2">
                Independent Machine Learning Research
              </h3>

              <p className="text-sm text-gray-400 mb-3">
                2023 — Present
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Biomedical ML", "Segmentation", "Representation Learning"].map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full border border-gray-600 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                Conducted independent research in biomedical machine learning,
                focusing on convolutional architectures such as U-Net and autoencoders.
                Emphasis on representation learning, loss design, and model evaluation
                for medical imaging tasks.
              </p>
            </div>

            {/* ===== Experience Card 2 ===== */}
            <div className="mt-10 rounded-lg border border-gray-800 bg-black text-white shadow-md hover:shadow-xl transition-shadow duration-300 p-6 max-w-md text-left">
              <h3 className="text-lg font-bold mb-2">
                Full-Stack & ML Systems Development
              </h3>

              <p className="text-sm text-gray-400 mb-3">
                2022 — Present
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["ML Systems", "Deployment", "Docker", "APIs"].map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full border border-gray-600 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                Designed and deployed full-stack machine learning applications,
                integrating trained models into production-like environments.
                Experience includes containerization with Docker, API-based inference,
                and frontend interfaces for model interaction.
              </p>
            </div>

            {/* ===== Experience Card 3 ===== */}
            <div className="mt-10 rounded-lg border border-gray-800 bg-black text-white shadow-md hover:shadow-xl transition-shadow duration-300 p-6 max-w-md text-left">
              <h3 className="text-lg font-bold mb-2">
                Agentic AI & LLM Systems
              </h3>

              <p className="text-sm text-gray-400 mb-3">
                2024 — Present
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Agentic AI", "LLMs", "Systems Design"].map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full border border-gray-600 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                Built modular agentic AI systems leveraging large language models
                and structured tool invocation. Focused on orchestration, reasoning
                pipelines, and scalable system design for developer-facing tools.
              </p>
            </div>

          </div>
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Experiences;
