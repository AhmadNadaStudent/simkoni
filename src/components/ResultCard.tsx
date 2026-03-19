import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { KosakataIslam } from "@/lib/types";

interface ResultCardProps {
  item: KosakataIslam;
}

export default function ResultCard({ item }: ResultCardProps) {
  return (
    <Link href={`/detail/${item.id}`} className="h-full block group">
      <Card className="h-full flex flex-col bg-card/60 backdrop-blur-sm border-border/60 hover:border-primary/40 hover:bg-card/80 hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle className="font-headline group-hover:text-primary transition-colors">{item.kosakata}</CardTitle>
          <CardDescription className="font-mono text-sm md:text-base text-primary font-semibold pt-1">{item.notasi}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3">{item.konteks}</p>
        </CardContent>
        <CardFooter>
          <Badge variant="secondary">{item.kategori}</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
