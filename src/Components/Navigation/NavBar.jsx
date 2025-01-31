import React from "react";
import { NAV_LINKS } from "../../constant";
import { Link } from "react-router-dom";


function NavBar() {
  return (
<>
<nav className="fixed flex justify-between items-center px-6 py-4 w-full z-50 bg-[#006241]">
<div><img src="./fata_logo.svg" alt="fataLogo" className="h-12" /></div>
<div className="flex gap-12 text-white text-lg font-light">{NAV_LINKS.map(link=><Link className="hover:text-white relative before:absolute before:w-6 before:h-6 before:bg-[url('https://raw.githubusercontent.com/Suleman-Qureshi/fata-distributors-limited/5e617ca17467c1972b2758776b23ab79ecdfa813/public/rice_beans.svg')] before:bg-center before:bg-cover before:-top-4 before:-left-4 before:bg-no-repeat before:hidden hover:before:block after:absolute after:w-0 hover:after:w-full after:h-[2px] after:rounded-full after:bg-white after:left-1/2 after:-translate-x-1/2 after:bottom-0 duration-200 hover:duration-200 after:duration-200" to= {link.href}>{link.title}</Link>)}
<a href="#contact-section" className="hover:text-white relative before:absolute before:w-6 before:h-6 before:bg-[url('https://raw.githubusercontent.com/Suleman-Qureshi/fata-distributors-limited/5e617ca17467c1972b2758776b23ab79ecdfa813/public/rice_beans.svg')] before:bg-center before:bg-cover before:-top-4 before:-left-4 before:bg-no-repeat before:hidden hover:before:block after:absolute after:w-0 hover:after:w-full after:h-[2px] after:rounded-full after:bg-white after:left-1/2 after:-translate-x-1/2 after:bottom-0 duration-200 hover:duration-200 after:duration-200">Contact Us</a>
</div>
</nav>
</>
  );
}
export default NavBar;
 