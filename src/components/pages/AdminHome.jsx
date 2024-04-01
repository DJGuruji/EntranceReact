import React, { useState } from "react";
import { Link } from "react-router-dom";

import Pagination from "./Pagination";



const AdminHome = () => {



  return (
    <div className="mt-20">
      <h1>Admin Home</h1>

      <div className="flex justify-end">
       <Link to="/addnew"className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-md m-2">Add Questions +</Link>
     </div> 
     
  
        <div>
        {/* call displayQuest cmponent in AddNew.js here */}
      
         
        </div>
      

      <span className="flex justify-center mt-2 mb-3">
        <Pagination />{" "}
      </span>
    </div>
  );
};

export default AdminHome;


