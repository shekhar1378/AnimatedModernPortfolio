import React from "react";
import {Link} from "react-router-dom"
import "../App.css"

const Navbar = () => {
    // const navLinks = [
    
    //     {
    //         name:"About",
    //         link:"/about",
    //     },
    //     {
    //         name :"Projects",
    //         link:"/projects"
    //     },
    //     {
    //         name:"Contact",
    //         link:"/contact"
    //     }
    // ];

  return (
    <div className="fixed z-[999] w-full px-14 py-6  font-['NeueMontreal-Regular'] flex justify-between items-center ">
      <div className="text-2xl font-bold tracking-wider">
        {/* <Link to='/home'>Shekhar</Link> */}
      <h1>Shekhar</h1>
      </div>

      {/* <div className="links flex gap-10 ">
            {navLinks.map((item)=> (
                
                    <Link key={item.name} to={item.link} className=" text-md font-light capitalize tracking-wider " >
                        {item.name}
                    </Link>
            
            ))}
      </div> */}

      <div>
        <ul>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
