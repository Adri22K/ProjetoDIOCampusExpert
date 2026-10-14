
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "#AlémDoAgora",
  description: "O lado da carreira que as redes sociais não mostram.",
  openGraph: {
    title: "#AlémDoAgora",
    description: "O lado da carreira que as redes sociais não mostram.",
    type: "article",
  },
  icons: {
    icon: "/marca.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
