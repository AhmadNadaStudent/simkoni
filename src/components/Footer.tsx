import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-card/30 backdrop-blur-md border-t border-border/60">
      <Separator />
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm">
        <p>&copy; {year} SIMKONI. Sistem Informasi Manajemen Kosakata dan Notasi Islam.</p>
      </div>
    </footer>
  );
}
