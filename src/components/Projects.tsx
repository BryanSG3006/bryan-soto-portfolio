import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-bold mb-12">Proyectos</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              group
              relative
              bg-gray-900/80
              backdrop-blur
              p-6
              rounded-xl
              border
              border-gray-800
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500/50
              hover:shadow-xl
              hover:shadow-blue-500/10
            "
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>

            <h3 className="text-xl font-semibold text-gray-100">
              {project.title}
            </h3>

            <p className="text-gray-400 mt-3 leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    text-sm
                    bg-gray-800
                    text-gray-300
                    px-3
                    py-1
                    rounded-full
                    transition
                    group-hover:bg-gray-700
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-6 flex gap-6 text-sm font-medium">
              <a
                href={project.github}
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                GitHub →
              </a>

              <a
                href={project.demo}
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Demo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
