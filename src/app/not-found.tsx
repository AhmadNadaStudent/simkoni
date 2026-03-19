import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 pt-12">
      <FileQuestion className="h-24 w-24 text-muted-foreground/50" />
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">404 - Halaman Tidak Ditemukan</h1>
        <p className="text-muted-foreground">
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>
      </div>
      <Button asChild>
        <Link href="/">Kembali ke Halaman Utama</Link>
      </Button>
    </div>
  );
}
