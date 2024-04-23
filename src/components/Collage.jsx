import React from 'react';

const Collage = () => {
  return (
    <div className="collage">
      <h2>My Collage</h2>
      <div className="collage-images">
        {/* Add your images here */}
        <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Collage;
