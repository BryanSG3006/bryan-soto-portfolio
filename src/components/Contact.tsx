import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <h2 className="text-3xl font-bold mb-10">Contacto</h2>

      <div className="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-xl p-8 max-w-3xl">
        <p className="text-gray-300 text-lg">
          ¿Te gustaría trabajar juntos o tienes alguna oportunidad en mente?
        </p>

        <p className="text-gray-400 mt-4">
          Estoy abierto a oportunidades como{" "}
          <span className="text-gray-200">Full Stack Developer</span> y roles
          relacionados a Ingeniería de Software.
        </p>

        {/* Contact info */}
        <div className="mt-6 space-y-3">
          {/* Email */}
          <a
            href="mailto:bryansotogarcia3006@gmail.com"
            className="block text-blue-400 hover:text-blue-300 transition"
          >
            📧 bryansotogarcia3006@gmail.com
          </a>

          {/* Phone */}
          <a
            href="tel:+50683431413"
            className="block text-blue-400 hover:text-blue-300 transition"
          >
            📱 +506 8343 1413
          </a>
        </div>

        {/* Social links */}
        <div className="mt-8 flex flex-wrap gap-8">
          {/* GitHub */}
          <a
            href="https://github.com/TU_USUARIO"
            target="_blank"
            className="flex items-center gap-3 text-gray-400 hover:text-white transition"
          >
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={24}
              height={24}
            />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/TU_USUARIO"
            target="_blank"
            className="flex items-center gap-3 text-gray-400 hover:text-white transition"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
