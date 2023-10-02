import React from 'react';

interface AnimalProps {
  animals: string[];
}

const Animal: React.FC<AnimalProps> = (props) => {
  const { animals } = props;
  return (
    <div>
      {animals.map((animal, index) => (
        <li key={index}>{animal}</li>
      ))}
    </div>
  );
};

export default Animal;