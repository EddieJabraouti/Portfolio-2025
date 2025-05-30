import React from 'react';
import BottomNav from './BottonNav';
import ProjectCard from '../components /ProjectCards';

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <section className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-5xl font-bold mb-4">Projects</h1>
        <p className='text-gray-400 text-lg text-center'>A collection of my personal projects with the aim to demonstrate my work in Machine Learning, AI, Web Development, as well as open source contributions.</p>
        <div className="flex flex-row gap-x-10 ">
          <ProjectCard title="PrimePrep" imageUrl="../images/PrimePrep.png" 
          descriptions={["AI powered platform, where you can design and take part in personalized interviews that are meant simulate real world behavioural and technical questions. Built With Next.Js, React.Js, TypeScript, Tailwind CSS, Firestore, Google Gemeni, shadCn,"]} repoUrl="https://github.com/EddieJabraouti/PrimePrep">
          </ProjectCard>
          

        </div>
      </section>
       
      <BottomNav />
    </div>
  );
};

export default Projects;