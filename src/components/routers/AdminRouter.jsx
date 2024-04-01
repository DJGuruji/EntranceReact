import React,{useState} from 'react'
import NotFound from '../pages/NotFound'
import AdminHome from '../pages/AdminHome'
import Question from '../Question'
import {AddNew} from '../pages/AddNew'
import { Link,Route,Routes } from 'react-router-dom'
import { logout } from '../../lib/auth'

const AdminRouter = () => {
    const [activeLink, setActiveLink] = useState("/uphysics");

    const handleSetActiveLink = (link) => {
       setActiveLink(link);
     };


  return (
   <>
               <div className="fixed top-0 flex justify-between w-screen h-20 border border-b-2">
               <div><img className=" w-20 h-16 " src="https://imgs.search.brave.com/eG_ytSD6dv5gMS8oAQxKC0xTo95qon4RTWduEe_htEg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91bml2/ZXJzaXR5a2FydC5i/LWNkbi5uZXQvL0Nv/bnRlbnQvdXBsb2Fk/L2FkbWluL3VsaGtr/dDM1LmYxaC5qcGc" alt="profile" /></div>
        
                <ul className="flex text-lg ">
                    <li className="p-2 hover:text-blue-500">
                        <Link to="/">Add Physics</Link>
                    </li>
                 
                    <li className="p-2 hover:text-blue-500">
                        <Link to="uchemistry">Add Chemistry</Link>
                    </li>
                    <li className="p-2 hover:text-blue-500">
                        <Link to="umaths">Add maths</Link>
                    </li>
                    <li className="p-2 text-red-500">
                        <button onClick={()=>logout()}>Logout</button>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<AdminHome />} />
               
                <Route path="/uchemistry" element={<AdminHome />} />
                <Route path="/umaths" element={<AdminHome />} />
                <Route path="/addnew" element={<AddNew />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
   </>
  )
}

export default AdminRouter