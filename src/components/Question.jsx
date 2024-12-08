import React, { useState } from "react";

const Question = ({ subject }) => {
  const questions = {
    physics: [
      { question: "What is the unit of force?", options: ["Newton", "Joule", "Watt", "Volt"], correct: "option1" },
      { question: "What is the speed of light?", options: ["3x10^8 m/s", "5x10^6 m/s", "2x10^7 m/s", "1x10^5 m/s"], correct: "option1" },
      { question: "What is the unit of length?", options: ["Newton", "Joule", "Watt", "Volt"], correct: "option1" },
      { question: "What is the speed of weight?", options: ["3x10^8 m/s", "5x10^6 m/s", "2x10^7 m/s", "1x10^5 m/s"], correct: "option1" },
    ],
    chemistry: [
      { question: "What is the chemical formula of water?", options: ["H2O", "CO2", "O2", "H2"], correct: "option1" },
      { question: "What is the pH value of a neutral solution?", options: ["0", "7", "14", "2"], correct: "option2" },
      { question: "What is the chemical formula of oxygen?", options: ["H2O", "CO2", "O2", "H2"], correct: "option1" },
      { question: "What is the pH value of a neutral carbon di oxide?", options: ["I0", "n7", "h14", "co2"], correct: "option2" },
    ],
    maths: [
      { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: "option2" },
      { question: "What is the derivative of x^2?", options: ["2x", "x", "2", "x^2"], correct: "option1" },
      { question: "What is 2 + 4?", options: ["3", "4", "5", "6"], correct: "option2" },
      { question: "What is the derivative of x^3?", options: ["3x^2", "x", "2", "x^2"], correct: "option1" },
    ],
  };

  const subjectQuestions = questions[subject] || [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [savedAnswers, setSavedAnswers] = useState({});

  const handleRadioChange = (option) => {
    setSelectedOption((prevOption) => (prevOption === option ? "" : option));
  };

  const handleSaveAndNext = () => {
    if (selectedOption) {
      setSavedAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: selectedOption,
      }));
      setSelectedOption("");
      setCurrentQuestionIndex((prevIndex) =>
        prevIndex < subjectQuestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };

  const handleNext = () => {
    setSelectedOption("");
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < subjectQuestions.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const loadQuestionFromButton = (index) => {
    setCurrentQuestionIndex(index);
    setSelectedOption(savedAnswers[index] || "");
  };

  return (
    <>
      <div className="md:flex lg:flex xl:flex">
        <div className="w-3/4 h-full mt-16">
          <h1 className="text-sm ml-5">Question {currentQuestionIndex + 1}</h1>
          <h3 className="text-lg ml-5">{subjectQuestions[currentQuestionIndex].question}</h3>
          <form className="flex p-2">
            {subjectQuestions[currentQuestionIndex].options.map((option, index) => (
              <span key={index} className="m-2 flex">
                <input
                  className="form-radio h-6 w-6"
                  type="radio"
                  value={`option${index + 1}`}
                  checked={selectedOption === `option${index + 1}`}
                  onClick={() => handleRadioChange(`option${index + 1}`)}
                />
                <h1 className="text-md">{option}</h1>
              </span>
            ))}
          </form>
          <div className="flex">
            <button
              className=" ml-5 p-2 text-white rounded-lg m-2 bg-green-500 hover:bg-green-600"
              onClick={handleSaveAndNext}
            >
              Save & Next
            </button>
            <button
              className="p-2 text-white rounded-lg m-2 bg-green-500 hover:bg-green-600"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>

        <div className="w-1/4 h-full mt-16 flex flex-wrap" id="qbutton">
          {subjectQuestions.map((_, index) => (
            <button
              key={index}
              className={`p-4 rounded-lg m-1 ${
                savedAnswers[index] ? "bg-green-400" : "bg-gray-400"
              }`}
              onClick={() => loadQuestionFromButton(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        

      </div>
      <div className="mt-10 flex p-5">
        <div className="flex mt-2 p-5 ">
        <span className="h-16 rounded-md  w-11 bg-green-400 text-white flex justify-center items-center ">x</span><p className=" mt-5 ml-2"> Represent Saved Answers</p>
     
        </div>
       <div className="flex mt-2 p-5">
       <span className="bg-gray-400 h-16 rounded-md  w-11  text-white flex justify-center items-center">x</span> <p className="mt-5 ml-2">Represent Unsaved Question</p>
       </div>
      </div>
    </>
  );
};

export default Question;
