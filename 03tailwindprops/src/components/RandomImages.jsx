import React, { useState, useEffect } from "react";

const RandomImage = () => {
  // Step 1: Create an array of image URLs
  const imageUrls = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/201/301",
    "https://picsum.photos/200/301",
    
  ];

  // Step 2: Create a function to randomly select an image
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  };

  // Step 3: Set a state to store the selected image
  const [randomImage, setRandomImage] = useState("");

  // Step 4: Use useEffect to select a random image on page load
  useEffect(() => {
    setRandomImage(getRandomImage());
  }, []); // Empty dependency array to ensure it runs only once on mount

  return (
    <div>
      {/* Step 5: Render the selected image */}
      {randomImage && (
        <img src={randomImage} alt="Random" style={{ height: "200px", width: "300px" }} />
      )}
    </div>
  );
};

export default RandomImage;
