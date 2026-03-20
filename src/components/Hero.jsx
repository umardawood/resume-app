import { ArrowRight } from "lucide-react";

const Hero = () => {
  const aboutItems = [
    { title: "9+", para: "Years Experience" },
    { title: "20+", para: "Projects Completed" },
    { title: "20+", para: "Happy Clients" },
  ];
  
  return (
    <div id="about" className="bg-white pt-20 lg:pb-20 lg:pt-[100px] relative overflow-hidden">
      <div className="w-full max-w-[1264px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row md:justify-between items-center gap-6">
          <div className="w-full lg:max-w-[550px]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2] mb-5">
              Hello, I'm
              <br /> Umar Dawood
            </h2>
            <p className="text-lg text-[#828282] mb-8 max-w-lg">
              I'm a Frontend Developer with 9+ years of experience building responsive
               and user-friendly web interfaces from Figma, and other
                design tools. Highly skilled in HTML, CSS, Tailwind CSS, and
                 responsive design with strong focus on performance, accessibility,
                  and cross-browser compatibility.
              <span className="flex">
                Expanding expertise in modern
                   frontend development using JavaScript and React.js,
                    with hands-on experience in building component-based UI,
                     working with props, state, and React hooks to create
                      interactive web applications.
              </span>
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/umar-dawood-84811913a/"
                className="px-6 py-3 border border-gray-300 hover:border-emerald-600 dark:hover:border-emerald-500 text-gray-900 rounded-lg transition-colors"
              >
                Linkedin
              </a>
            </div>
            <div className="flex flex-wrap text-center gap-1">
              {aboutItems.map((item) => (
                <div className="p-4 bg-[#EDD8FF] rounded-[2px] grow">
                  <h3 className="text-2xl font-bold text-gray-700">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-500">
                    {item.para}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/umar.jpg"
              alt="Bg Image"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center absolute inset-x-0 top-0 overflow-hidden pointer-events-none">
        <img
          src="/images/gradient-bg.svg"
          alt="Bg Image"
          className="max-w-full object-cover"
          width={3000}
          height={9400}
        />
        {/* <div className="absolute bottom-0">
              <img
                src="/images/umar.jpg"
                alt="Umar"
                className="max-w-full object-contain"
                width={450}
                height={600}
              />
            </div> */}
      </div>
    </div>
  );
};

export default Hero;
