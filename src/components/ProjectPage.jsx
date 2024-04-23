
import React from 'react';
import { useParams } from 'react-router-dom';
import { allProjects } from '../data'; // Import all projects data

const ProjectPage = () => {
  const { id } = useParams();
  const project = allProjects.find(project => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      {/* Additional images, links, hashtags, etc. */}
    </div>
  );
}

export default ProjectPage;
