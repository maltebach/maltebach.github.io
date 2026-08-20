import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import ProjectModal from "./components/ProjectModal.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { projects } from "./data/projects.js";

export default function App() {
  const [activeId, setActiveId] = useState(null);
  const active = projects.find((p) => p.id === activeId) ?? null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Work projects={projects} onOpenProject={setActiveId} />
      <ProjectModal project={active} onClose={() => setActiveId(null)} />
      <Contact />
      <Footer />
    </div>
  );
}
