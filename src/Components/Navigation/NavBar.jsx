import React from "react";
import { NAVBAR_ITEMS_1 } from "../../constant";
import { NAVBAR_ITEMS_2 } from "../../constant";
import { Link,NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="fixed w-screen py-2 px-24 bg-black bg-opacity-50 rounded-b-3xl flex justify-between items-center gap-8 z-50">
      <div className="flex gap-6 w-full justify-around text-white">{NAVBAR_ITEMS_1.map(link=><NavLink to={link.href} className={({isActive})=>`${isActive?"after:w-full before:opacity-100": "after:w-0 hover:after:w-full  hover:before:opacity-100"} relative before:absolute before:bg-[url('rice.png')] before:bg-center before:bg-cover before:w-5 before:h-6 before:-right-4 before:-top-3 before:opacity-0 before:duration-100 after:absolute after:h-[1.5px] after:bg-yellow-50 after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:rounded-full  duration-200 after:duration-200 after:opacity-90`}>{link.name}</NavLink>)}</div>
      <div className=""><img src="./logo bg.png" alt="" className="w-52" /></div>
      <div className="flex gap-6 w-full justify-around text-white">{NAVBAR_ITEMS_2.map(link=><NavLink to={link.href} className={({isActive})=>`${isActive?"after:w-full before:opacity-100": "after:w-0 hover:after:w-full  hover:before:opacity-100"} relative before:absolute before:bg-[url('rice.png')] before:bg-center before:bg-cover before:w-5 before:h-6 before:-right-4 before:-top-3 before:opacity-0 before:duration-100 after:absolute after:h-[1.5px] after:bg-yellow-50 after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:rounded-full  duration-200 after:duration-200 after:opacity-90`}>{link.name}</NavLink>)}</div>
    </nav>
  );
}

export default NavBar;
 