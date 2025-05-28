import React from 'react';

const ProjectCard = ({ title, imageUrl, descriptions, repoUrl }) => {
  return (
    <div className="project-card">
      {imageUrl && (
        <div className="project-image">
          <img src={imageUrl} alt={`${title || 'Project'} cover`} />
        </div>
      )}
      
      {title && <h3>{title}</h3>}

      <div className="project-description">
        {descriptions && descriptions.length > 0 ? (
          descriptions.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))
        ) : (
          <p>There is no description for this project...</p>
        )}
      </div>

      {repoUrl && (
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          <button>Repository</button>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
