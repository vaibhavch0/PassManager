import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-700 text-amber-50 px-4 py-3 flex items-center justify-between relative">
      {/* Logo */}
      <div className="logo font-bold text-2xl">
        <span className="text-green-600">&lt;</span>
        Get
        <span className="text-green-600">PASS/&gt;</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 items-center">
        <li className="flex items-center gap-1">
          <a href="#">HOME</a>
          <lord-icon
            src="https://cdn.lordicon.com/gmzxduhd.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#08a88a"
          ></lord-icon>
        </li>
        <li className="flex items-center gap-1">
          <a href="#">ABOUT</a>
          <lord-icon
            src="https://cdn.lordicon.com/xuoapdes.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#08a88a"
          ></lord-icon>
        </li>
        <li className="flex items-center gap-1">
          <a href="#">CONTACT</a>
          <lord-icon
            src="https://cdn.lordicon.com/gbkitytd.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#08a88a"
          ></lord-icon>
        </li>
      </ul>

      {/* GitHub Button */}
      <a
        href="https://github.com/vaibhavch0"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex justify-center items-center p-2 px-4 gap-2 bg-green-700 hover:bg-green-900 rounded-md text-white"
      >
        <img className="w-6" src="/icons/github.png" alt="github" />
        <span className="font-bold">Github</span>
      </a>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-[2px] bg-white"></span>
        <span className="w-6 h-[2px] bg-white"></span>
        <span className="w-6 h-[2px] bg-white"></span>
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-800 flex flex-col gap-4 p-4 md:hidden z-10">
          <a href="#" className="flex items-center gap-2">
            HOME
            <lord-icon
              src="https://cdn.lordicon.com/gmzxduhd.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#08a88a"
            ></lord-icon>
          </a>
          <a href="#" className="flex items-center gap-2">
            ABOUT
            <lord-icon
              src="https://cdn.lordicon.com/xuoapdes.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#08a88a"
            ></lord-icon>
          </a>
          <a href="#" className="flex items-center gap-2">
            CONTACT
            <lord-icon
              src="https://cdn.lordicon.com/gbkitytd.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#08a88a"
            ></lord-icon>
          </a>
          <a
            href="https://github.com/vaibhavch0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center p-2 gap-2 bg-green-700 hover:bg-green-900 rounded-md text-white"
          >
            <img className="w-6" src="/icons/github.png" alt="github" />
            <span className="font-bold">Github</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
