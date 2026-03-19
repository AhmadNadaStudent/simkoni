"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ children = "Kembali" }: { children?: React.ReactNode }) {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => router.back()}
      className="gap-2 text-muted-foreground hover:text-foreground"
    >
      <ArrowLeft className="h-4 w-4" />
      {children}
    </Button>
  );
}
