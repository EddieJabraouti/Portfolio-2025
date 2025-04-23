import React from 'react';

const Home = () => {
  return (
    <div>
      <section>
        <br />
        <img src='' alt='Head Shot' />
        <h1>Hi, I'm Eddie Jabraouti</h1> 
        <small>Aspiring ML Engineer/Data Scientist | Student at the University of Guelph</small>
        <div>
          <button>Get In Touch</button>
          <button>View Projects</button>
        </div>
      </section>

      <br />
      
      <small>
        <img src='' alt='small sparkle' /> About me
      </small>

      <div> 
        <h1>Honours Computer Science Student</h1>
        <small>
          Specializing in Machine Learning and Data Science & creating purpose-driven Projects/AI Models
        </small>
      </div>

      <ul> 
        <li>
          <h3>
            <img src='' alt='grad hat' /> Background
          </h3>
          <p>
            I'm an Honours Computer Science student at the University of Guelph with a strong interest in Machine Learning and Data Science. 
            With several years of programming experience in Python, Java, C, and full-stack web development, I enjoy building solutions that 
            blend analytical thinking with real-world impact. I hope to specialize in the development of cutting-edge AI/ML solutions that serve value.
          </p>
        </li>
        <li> 
            <h3>Tech Stack</h3>
            <ul>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>C</li>
                <li>SQL</li>
                <li>Pandas & NumPy</li>
            </ul>
        </li>
      </ul>
    </div>
  );
};

export default Home;
