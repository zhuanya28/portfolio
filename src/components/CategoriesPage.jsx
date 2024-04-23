
import React from 'react';
import { useParams } from 'react-router-dom';
import { allProjects } from '../data'; // Import all projects data

const CategoriesPage = () => {
  const { category } = useParams();
  const filteredProjects = allProjects.filter(project => project.categories.includes(category));

  return (
    <div>
      <h2>Projects with #{category}</h2>
      {/* Display filtered projects */}
    </div>
  );
}

export default CategoriesPage;
