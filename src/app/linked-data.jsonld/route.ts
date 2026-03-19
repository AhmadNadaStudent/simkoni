import { simkoniLinkedData } from "@/lib/data";

export const dynamic = "force-static";

export function GET() {
  return new Response(JSON.stringify(simkoniLinkedData, null, 2), {
    headers: {
      "Content-Type": "application/ld+json; charset=utf-8",
    },
  });
}
