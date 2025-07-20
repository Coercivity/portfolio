import { motion } from "framer-motion";
import { FaMicrosoft, FaDocker, FaDatabase } from "react-icons/fa";
import { SiPostgresql, SiRedis, SiSharp, SiRabbitmq } from "react-icons/si";

const backendSkills = [
  { name: "C#", icon: <SiSharp className="text-blue-400" /> },
  { name: "ASP.NET", icon: <FaMicrosoft className="text-blue-600" /> },
  { name: "EF Core", icon: <FaDatabase className="text-green-400" /> },
  { name: "NHibernate", icon: <FaDatabase className="text-yellow-400" /> },
  { name: "Dapper", icon: <FaDatabase className="text-red-400" /> },
  { name: "SQL Server", icon: <FaDatabase className="text-gray-300" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "Redis", icon: <SiRedis className="text-red-500" /> },
  { name: "RabbitMQ", icon: <SiRabbitmq className="text-orange-500" /> },
];

const Skills = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-3 overflow-x-auto">
      <div className="flex justify-start space-x-2 px-2 w-max min-w-full">
        {backendSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="flex items-center px-2 py-1 rounded-full bg-gray-800 hover:bg-gray-700 whitespace-nowrap"
          >
            <span className="text-xs mr-1">{skill.icon}</span>
            <span className="text-xs text-gray-300">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
