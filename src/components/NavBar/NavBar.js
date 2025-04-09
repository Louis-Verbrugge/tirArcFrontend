import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import './NavBar.css';  // Importation du fichier CSS

export function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="navbar">
      <nav className="content">
        <p>Tir à l'arc Cysoing</p>
        <div className="nav-icon">
          <a href="/news">
            <p>News</p>
          </a>
          <a href="#">
          <p>Qui sommes-nous ?</p>
          </a>
          <a href="#">
          <p>Photos</p>
          </a>
          <a href="#">
          <p>Contact</p> 
          </a>
        </div>
      </nav>
    </div>
  );
}
