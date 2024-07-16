import React from 'react';
import styled from 'styled-components';

// Styled components for styling
const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: hsl(249, 72%, 14%);
  flex-direction: row-reverse;


  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Image = styled.img`
  max-width: 40%;
  height: auto;
  diplay:flex;


  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const Text = styled.div`
  width: 55%;
  padding: 0 20px;
  color: rgb(187, 182, 182);


  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color:rgb(246, 8, 210);
`;

const Description = styled.p`
  font-size: 1.02rem;
`;

const Section = ({ imageSrc, title, description }) => {
  return (
    <SectionContainer>
      <Image src={imageSrc} alt="Image" />
      <Text>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Text>
    </SectionContainer>
  );
};

export default Section;
