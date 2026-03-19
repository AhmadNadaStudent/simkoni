import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Button
            variant="ghost"
            asChild
            className="px-2 text-xl font-bold text-foreground/90 hover:text-foreground"
          >
            <Link href="/" className="flex items-center gap-2">
              <img src="/Simkoni_Mainlogo.svg" alt="SIMKONI" className="h-4 w-auto" />
            </Link>
          </Button>
          <nav className="flex items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm font-medium">
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
              <Link href="/">Pencarian</Link>
            </Button>
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
              <Link href="/panduan">Panduan</Link>
            </Button>
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
              <Link href="/tentang">Tentang</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
