export default function About() {
  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-bold mb-10">Sobre mí</h2>

      <div className="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-xl p-8 max-w-4xl">
        <p className="text-gray-300 leading-relaxed text-lg">
          Soy <span className="text-blue-400 font-medium">Ingeniero de Software Full Stack</span> con
          experiencia en el desarrollo de aplicaciones web modernas, enfocadas en
          rendimiento, mantenibilidad y buena experiencia de usuario.
        </p>

        <p className="text-gray-400 leading-relaxed mt-6">
          Trabajo principalmente con tecnologías como{" "}
          <span className="text-gray-200">
            React, Angular, TypeScript, JavaScript, HTML y CSS
          </span>
          , creando interfaces dinámicas y soluciones escalables. Me adapto con
          facilidad a distintos entornos y metodologías de trabajo.
        </p>

        <p className="text-gray-400 leading-relaxed mt-6">
          Estoy en búsqueda de oportunidades donde pueda{" "}
          <span className="text-gray-200">
            aportar valor desde el primer día
          </span>
          , seguir aprendiendo constantemente y crecer profesionalmente dentro
          de un equipo de desarrollo.
        </p>
      </div>
    </section>
  );
}
