import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "#AlémDoAgora — O lado da carreira que as redes sociais não mostram",
  description:
    "Uma reflexão sobre trabalho, estudos, comparação e a construção de uma carreira em tecnologia.",
  icons: { icon: "/marca.png" },
  openGraph: {
    title: "#AlémDoAgora",
    description: "O lado da carreira que as redes sociais não mostram.",
    type: "article",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
