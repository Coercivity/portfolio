import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface HeroProps {
  id: string;
  name?: string;
}

const Hero: React.FC<HeroProps> = ({ id, name = "Evgeny Shevelin" }) => {
  const { t } = useTranslation();

  return (
    <section
      id={id}
      className="min-h-[20vh] flex items-center justify-center px-4 py-12"
    >
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl text-gray-300 mb-4">
            {t("hero.title", { name })} .NET Developer
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3"
        >
          <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md text-sm">
            View Projects
          </button>
          <button className="px-4 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-md text-sm">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
