import React from 'react';
import './VolunteerCard.css';
import '../../global.css'
import linkimage from '../../assets/Images/linkedin-icon.svg'
import twitimage from '../../assets/Images/twitter-logo.svg'
import whatimage from '../../assets/Images/whatsapp-logo.svg'
const VolunteerCard = ({ image, name, title, phone, email, linkedin, twitter, whatsapp }) => {
  return (
    <div className="volunteer-card">
      <img src={image} alt={name} className="volunteer-image" />
      <h3>{name}</h3>
      <h7>{title}</h7>
      <p>{phone}</p>
      <p>{email}</p>
      <div className="volunteer-links">
        <a href={linkedin} target="_blank" rel="noopener noreferrer"><img className='photo' src={linkimage} alt="" /></a>
        <a href={twitter} target="_blank" rel="noopener noreferrer"><img className='photo' src={twitimage} alt="" /></a>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer"><img className='photo' src={whatimage} alt="" /></a>
      </div>
    </div>
  );
};

export default VolunteerCard;