import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import NewsletterPopup from './NewsletterPopup';

const StyledHomePage = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  position: relative;
  height: 100vh;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const VideoBackground = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  video { // Style the video tag inside this div
    object-fit: fill; 
    width: 100%;
    height: 100%;
  }
`;


const TapesText = styled.h1`
  position: absolute;
  font-family: 'BlackDahlia', sans-serif;
  z-index: 1;
  font-size: 200%; /* change as needed for mobile size */
  color: darkred;
  
  /* Media Query for medium devices */
  @media screen and (min-width: 768px) {
    font-size: 4em; /* increase font-size on tablet devices */
  }

  /* Media Query for large devices */
  @media screen and (min-width: 1024px) {
    font-size: 5em; /* increase font-size on desktop */
  }
`;

const SubText = styled.p`
  font-family: 'BlackDahlia', sans-serif;
  font-size: 1.25em;
  color: #888;
  cursor: pointer;
  top: 55%;
  z-index: 2;
  position: absolute;
`;

const HomePage = () => {
  const words = ['THE TAPES ARE COMING SOON', ''];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[currentWordIndex]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentWord(words[currentWordIndex]);
  }, [currentWordIndex]);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <StyledHomePage>
      <ReactPlayer
        url={process.env.PUBLIC_URL + '/website_vid.mp4'}
        playing={true}
        loop={true}
        muted={true}
        style={{
          objectFit: 'stretch'
        }}
        width="100%"
        height="100vh"
        wrapper={VideoBackground}
      />
      <TapesText>{currentWord}</TapesText>
      {/* <SubText onClick={handleClick}>
        Click here to subscribe to our newsletter
      </SubText> */}
      {showPopup && <NewsletterPopup onClose={handlePopupClose} />}
    </StyledHomePage>
  );
};

export default HomePage;
