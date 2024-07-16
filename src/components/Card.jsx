// src/Card.js
import React from 'react';
import './Card.css';

const Card = ({ title, content, image, github }) => {
  return (
    <div className="card">
     <a href={github}> <img src={image} alt={title} className="card-image"/></a>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{content}</p>
      </div>
    </div>
  );
};

export default Card;
