import { simkoniData } from "@/lib/data";
import ResultCard from "@/components/ResultCard";
import SearchBar from "@/components/SearchBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

type SearchResultsPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchResultsPage({ searchParams }: SearchResultsPageProps) {
  const { q } = await searchParams;
  const query = q || "";
  const lowerCaseQuery = query.toLowerCase().trim();

  const results = lowerCaseQuery
    ? simkoniData.filter(
        (item) =>
          item.kosakata.toLowerCase().includes(lowerCaseQuery) ||
          item.notasi.toLowerCase().includes(lowerCaseQuery) ||
          item.kategori.toLowerCase().includes(lowerCaseQuery) ||
          item.keyword.some((k) => k.toLowerCase().includes(lowerCaseQuery))
      )
    : [];

  return (
    <div className="space-y-3 md:space-y-4 lg:space-y-6">
      <Suspense fallback={null}>
        <SearchBar />
      </Suspense>
      <h1 className="text-3xl font-bold font-headline">Hasil Pencarian</h1>
      <p className="text-muted-foreground">
        {results.length} hasil ditemukan untuk: <span className="font-semibold text-foreground">"{ query}"</span>
      </p>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          {results.map((item) => (
            <ResultCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <Card className="text-center py-12">
          <CardHeader>
            <CardTitle>Hasil Tidak Ditemukan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Maaf, kami tidak dapat menemukan hasil untuk pencarian Anda.
              <br />
              Coba gunakan kata kunci yang berbeda.
            </p>
            <Button asChild>
              <Link href="/">Kembali ke Pencarian</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
