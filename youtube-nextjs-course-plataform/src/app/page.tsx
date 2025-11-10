import { Card } from "@/components/card/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codarse - Página Inicial",
};

export default function PageHome() {
  return (
    <div>
      <main>
        <Card />
      </main>
    </div>
  );
}
