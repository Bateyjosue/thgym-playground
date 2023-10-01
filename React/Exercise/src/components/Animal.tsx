/* eslint-disable @typescript-eslint/no-explicit-any */


interface AnimalProps {
  animal: string;
}

const Animal= ({animal}:AnimalProps ) => {
  return (
    <div>
        <li>{animal}</li> 
    </div>
  )
}

export default Animal