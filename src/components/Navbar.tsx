import { useState } from "react";
import { Link } from "react-scroll";
import { RiMenuFill, RiCloseFill } from "react-icons/ri/index";
const Navbar = () => {
 const [open, setOpen] = useState(false);
 const close = () => setOpen(!open);
 return (
  <header className="Content-navbar">
   <nav className="Navbar">
    <div className="flex justify-between items-center mx-2">
     <Link to="home" href="#home">
      <img src="./logo.svg" alt="logo" width={80} height={80} />
     </Link>
     <button onClick={() => setOpen(!open)} aria-label="button menu">
      {open ? (
       <RiCloseFill className="Nav-icons" title="close navbar" />
      ) : (
       <RiMenuFill className="Nav-icons" title="open navbar" />
      )}
     </button>
    </div>

    <div className={`Nav-content-items ${open ? "top-16" : "top-[-850px] "}`}>
     <div
      className={`Nav-list  ${
       open ? "top-20 opacity-100 " : "top-[-850px] lg:opacity-100 opacity-0"
      }`}
     >
      <Link to="home" href="#home" className="Link" onClick={close}>
       inicio
      </Link>
      <Link to="about" href="#about" offset={-140} className="Link" onClick={close}>
       sobre mi
      </Link>
      <Link to="knowledge" href="#knowledge" offset={-90} className="Link" onClick={close}>
       conocimientos
      </Link>
      <Link to="certificates" href="certificates" offset={-200} className="Link" onClick={close}>
       certificados
      </Link>
      <Link to="projects" href="projects" offset={-190} className="Link" onClick={close}>
       proyectos
      </Link>
      <Link to="contact" href="contact" offset={-130} className="Link" onClick={close}>
       contacto
      </Link>
     </div>
    </div>
   </nav>
  </header>
 );
};

export default Navbar;
