import { nanoid } from 'nanoid';
import React from 'react';

interface AnimalProps {
  animals: string[];
}

const Animal: React.FC<AnimalProps> = ({animals}) => {
  return (
    <div>
      {animals.map((animal) => (
        <li key={nanoid()}>{animal}</li>
      ))}
    </div>
  );
};

export default Animal;