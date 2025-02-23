import React from "react";
import { NAV_LINKS } from "../../constant";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

function NavBar() {
  return (
<>
<nav className="fixed flex justify-between items-center px-10 md:px-20 py-2 w-screen z-50 bg-[#006241] overflow-x-hidden">
<div><img src="./fata_logo.svg" alt="fataLogo" className="h-12" /></div>
<div className="flex gap-12 text-white text-lg font-light max-md:hidden">{NAV_LINKS.map(link=><Link key={link.title} className="hover:text-white relative before:absolute before:w-6 before:h-6 before:bg-[url('https://raw.githubusercontent.com/Suleman-Qureshi/fata-distributors-limited/5e617ca17467c1972b2758776b23ab79ecdfa813/public/rice_beans.svg')] before:bg-center before:bg-cover before:-top-4 before:-left-4 before:bg-no-repeat before:hidden hover:before:block after:absolute after:w-0 hover:after:w-full after:h-[2px] after:rounded-full after:bg-white after:left-1/2 after:-translate-x-1/2 after:bottom-0 duration-200 hover:duration-200 after:duration-200" to= {link.href}>{link.title}</Link>)}
<a href="#contact-section" className="hover:text-white relative before:absolute before:w-6 before:h-6 before:bg-[url('https://raw.githubusercontent.com/Suleman-Qureshi/fata-distributors-limited/5e617ca17467c1972b2758776b23ab79ecdfa813/public/rice_beans.svg')] before:bg-center before:bg-cover before:-top-4 before:-left-4 before:bg-no-repeat before:hidden hover:before:block after:absolute after:w-0 hover:after:w-full after:h-[2px] after:rounded-full after:bg-white after:left-1/2 after:-translate-x-1/2 after:bottom-0 duration-200 hover:duration-200 after:duration-200">Contact Us</a>
</div>
<div className="hidden max-md:block">
<FaBars className="text-white text-3xl" />
</div>
</nav>
</>
  );
}
export default NavBar;
 