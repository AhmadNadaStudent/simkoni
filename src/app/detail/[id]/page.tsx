import { notFound } from "next/navigation";
import { simkoniData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/BackButton";

type DetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = await params;
  const item = simkoniData.find((d) => d.id.toString() === id);

  if (!item) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto space-y-2 md:space-y-3 lg:space-y-4">
      <div className="flex items-center">
        <BackButton />
      </div>
      <Card className="bg-card/60 backdrop-blur-sm border-border/60">
        <CardHeader>
          <div className="flex justify-between items-start gap-4 flex-wrap">
            <div>
              <Link href={`/results?q=${encodeURIComponent(item.kategori)}`} className="inline-flex p-0">
                <Badge variant="outline" className="cursor-pointer">{item.kategori}</Badge>
              </Link>
              <CardTitle className="mt-2 text-3xl md:text-4xl font-headline">{item.kosakata}</CardTitle>
            </div>
            <p className="text-2xl md:text-3xl font-mono text-primary font-bold whitespace-nowrap pt-2">{item.notasi}</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Separator />
          <div>
            <h3 className="text-lg font-semibold mb-2">Konteks Penggunaan</h3>
            <p className="text-muted-foreground leading-relaxed">{item.konteks}</p>
          </div>
          
          {item.catatan && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Catatan Pengatalogan</h3>
              <Alert>
                <AlertTitle>Catatan</AlertTitle>
                <AlertDescription className="italic text-muted-foreground">{item.catatan}</AlertDescription>
              </Alert>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold mb-2">Kata Kunci Terkait</h3>
            <div className="flex flex-wrap gap-2">
              {item.keyword.map((k) => (
                <Button key={k} variant="secondary" size="sm" asChild>
                  <Link href={`/results?q=${encodeURIComponent(k)}`}>{k}</Link>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
