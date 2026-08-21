export default function Work({ projects, onOpenProject }) {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 pb-24 md:px-12 md:pb-40">
      <div className="mb-12 flex items-end justify-between md:mb-16">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Selected work
        </h2>
        <span className="hidden text-sm text-muted-foreground md:inline">
          {projects.length} projects
        </span>
      </div>

      <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => onOpenProject(project.id)}
            aria-label={`Open case study: ${project.title}`}
            className="group relative block w-full break-inside-avoid cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-colors hover:border-primary/40 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted">
              {project.cover ? (
                <img
                  src={project.cover.src}
                  alt={project.cover.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl font-bold text-primary/20 md:text-6xl">
                      {project.title[0]}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                      Image coming soon
                    </span>
                  </div>
                </>
              )}
            </div>
            <div className="mt-6">
              <div className="mb-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-card-foreground transition-colors group-hover:text-primary md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.category}
              </p>
              <span className="mt-4 inline-flex text-sm font-semibold text-primary">
                View →
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
