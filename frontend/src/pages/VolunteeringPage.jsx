import React from 'react';
import VolunteerCard from './VolunteerCard';
import './styles/VolunteeringPage.css';
import profile1 from '../assets/Images/profile1.jpeg'
import profile2 from '../assets/Images/profile2.jpeg'
import profile3 from '../assets/Images/profile3.jpeg'
import profile4 from '../assets/Images/profile4.jpeg'
import profile5 from '../assets/Images/profile5.jpeg'
import profile6 from '../assets/Images/profile6.jpeg'
import profile7 from '../assets/Images/profile7.jpeg'
import profile8 from '../assets/Images/profile8.jpeg'
import profile9 from '../assets/Images/profile9.jpeg'
import profile10 from '../assets/Images/profile10.jpeg'

const volunteers = [
  {
    image: profile1,
    name: 'Mr. H.N. Bopitiya',
    title: 'Director of Field Crop Research and Development Institute',
    phone: '+94 32 256 7896',
    email: 'wijenayak@agmail.com',
    linkedin: '#',
    twitter: '#',
    whatsapp: '#'
  },
  {
    image: profile2,
    name: 'Mr. Suneth Warnasooriya',
    title: 'A distinguished farmer of 8 years in the field of paddy',
    phone: '+94 32 256 7896',
    email: 'sunethw@agmail.com',
    linkedin: '#',
    twitter: '#',
    whatsapp: '#'
  },
  {
    image: profile3,
    name: 'Mr Nuwan Hewarathna',
    title: 'An owner of a garden with crops of al kinds in dry area',
    phone: '+94 32 256 7896',
    email: 'nuwanhera@gmail.com',
    linkedin: '#',
    twitter: '#',
    whatsapp: '#'
  },
  {
    image: profile4,
    name: 'Mr. Ajith Kumara',
    title: 'An owner of a 50 acres coconut farm with enough experience about coconuts',
    phone: '+94 32 256 7896',
    email: 'ajithkumara@gmail.com',
    linkedin: '#',
    twitter: '#',
    whatsapp: '#'
  },
  {
    image: profile5,
    name: 'Mr. Sumedha Mallawapitiya',
    title: 'A rubber plantation owner',
    phone: '+94 32 256 7896',
    email: 'smallawapitiya@agmail.com',
    linkedin: '#',
    twitter: '#',
    whatsapp: '#'
  },
  {
    image: profile6,
    name: 'Mr. Nimal Boralugoda',
    title: 'A pre-historic gardner with a dinasour pet',
    phone: '+94 32 256 7896',
    email: 'boralugoda@agmail.com',
    linkedin: '#',
    twitter: '#',
    whatsapp: '#'
  },
  {
    image: profile7,
    name: 'Mr. Nuwan Senanayake',
    title: 'Owner of a 50 acres mango garden',
    phone: '+94 32 256 7896',
    email: 'snuwans@agmail.com',
    linkedin: '#',
    twitter: '#',
    whatsapp: '#'
  },
  {
    image: profile8,
    name: 'Ms. Renuka Herath',
    title: 'Lead Resaecher of Field Crops Research and Development Institute ',
    phone: '+94 32 256 7896',
    email: 'renukah@agmail.com',
    linkedin: '#',
    twitter: '#',
    whatsapp: '#'
  },
  {
    image: profile9,
    name: 'Mr. Marlon Perera',
    title: 'Senior Resaecher of Field Crops Research and Development Institute ',
    phone: '+94 32 256 7896',
    email: 'marlonp@agmail.com',
    linkedin: '#',
    twitter: '#',
    whatsapp: '#'
  },
  {
    image: profile10,
    name: 'Mr. Thurunu Fernando',
    title: 'senior Resaecher of Field Crops Research and Development Institute ',
    phone: '+94 32 256 7896',
    email: 'thurunufernando@agmail.com',
    linkedin: '#',
    twitter: '#',
    whatsapp: '#'
  },
  // Add more volunteers here...
];

const VolunteeringPage = () => {
  return (
    <div className="volunteer-page">
      <div className="volunteer-header">
            <h2>Help others out. Give some of your valuable time to enlighten others.</h2>
            <button className="volunteer-button">Volunteer</button>
          </div>
      <div className="volunteer-grid">
        {volunteers.map((volunteer, index) => (
          <VolunteerCard key={index} {...volunteer} />
        ))}
      </div>
    </div>
  );
};

export default VolunteeringPage;