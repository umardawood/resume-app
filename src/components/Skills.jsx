const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 70 },
        { name: "React", level: 70 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    // {
    //   category: "Backend",
    //   skills: [
    //     { name: "Node.js", level: 75 },
    //     { name: "Express", level: 70 },
    //     { name: "MongoDB", level: 65 },
    //     { name: "Firebase", level: 70 },
    //   ],
    // },
    {
      category: "Tools",
      skills: [
        { name: "Git", level: 85 },
        { name: "Chrome DevTools", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 70 },
        { name: "Adobe XD", level: 70 }
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:pt-[110px] bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development
            world. Here's an overview of my technical skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-emerald-600 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
