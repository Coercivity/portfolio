import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Roll GO",
    description: "Interactive movie selection platform",
    tags: ["C#", "ASP NET", "EF Core"],
    image: "../assets/test.jpg",
    repositoryLink: "https://github.com/Coercivity/RollGO",
  },
];

export default function Projects({ id }: { id: string }) {
  return (
    <section id={id} className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="text-cyan-400">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
