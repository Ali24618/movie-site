import React, { useState } from 'react';
import Rick from '../pampa/rick';

const TopAvengers = [
  'Iron Man',
  'Captain America',
  'Thor',
  'Hulk',
  'Black Widow',
  'Hawkeye',
  'Black Panther',
  'Doctor Strange',
  'Spider-Man',
  'Captain Marvel'
];

const Works = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAvengers = TopAvengers.filter(avenger =>
    avenger.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <Rick/>
      <input 
        type="text" 
        placeholder="Search Avengers..." 
        value={searchTerm} 
        onChange={handleChange} 
      />
      <ul>
        {filteredAvengers.map((avenger, index) => (
          <li key={index}>{avenger}</li>
        ))}
      </ul>
    </div>
  );
};

export default Works;