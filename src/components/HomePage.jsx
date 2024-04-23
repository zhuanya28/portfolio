import React from 'react';
import Collage from './Collage';
import { allProjects } from '../data'; 

const HomePage = () => {

  const getRandomProjects = () => {
    const numProjectsToShow = Math.min(9, allProjects.length); 
    const randomProjects = allProjects.sort(() => 0.5 - Math.random()).slice(0, numProjectsToShow);
    return randomProjects;
  };

  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <Collage projects={getRandomProjects()} />
    </div>
  );
}

export default HomePage;
