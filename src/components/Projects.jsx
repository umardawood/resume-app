import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Remotebase",
      description:
        "Connect with top software developers from around the globe, meticulously vetted by industry experts for the skills, reliability and innovation your projects need.",
      image: "/images/remotebase.png",
      tags: ["HTML", "CSS", "Next js", "Tailwind"],
      liveLink: "https://remotebase.com/",
    },
    {
      id: 2,
      title: "Talently.ai",
      description:
        "An Al interviewer that conducts live, conversational interviews and gives real-time evaluations to effortlessly identify top performers. Say goodbye to manual screening and hello to smarter recruiting.",
      image: "/images/talently.png",
      tags: ["HTML", "React js", "Next js", "Tailwind"],
      // githubLink: "#",
      liveLink: "https://interview.talently.ai/",
    },
    {
      id: 3,
      title: "AI for HR",
      description:
        "Amplify human potential with AI-powered HR: Join global HR and tech leaders sharing insights at the AI4HR 2024 Virtual Summit.",
      image: "/images/ai4hr.png",
      tags: ["React js", "HTML", "CSS", "Javascript"],
      liveLink: "https://ai4hr.talently.ai/",
    },
    {
      id: 4,
      title: "Migrately",
      description:
        "AI-powered immigration assistant here to address your questions, guide you in preparing your case, connect you with an expert for detailed discussions.",
      image: "/images/migrately.png",
      tags: ["Next js", "HTML", "Tailwind"],
      liveLink: "https://migrately.ai/",
    },
    {
      id: 5,
      title: "AI Hirefest",
      description:
        "AI Hirefest gives you the exclusive opportunity to get interviewed by AI and start working as a remote developer with global companies over the weekend.",
      image: "/images/remotebase-hirefest.png",
      tags: ["Next js", "HTML", "CSS", "Tailwind"],
      liveLink: "https://hirefest.remotebase.com/",
    },
    {
      id: 6,
      title: "Hackfest",
      description:
        "Think you have what it takes to build the next big AI-powered innovation? Compete in an intense 3-day hackathon, collaborate with top minds, and race against time to create groundbreaking AI applications.",
      image: "/images/remotebase-hackfest.png",
      tags: ["Next js", "HTML", "CSS"],
      liveLink: "https://hackfest.remotebase.com/",
    },
  ];

  return (
    <section id="projects" className="py-20 md:pb-[100px] md:pt-[100px] bg-gray-50">
      <div className="w-full max-w-[1264px] px-8 mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl text-gray-900 font-bold mb-6">Projects</h3>
          <p className="text-base text-[#828282] mb-5 max-w-[420px] mx-auto">
            Here are some of my recent projects. Each one was built to solve a
            specific problem or explore new technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#132238] mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-[#556070] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-600 text-emerald-800 dark:text-emerald-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
