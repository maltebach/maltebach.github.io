import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog.tsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel.tsx";

export default function ProjectModal({ project, onClose }) {
  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
        {project && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-3xl font-bold tracking-tight">
                {project.title}
              </DialogTitle>
              <DialogDescription>{project.category}</DialogDescription>
            </DialogHeader>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {(project.gallery || project.cover) && (
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {[...(project.cover ? [project.cover] : []), ...(project.gallery ?? [])].map((img) => (
                    <CarouselItem key={img.src}>
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="aspect-[16/10] w-full rounded-xl object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            )}

            {project.video && (
              <video
                src={project.video.src}
                poster={project.video.poster}
                controls
                playsInline
                preload="metadata"
                className="mt-4 aspect-video w-full rounded-xl bg-muted"
              />
            )}

            {project.description ? (
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {project.description.split("\n\n").map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Full case study coming soon.
              </p>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
