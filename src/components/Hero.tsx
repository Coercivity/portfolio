import { useTranslation } from "react-i18next";

export default function Hero({ id }: { id: string }) {
  const { t } = useTranslation();

  return (
    <section id={id} className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          {t("hero.title", { name: "Evgeny Shevelin" })}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          {t("hero.subtitle")}
        </h2>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-md">
            {t("hero.viewProjects")}
          </button>
          <button className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-md">
            {t("hero.contactMe")}
          </button>
        </div>
      </div>
    </section>
  );
}
