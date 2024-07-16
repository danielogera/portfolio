import React from 'react';
import Card from '../components/Card';

export default function Certificates() {
  return <div style={{
  textAlign:'center',
  padding:20
  }}>
    <div
  style={{ display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 20
  }}>
  <Card
  title={'Advanced Graphic Design'}
  content={'Graphics with canva cert'}
  image={'./src/assets/certs/advanced_graphics.jpg'}
  github={'./src/assets/certs/advanced_graphics.jpg'}
   />
   <Card
  title={'Video Editing'}
  content={'Video editing with capcut'}
  image={'./src/assets/certs/capcut.jpg'}
  github={'./src/assets/certs/capcut.jpg'}
   />
   <Card
  title={'Generative AI'}
  content={'Generative AI for leaders'}
  image={'./src/assets/certs/generativeAI.jpg'}
  github={'./src/assets/certs/generativeAI.jpg'}
   />
   <Card
  title={'Marketing'}
  content={'Marketing And Marketing Management'}
  image={'./src/assets/certs/marketing.jpg'}
  github={'./src/assets/certs/marketing.jpg'}
   />
   <Card
  title={'Front-End Development'}
  content={'Front-End web development'}
  image={'./src/assets/certs/front-end_development.pdf'}
  github={'./src/assets/certs/front-end_development.pdf'}
   />
   <Card
  title={'Python'}
  content={'Python Basics'}
  image={'./src/assets/certs/python_basics.pdf'}
  github={'./src/assets/certs/python_basics.pdf'}
   />
   <Card
  title={'Cloud Computing'}
  content={'AWS project'}
  image={'./src/assets/certs/AWS_project.pdf '}
  github={'./src/assets/certs/AWS_project.pdf'}
   />
  </div>
  </div>
}


