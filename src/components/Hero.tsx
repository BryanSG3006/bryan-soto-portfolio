import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Texto */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-100">
            Hola, soy{" "}
            <span className="text-blue-500">Bryan Soto</span>
          </h1>

          <p className="mt-6 text-xl text-gray-400 max-w-xl">
            Ingeniero de Software Full Stack enfocado en crear aplicaciones web
            modernas, escalables y bien diseñadas utilizando React, Angular y
            TypeScript.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
            >
              Ver Proyectos
            </a>

            <a
              href="/cv-bryan-soto.pdf"
              download
              className="border border-gray-600 text-gray-200 px-6 py-3 rounded-md hover:border-blue-500 hover:text-blue-400 transition"
            >
              Descargar CV
            </a>
          </div>
        </div>

        {/* Foto */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl"></div>

            <Image
  src="/bryan.jpg"
  alt="Bryan Soto"
  width={320}
  height={320}
  priority
  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-gray-800"
/>

          </div>
        </div>

      </div>
    </section>
  );
}
