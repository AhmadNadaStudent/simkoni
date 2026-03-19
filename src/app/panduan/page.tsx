import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, StepForward } from "lucide-react";

export default function GuidePage() {
  return (
    <div className="space-y-2 md:space-y-4 lg:space-y-8 max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline">Panduan Penggunaan</h1>
        <p className="text-lg text-muted-foreground mt-2">Cara kerja dan batasan sistem SIMKONI.</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center gap-3">
          <StepForward className="w-6 h-6 text-primary" />
          <CardTitle>Alur Penggunaan SIMKONI</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            SIMKONI dirancang untuk membantu pustakawan dan mahasiswa magang dalam menentukan notasi klasifikasi untuk bahan pustaka bertema Islam.
          </p>
          <ol className="list-decimal list-inside space-y-3 pl-2">
            <li>
              <strong>Mulai Pencarian:</strong> Gunakan kotak pencarian di halaman utama untuk memasukkan kata kunci. Anda bisa mencari berdasarkan topik (e.g., "wakaf"), notasi (e.g., "297.3"), atau kategori (e.g., "Fiqh").
            </li>
            <li>
              <strong>Tinjau Hasil:</strong> Halaman hasil akan menampilkan daftar kosakata yang cocok dengan pencarian Anda. Setiap kartu hasil menampilkan kosakata, notasi, ringkasan konteks, dan subjek.
            </li>
            <li>
              <strong>Lihat Detail:</strong> Klik pada salah satu kartu hasil untuk melihat penjelasan yang lebih mendalam, termasuk konteks penggunaan yang lebih lengkap dan catatan khusus untuk pengatalogan.
            </li>
            <li>
              <strong>Gunakan sebagai Alat Bantu:</strong> Gunakan informasi notasi dan konteks sebagai referensi atau alat bantu pengambilan keputusan dalam proses pengatalogan Anda.
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
