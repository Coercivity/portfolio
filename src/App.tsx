import { Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.ts";
import Projects from "./components/Projects.tsx";
// import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience.tsx";

// import Contact from "./components/Contact";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Header />

        <main className="container mx-auto px-4 py-8">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                Loading...
              </div>
            }
          >
            <Hero id="home" />
            {/*<About id="about" />*/}
            <Skills id="skills" />
            <Experience id="experience" />
            <Projects id="projects" />
            {/*<Contact id="contact" />*/}
          </Suspense>
        </main>

        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default App;
