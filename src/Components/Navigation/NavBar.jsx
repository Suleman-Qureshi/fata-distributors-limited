import React from "react";
import { NAVBAR_ITEMS_1 } from "../../constant";
import { NAVBAR_ITEMS_2 } from "../../constant";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="fixed w-screen py-2 px-24 bg-black bg-opacity-50 rounded-b-3xl flex justify-between items-center gap-8">
      <div className="flex gap-6 w-full justify-around text-white">{NAVBAR_ITEMS_1.map(link=><Link to="/" >{link.name}</Link>)}</div>
      <div className=""><img src="./logo bg.png" alt="" className="w-52" /></div>
      <div className="flex gap-6 w-full justify-around text-white">{NAVBAR_ITEMS_2.map(link=><Link to="/" >{link.name}</Link>)}</div>
    </nav>
  );
}

export default NavBar;
 