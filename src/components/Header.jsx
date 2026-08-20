export default function Header() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 md:px-12 md:py-10">
      <a href="#top" className="font-display text-lg font-semibold tracking-tight text-foreground">
        Malte Bach Hansen
      </a>
      <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
        <a href="#work" className="text-muted-foreground transition-colors hover:text-foreground">
          Work
        </a>
        <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground">
          About
        </a>
        <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">
          Contact
        </a>
      </nav>
    </header>
  );
}
