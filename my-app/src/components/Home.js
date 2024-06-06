import React from 'react';
import '../App.css';
import video1 from '../Video1.mp4'; // Import the video file

const Home = () => {
  return (
    <div className="home-container">
      <video autoPlay loop muted className="background-video">
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;
