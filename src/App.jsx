import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import ProjectModal from "./components/ProjectModal.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { projects } from "./data/projects.js";

function CursorRipples() {
  useEffect(() => {
    const handlePointerMove = (event) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      const ripple = document.createElement("span");
      ripple.className = "cursor-ripple";
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      document.body.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return <div className="cursor-ripple-layer" aria-hidden="true" />;
}

export default function App() {
  const [activeId, setActiveId] = useState(null);
  const active = projects.find((p) => p.id === activeId) ?? null;

  return (
    <div className="portfolio-shell min-h-screen bg-background text-foreground">
      <CursorRipples />
      <Header />
      <Hero />
      <Work projects={projects} onOpenProject={setActiveId} />
      <ProjectModal project={active} onClose={() => setActiveId(null)} />
      <Contact />
      <Footer />
    </div>
  );
}
