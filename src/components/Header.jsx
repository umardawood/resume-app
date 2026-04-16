"use client";

import { MenuIcon } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white py-5 z-[1] sticky top-0">
      <div className="w-full max-w-[1264px] mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex justify-between">
            <a
              href="#"
              className="inline-flex text-2xl md:text-4xl leading-[1] text-emerald-600 font-bold"
            >
              Portfolio
            </a>
            <button className="flex items-center justify-center md:hidden" onClick={toggleMenu}>
              <MenuIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          <div className={`${isMenuOpen ? "flex" : "hidden"} md:flex md:flex-row
           flex-col bg-white rounded-lg md:rounded-none md:items-center`}
            >
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.name}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-[#333] py-2 md:px-5 font-medium rounded hover:text-white hover:bg-emerald-500 transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
