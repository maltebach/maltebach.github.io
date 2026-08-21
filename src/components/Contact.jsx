export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 font-display text-sm font-medium uppercase tracking-widest text-primary">
              Let's talk
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-card-foreground md:text-5xl">
              Open for collaborations and curious projects.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <a
              href="mailto:malte-bach@hotmail.com"
              className="font-display text-2xl font-semibold text-foreground underline decoration-primary underline-offset-8 transition-colors hover:text-primary md:text-3xl"
            >
              malte-bach@hotmail.com
            </a>
            <div className="flex gap-6 text-sm font-medium text-muted-foreground">
              <a
                href="https://www.linkedin.com/in/malte-bach-hansen-b36607291"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
              {/*<a
                href="https://www.behance.net/maltebachhansen"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                Behance
              </a>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
