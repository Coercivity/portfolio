import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  repositoryLink?: string;
  liveLink?: string;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  image,
  repositoryLink,
  liveLink,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm text-cyan-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {repositoryLink && (
            <a
              href={repositoryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <FiGithub className="mr-1" /> Code
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <FiExternalLink className="mr-1" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
