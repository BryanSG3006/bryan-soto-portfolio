"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gray-900/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 h-full">
        {/* Logo */}
        <span className="font-bold text-lg">Bryan.dev</span>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contacto
            </a>
          </li>
        </ul>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1"
          aria-label="Abrir menú"
        >
          <span
            className={`w-6 h-0.5 bg-white transition ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur border-t border-gray-800">
          <ul className="flex flex-col gap-4 px-6 py-6 text-sm">
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
