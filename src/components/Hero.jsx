export default function Hero() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-12 md:pb-32 md:pt-20">
      <div className="max-w-4xl">
        <p className="mb-6 font-display text-sm font-medium uppercase tracking-widest text-primary">
          Experience & Interaction Designer
        </p>
        <h1 className="text-balance font-sans text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Malte Bach Hansen{" "} <br />
          <span className="text-muted-foreground">Portfolio</span>
        </h1>
        <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
          I design interactive experiences where storytelling, technology, and physical space come together. <br />
          From early concepts and prototypes to tangible, engaging experiences.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            View work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition-colors hover:bg-accent"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
