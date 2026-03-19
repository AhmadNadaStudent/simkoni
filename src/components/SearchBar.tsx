"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/results?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-4xl items-center space-x-2">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          name="q"
          placeholder="Cari kosakata, notasi..."
          title="Cari berdasarkan kosakata, notasi (contoh: zakat, 297.), atau subjek (contoh: puasa)"
          className="pl-10 h-12 text-base bg-transparent placeholder:text-muted-foreground"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Cari kosakata, notasi, atau subjek. Contoh: zakat, 297., puasa"
        />
      </div>
      <Button type="submit" size="lg" className="h-12 bg-primary/90 hover:bg-primary text-primary-foreground shadow-sm">
        Cari
      </Button>
    </form>
  );
}
