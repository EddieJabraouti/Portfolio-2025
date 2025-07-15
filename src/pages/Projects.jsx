import React from 'react';
import BottomNav from './BottonNav';
import ProjectCard from '../components /ProjectCards';

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <section className="py-12 px-4 sm:px-6 bg-black text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Projects</h2>
          <p className="text-gray-400 text-base md:text-lg text-center mb-8">
            A collection of my personal projects with the aim to demonstrate my work in Machine Learning, AI, Web Development, as well as open source contributions.
          </p>
          
          <div className="grid gap-6 lg:grid-cols-3">
          <ProjectCard
              title="Generative Pre-Trained Transformer(GPT)"
              imageUrl="../images/transformer.png"
              descriptions={["A minature generative pre-trained transformer using the revolutional concepts of self attention explained in the paper Attention is all you need"]}
              repoUrl="https://github.com/EddieJabraouti/Transformer"
            />
          <ProjectCard 
            title="PrimePrep" 
            imageUrl="../images/PrimePrep.png"
            descriptions={["AI powered platform, where you can design and take part in personalized interviews that are meant to simulate real world behavioural and technical questions. Built with Next.js, React.js, TypeScript, Tailwind CSS, Firestore, Google Gemini, shadcn/ui"]} 
            repoUrl="https://github.com/EddieJabraouti/PrimePrep"
          />

          <ProjectCard
            title="Solubility Prediction using Molecular Descriptors"
            imageUrl="../images/lr.jpg"
            descriptions={[" Linear Regression and Random Forest models were trained on molecular descriptor data to predict aqueous solubility (logS). Features included MolLogP, MolWt, NumRotatableBonds, and AromaticProportion. The goal was to estimate solubility based on molecular structure."]}
            repoUrl="https://github.com/EddieJabraouti/Linear-Regression-Comparison-with-Random-Forest"
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
      
      <BottomNav />
    </div>
  );
};

export default Projects;