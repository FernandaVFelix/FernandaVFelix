import { Section } from "@/components/section/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codarse - Todos os Cursos",
};

export default function PageCursos() {
  return (
    <div>
      <main>
        <Section variant="grid" title="Todos os cursos" />
      </main>
    </div>
  );
}
