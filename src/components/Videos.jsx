// src/VideoTextComponent.js
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  padding: 10px;
  background-color: whitesmoke;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const VideoElement = styled.video`
  width: 90%;
  height: 250px;
  max-height: 250px;
  border: 2px solid #ccc;
  border-radius: 10px;
  align-self: center;
`;

const TextContainer = styled.div`
  width: 100%;
  padding: 10px;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Heading = styled.h2`
  margin: 0;
  padding: 0 0 10px 0;
  font-size: 24px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const Videos = ({ src, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play();
    }
  };

  return (
    <Container>
      {!isFirstLoad && (
        <VideoContainer
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <VideoElement
            ref={videoRef}
            src={src}
            controls
            muted={isHovered}
            autoPlay={isHovered}
          ></VideoElement>
        </VideoContainer>
      )}
      <TextContainer>
        <Heading>{title}</Heading>
        <Paragraph>{description}</Paragraph>
      </TextContainer>
    </Container>
  );
};

export default Videos;
