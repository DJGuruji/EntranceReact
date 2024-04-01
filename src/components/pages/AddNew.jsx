


// import React, { useState } from 'react';
// import Select from 'react-select';

// const options = [
//   { value: 'A', label: 'A' },
//   { value: 'B', label: 'B' },
//   { value: 'C', label: 'C' },
//   { value: 'D', label: 'D' },
// ];

// const sets = [
//   { value: 'A', label: 'A' },
//   { value: 'B', label: 'B' },
//   { value: 'C', label: 'C' },
//   { value: 'D', label: 'D' },
// ];


// const AddNew = ({ onImagesUpdate }) => {
//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [selectedSet, setSelectedSet] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedImage(file);
//   };

//   const handleAnswerChange = (selectedOption) => {
//     setSelectedAnswer(selectedOption);
//   };

//   const handleSetChange = (selectedSet) => {
//     setSelectedSet(selectedSet);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (selectedImage && selectedAnswer && selectedSet) {
//       const newImageData = { image: selectedImage, answer: selectedAnswer,set:selectedSet };
//       setImageData([...imageData, newImageData]);
//       onImagesUpdate([...images, selectedImage, selectedAnswer,selectedSet]);
//     }
//   };
  

//   const [imageData, setImageData] = useState([]); // Array to store image and selected answer pairs


//   return (
//     <div className="max-w-xl mx-auto p-6 mt-20 bg-gray-200 rounded-lg">
//       <form onSubmit={handleSubmit} className="space-y-4">
//       <label className="block text-gray-700 font-bold " htmlFor="department">
//           Select Question Set:
//         </label>
//         <Select
//           options={sets}
//           value={selectedSet}
//           onChange={handleSetChange}
        
//         />
//       <label className="block text-gray-700 font-bold " htmlFor="department">
//           Select Question:
//         </label>
//         <input
//           type="file"
//           onChange={handleImageChange}
//           className="border p-2"
        
//         />
//         <label className="block text-gray-700 font-bold mb-2" htmlFor="department">
//           Choose Answer:
//         </label>
//         <Select
//           options={options}
//           value={selectedAnswer}
//           onChange={handleAnswerChange}
//         />
//         <span className='flex justify-center'>
//           <button type="submit" className="w-3/4 bg-blue-500 text-white p-2 rounded">
//             Submit
//           </button>
//         </span>
//       </form>
//       <div className="mt-4">
//       {imageData.map((data, index) => (
//   <div key={index}>
//     <img
//       src={URL.createObjectURL(data.image)}
//       alt={`Uploaded Image ${index}`}
//       className="mt-2 rounded"
//       style={{ maxWidth: '200px' }}
//     />
//       <h1>Selected Set: {data.set.label}</h1>
//     <h1>Selected Answer: {data.answer.label}</h1>
//   </div>
// ))}

//       </div>
   

//     </div>
//   );
// };

// export default AddNew;





import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'C', label: 'C' },
  { value: 'D', label: 'D' },
];

const sets = [
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'C', label: 'C' },
  { value: 'D', label: 'D' },
];

const AddNew = ({ onImagesUpdate }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedSet, setSelectedSet] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleAnswerChange = (selectedOption) => {
    setSelectedAnswer(selectedOption);
  };

  const handleSetChange = (selectedSet) => {
    setSelectedSet(selectedSet);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedImage && selectedAnswer && selectedSet) {
      const newImageData = { image: selectedImage, answer: selectedAnswer, set: selectedSet };
      setSubmittedData(newImageData);
      onImagesUpdate([...images, selectedImage, selectedAnswer, selectedSet]);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-20  rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-200 p-5 rounded-lg ">
        <span className='flex justify-center'><h1 className='text-lg'>Add Question</h1></span>
        <label className="block text-gray-700 font-bold" htmlFor="department">
          Select Question Set:
        </label>
        <Select
          options={sets}
          value={selectedSet}
          onChange={handleSetChange}
        />
        <label className="block text-gray-700 font-bold" htmlFor="department">
          Select Question Set:
        </label>
        <input
          type="file"
          onChange={handleImageChange}
          className="border p-2"
        />
        <label className="block text-gray-700 font-bold mb-2" htmlFor="department">
          Choose Answer:
        </label>
        <Select
          options={options}
          value={selectedAnswer}
          onChange={handleAnswerChange}
        />
        <span className='flex justify-center'>
          <button type="submit" className="w-3/4 bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </span>
     
       
      </form>
         {/* Display submitted data */}
         {submittedData && (
          <DisplayQuest selectedData={submittedData} />
  
        )}
    </div>
  );
};




const DisplayQuest = ({ selectedData }) => {
  return (
    <div className="mt-4">
      <img
        src={URL.createObjectURL(selectedData.image)}
        alt={`Uploaded Image`}
        className="mt-2 rounded"
        style={{ maxWidth: '500px' }}
      />
      <h1>Question Set: {selectedData.set.label}</h1>
      <h1> Answer: {selectedData.answer.label}</h1>
    </div>
  );
};

export { AddNew, DisplayQuest };

