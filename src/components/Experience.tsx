import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiBriefcase } from "react-icons/fi";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceProps {
  id: string;
  className?: string;
}

const Experience: React.FC<ExperienceProps> = ({ id, className = "" }) => {
  const { t } = useTranslation();

  const experiences: ExperienceItem[] = [
    {
      role: t("experience.spectec.role"),
      company: t("experience.spectec.company"),
      period: t("experience.spectec.period"),
      description: t("experience.spectec.description"),
    },
  ];

  return (
    <section id={id} className={`py-12 ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          {t("experience.title")}
        </h2>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gray-700 before:via-cyan-500 before:to-gray-700">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={`exp-${index}`}
              experience={exp}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay: index * 0.15 }}
    className="relative pl-10"
  >
    <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500 text-white">
      <FiBriefcase size={14} />
    </div>
    <div className="bg-gray-800 p-5 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{experience.role}</h3>
      <div className="flex flex-wrap items-center text-sm text-gray-400 mb-2">
        <span>{experience.company}</span>
        <span className="mx-2">•</span>
        <span>{experience.period}</span>
      </div>
      <p className="text-gray-300 text-sm">{experience.description}</p>
    </div>
  </motion.div>
);

export default React.memo(Experience);
