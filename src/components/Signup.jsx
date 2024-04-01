import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'
import DatePicker from 'react-date-picker';

const SignupForm = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');

  const [number, setNumber] = useState('');
  const [school, setSchool] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form className="w-3/4 max-w-md p-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
        <h1 className="text-2xl font-bold text-center mb-3 text-slate-700 lg:mt-2 lg:mb-2 lg:text-2xl xl:mt-2 xl:mb-2 xl:text-2xl ">   <i className="fas fa-user text-3xl text-gray-700 mr-2"></i>SIGNUP</h1>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            
            User Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">

          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="First Name"
         
          />
        </div>
        <div className="mb-4">
        
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Last Name"
          
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="mobile">
            Mobile
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mobile"
            type="number"
            placeholder="enter your mobile number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className='mb-4'>
        <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">
            Date Of Birth
          </label>
{/* <DatePicker></DatePicker> */}
<input type="date" name="" id="" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            School
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="school"
            type="text"
            placeholder="school"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
        <button className="border-2 bg-blue-500 text-white hover:bg-blue-600 hover:border-blue-400 w-1/2 h-9 text-center rounded-md lg:mt-5 xl:mt-5 ">
<input type="submit" value="SIGN UP" />
</button>
        </div>
        <p className="ml-7 lg:ml-9 xl:ml-9 mt-5 ">
Already have an account ? <a onClick={() => navigate('/login')} className="text-blue-700 hover:underline hover:text-green-700 ">Login </a>here.

 
</p>
      </form>
    </div>
  );
};

export default SignupForm;
