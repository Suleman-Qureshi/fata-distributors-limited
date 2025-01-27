import React from "react";
import { NAV_LINKS } from "../../constant";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav className="fixed w-screen py-2 px-24 bg-[#006a4d] text-white flex justify-between items-center gap-8 z-50">
     <img src="./fata_logo.svg" alt="" className="w-24" />
     <div className="flex gap-12 text-sm ">
      {NAV_LINKS.map(link=><Link className="relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:-translate-x-1/2 hover:before:w-full duration-200 before:duration-200 before:h-[1px] before:bg-white hover:text-white" to={link.href} >{link.title}</Link>)}
     </div>
    </nav>
  );
}

export default NavBar;
 