import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookCheck, Target, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-2 md:space-y-4 lg:space-y-8 max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline">Tentang SIMKONI</h1>
        <p className="text-lg text-muted-foreground mt-2">Latar belakang, tujuan, dan status pengembangan.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
             <BookCheck className="w-6 h-6 text-accent" />
            <CardTitle>Latar Belakang</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              Pengatalogan bahan pustaka dengan subjek keislaman memerlukan pemahaman mendalam tentang terminologi dan struktur klasifikasi yang spesifik. Seringkali, pustakawan atau mahasiswa magang menghadapi tantangan dalam menentukan notasi yang paling tepat secara cepat dan konsisten. SIMKONI lahir dari kebutuhan akan sebuah alat bantu yang praktis untuk menjembatani kesenjangan ini.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <Target className="w-6 h-6 text-accent" />
            <CardTitle>Tujuan Proyek</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              Tujuan utama SIMKONI adalah menyediakan sistem pencarian kosakata dan notasi Islam yang cepat dan kontekstual. Dengan menyajikan tidak hanya notasi, tetapi juga konteks penggunaannya, sistem ini diharapkan dapat mempercepat proses pengambilan keputusan dan berfungsi sebagai media pembelajaran yang efektif.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
