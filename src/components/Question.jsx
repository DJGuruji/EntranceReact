
import React, { useState } from "react";

const Question = () => {
  const questions = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);

  const handleRadioChange = (option) => {
    setSelectedOption(prevOption => (prevOption === option ? "" : option));
  };

  const handleSaveAndNext = () => {
    if (selectedOption) {
      if (selectedButton) {
        selectedButton.classList.remove('bg-green-400');
        selectedButton.classList.add('bg-gray-400');
      }
      setSelectedButton(document.getElementById('qbutton').children[currentQuestionIndex]);
      setSelectedButton((prevButton) => {
        prevButton.classList.remove('bg-gray-400');
        prevButton.classList.add('bg-green-400');
        return prevButton;
      });
      setSelectedOption("");
      setCurrentQuestionIndex(prevIndex => prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex);
    }
  };

  const handleNext = () => {
    if (selectedButton) {
      selectedButton.classList.remove('bg-green-400');
      selectedButton.classList.add('bg-gray-400');
    }
    setSelectedButton(null);
    setSelectedOption("");
    setCurrentQuestionIndex(prevIndex => prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex);
  };

  const loadQuestionFromButton = (questionIndex) => {
    setCurrentQuestionIndex(questionIndex);
  };

  return (
    <>
      <div className="flex">
        <div className="w-3/4 h-full mt-2">
          <div>
            <h2>{questions[currentQuestionIndex]}</h2>

            <form className="flex p-2">
              <span className="m-2 flex">
                <input
                  className="form-radio h-6 w-6"
                  type="radio"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onClick={() => handleRadioChange("option1")}
                />
                <h1 className="text-xl">A</h1>
              </span>
              <br />

              <span className="m-2 flex">
                <input
                  className="form-radio h-6 w-6"
                  type="radio"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onClick={() => handleRadioChange("option2")}
                />
                <h1 className="text-xl">B</h1>
              </span>
              <br />

              <span className="m-2 flex">
                <input
                  className="form-radio h-6 w-6"
                  type="radio"
                  value="option3"
                  checked={selectedOption === "option3"}
                  onClick={() => handleRadioChange("option3")}
                />
                <h1 className="text-xl">C</h1>
              </span>
              <br />

              <span className="m-2 flex">
                <input
                  className="form-radio h-6 w-6"
                  type="radio"
                  value="option4"
                  checked={selectedOption === "option4"}
                  onClick={() => handleRadioChange("option4")}
                />
                <h1 className="text-xl">D</h1>
              </span>
            </form>
            <div className="flex">
              <button
                className="p-2 text-white rounded-lg m-2 bg-green-500 hover:bg-green-600"
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
        </div>

        <div className="w-1/4 h-full mt-4 flex flex-wrap" id="qbutton">
          {questions.map((question, index) => (

            // Aside question button pagination
            <button
              key={index}
              className={`p-4 rounded-lg m-1 ${selectedButton === index ? 'bg-green-400' : 'bg-gray-400'}`}
              onClick={() => loadQuestionFromButton(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="border-2 flex justify-end">
        <span className="flex">
          <button className="p-4 rounded-lg m-1 bg-green-500">10</button>{" "}
          <p className="p-4">Indicates an option selected</p>
        </span>
        <span className="flex">
          <button className="p-4 rounded-lg m-1 bg-slate-300">10</button>{" "}
          <p className="p-4">Indicates Not selected an option</p>
        </span>
      </div>
    </>
  );
};

export default Question;
