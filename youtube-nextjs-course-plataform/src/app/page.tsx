import { Section } from "@/components/section/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codarse - Página Inicial",
};

export default function PageHome() {
  return (
    <div>
      <main>
        <Section />
      </main>
    </div>
  );
}
