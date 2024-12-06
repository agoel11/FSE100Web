import React from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const images = [
    { src: "/image1.jpg", alt: "Game 1", link: "/game1" },
    { src: "/image2.jpg", alt: "Game 2", link: "/game2" },
    { src: "/image3.jpg", alt: "Game 3", link: "/game3" },
  ];

  const handleImageClick = (link) => {
    navigate(link); // Navigate to the corresponding game page
  };
  return (
    <div>
      <h1>FMS Game Hub</h1>
      <div className="carousel-container">
        <div className="carousel">
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-item"
              onClick={() => handleImageClick(image.link)}
            >
              <img src={image.src} alt={image.alt} className="carousel-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
