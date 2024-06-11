import React, { useState, useEffect } from 'react';
import '../App.css';
import video1 from '../Video1.mp4'; // Import the video file
import { MdPhoneIphone } from 'react-icons/md'; // Import the phone icon from react-icons/md

const sections = [
  {
    title: 'Our Services',
    content: 'We offer a variety of services to cater to your needs. Whether you\'re looking for professional advice, high-quality products, or exceptional customer service, we\'ve got you covered.',
    link: 'https://your-services-link.com'
  },
  {
    title: 'Our Products',
    content: 'Explore our wide range of products that are designed to meet the highest standards of quality and performance.',
    link: 'https://your-products-link.com'
  },
  {
    title: 'Testimonials',
    content: 'Hear what our satisfied customers have to say about their experience with our company.',
    link: 'https://your-testimonials-link.com'
  },
];

const Home = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const sectionInterval = setInterval(() => {
      setCurrentSectionIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 5000); // Change section every 5 seconds

    return () => {
      clearInterval(sectionInterval);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="overlay">
        <div className="welcome-message">
          <h1 style={{ fontSize: '200px' }}>Welcome to Serville</h1> {/* Increased font size */}
        </div>
        <div className="content-container">
          <div className="additional-content">
            <a href={sections[currentSectionIndex].link} target="_blank" rel="noopener noreferrer">
              <h2 style={{ fontSize: '36px', color: 'white' }}>{sections[currentSectionIndex].title}</h2> {/* Increased font size and white color */}
              <p style={{ fontSize: '24px', color: 'white' }}>{sections[currentSectionIndex].content}</p> {/* Increased font size and white color */}
            </a>
          </div>
         
         {/* Distributor Near You section */}
<div className="distributor-section" style={{ background: 'white', padding: '5px', display: 'flex', alignItems: 'center', borderRadius: '30px' }}>
  <p style={{ color: 'black', marginRight: '10px' }}>Distributor Near You</p>
  <MdPhoneIphone size={50} style={{ color: 'black' }} />
</div>

        </div>
      </div>
    </div>
  );
};

export default Home;
