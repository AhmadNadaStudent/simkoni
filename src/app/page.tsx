import SearchBar from "@/components/SearchBar";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 pt-12 sm:pt-20">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline tracking-tight text-foreground/90">
          <img src="/Simkoni_Mainlogo.svg" alt="SIMKONI" className="h-20 mx-auto" />
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Sistem Informasi Manajemen Kosakata dan Notasi Islam.
          <br />
          Alat bantu untuk mendukung proses pengatalogan bahan pustaka.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <Suspense fallback={null}>
          <SearchBar />
        </Suspense>
      </div>
    </div>
  );
}
