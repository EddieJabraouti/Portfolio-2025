import React from 'react';

const ProjectCard = ({ title, imageUrl, descriptions, repoUrl }) => {
  return (
      <div className=" flex-row mt-10 rounded-lg border border-grey-800 bg-black text-white shadow-md hover:shadow-xl transition-shadow duration-300 p-6 max-w-md">
        {imageUrl && (
          <div className="project-image">
            <img
              className="w-full object-cover max-h-60"
              src={imageUrl}
              alt={`${title || 'Project'} cover`}
            />
          </div>
        )}

        {title && <h3 className="text-l text-bold mt-4 mb-3">{title}</h3>}

        <div className="project-description space-y-2 text-sm text-gray-300">
          {descriptions && descriptions.length > 0 ? (
            descriptions.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))
          ) : (
            <p className="text-gray-500">There is no description for this project...</p>
          )}
        </div>

        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5"
          >
            <button className="mb-auto px-4 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition-colors duration-200">
              View Repository
            </button>
          </a>
        )}
      </div>
  );
};

export default ProjectCard;
