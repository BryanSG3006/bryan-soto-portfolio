export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gray-900/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="font-bold text-lg">Bryan.dev</span>
        <ul className="flex gap-6 text-sm">
          <li><a href="#about" className="hover:text-blue-400">Sobre mí</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
