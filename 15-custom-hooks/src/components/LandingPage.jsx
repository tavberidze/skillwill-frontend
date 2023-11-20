import React from 'react';
import '../styles/LandingPage.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>A brand and product designer working with clients globally</h1>
      <div className="image-container">
        <img src={require('../assets/img01.webp')} alt="alt text" />
        <img src={require('../assets/img02.webp')} alt="alt text" />
        <img src={require('../assets/img03.webp')} alt="alt text" />
        <img src={require('../assets/img04.webp')} alt="alt text" />
      </div>
    </div>
  );
};

export default LandingPage;