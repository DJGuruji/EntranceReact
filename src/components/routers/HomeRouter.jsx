import React, { useState } from "react";
import NotFound from "../pages/NotFound";
import Question from "../Question";
import Timer from "../pages/Timer";
import { Link, Routes, Route } from "react-router-dom";

const HomeRouter = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleSetActiveLink = (link) => {
     setActiveLink(link);
   };

  return (
    <>
      <div className="flex justify-between w-screen h-16 border border-b-2">
        <div><img className=" w-20 h-16 " src="https://imgs.search.brave.com/eG_ytSD6dv5gMS8oAQxKC0xTo95qon4RTWduEe_htEg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91bml2/ZXJzaXR5a2FydC5i/LWNkbi5uZXQvL0Nv/bnRlbnQvdXBsb2Fk/L2FkbWluL3VsaGtr/dDM1LmYxaC5qcGc" alt="profile" /></div>
        <span className="mt-2 "><Timer></Timer></span>
        <span>
          <h1 className="mt-3 ">Hello Student</h1>
        </span>
      </div>
      <div>
         <ul className="flex justify-around text-lg">
           <li
            className={`p-1 border-2 w-1/4 text-center rounded-xl ${
              activeLink === "/" ? "bg-blue-500 text-white" : "bg-slate-200"
            }`}
          >
            <Link to="/" onClick={() => handleSetActiveLink("/")}>
              Physics
            </Link>
          </li>
          <li
            className={`p-1 border-2 w-1/4 text-center rounded-xl ${
              activeLink === "chemistry" ? "bg-blue-500 text-white" : "bg-slate-200"
            }`}
          >
            <Link
              to="chemistry"
              onClick={() => handleSetActiveLink("chemistry")}
            >
              Chemistry
            </Link>
          </li>
          <li
            className={`p-1 border-2 w-1/4 text-center rounded-xl ${
              activeLink === "maths" ? "bg-blue-500 text-white" : "bg-slate-200"
            }`}
          >
            <Link to="maths" onClick={() => handleSetActiveLink("maths")}>
              Maths
            </Link>
          </li> 
        </ul> 
      </div>
      <Routes>
        <Route path="/" element={<Question />} />
        <Route path="chemistry" element={<Question />} />
        <Route path="maths" element={<Question />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default HomeRouter;
