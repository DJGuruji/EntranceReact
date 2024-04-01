// import React, { useState } from 'react';

// const QuizQuestion = ({ question, options, handleOptionSelect }) => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleRadioChange = (option) => {
//     setSelectedOption(option);
//     handleOptionSelect(option); 
//   };

//   return (
//     <div>
//       <h3>{question}</h3>
//       <form>
//         {options.slice(0, 4).map((option) => (
//           <div key={option.id}>
//             <input
//               type="radio"
//               id={option.id}
//               value={option.id}
//               checked={selectedOption === option.id}
//               onChange={() => handleRadioChange(option.id)}
//             />
//             <label htmlFor={option.id}>{option.text}</label>
//           </div>
//         ))}
//       </form>
//     </div>
//   );
// };

// export default QuizQuestion;
