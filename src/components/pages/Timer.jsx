

import React, { useState, useEffect } from 'react';


const Timer = ({ onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(5040); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  const hours = Math.floor(timeLeft / 3600);
   const minutes = Math.floor((timeLeft % 3600) / 60);
     const seconds = timeLeft % 60;
  return (
    
    <div className="bg-black  text-white text-center rounded-full p-1">
     <h2 className="p-1 "> {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
   </div>
  );
};

const Quiz = () => {
  const [isTimeUp, setTimeUp] = useState(false);

  const handleTimeUp = () => {
    setTimeUp(true);
  };

  return (
    <div>
      <Timer onTimeUp={handleTimeUp} />
      {isTimeUp && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-11 rounded-lg">
        
            <h1 className='text-green-700 p-2 text-lg '>Thank you for completing the KEAM MOCK TEST</h1>
            <span className="flex p-1">Total Marks In Physics :<h1 className=' text-blue-800 '>100</h1></span>
            <span className="flex p-1">Total Marks In Chemistry: <h1 className=' text-blue-800'>100</h1></span>
            <span className="flex p-1">Total Marks In Maths:<h1 className=' text-blue-800'>100</h1> </span>
            <span className="flex p-1 text-xl">Grant Total: <h1 className=' text-blue-800'>100</h1></span>
          </div>
        </div>
      )}
{/* <Question></Question> */}
    </div>
  );
};

export default Quiz;


