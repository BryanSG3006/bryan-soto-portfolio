type Skill = {
  name: string;
  icon: string;
};

const frontendSkills: Skill[] = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Angular", icon: "/icons/angular.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
];

const backendSkills: Skill[] = [
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Express", icon: "/icons/express.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "Git", icon: "/icons/git.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-3xl font-bold mb-12">Habilidades</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Frontend */}
        <div className="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-blue-400">
            Frontend
          </h3>

          <ul className="grid grid-cols-2 gap-6">
            {frontendSkills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center gap-4"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8"
                />
                <span className="text-gray-300">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-blue-400">
            Backend
          </h3>

          <ul className="grid grid-cols-2 gap-6">
            {backendSkills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center gap-4"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8"
                />
                <span className="text-gray-300">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
