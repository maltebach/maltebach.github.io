export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-8 text-sm text-muted-foreground md:px-12">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Malte Bach Hansen. All rights reserved.</p>
      </div>
    </footer>
  );
}
