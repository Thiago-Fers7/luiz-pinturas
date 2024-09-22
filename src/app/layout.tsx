import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Luiz Pinturas",
    default: "Luiz Pinturas",
  },
  description:
    "Especialistas em pintura para casas, escritórios e ambientes comerciais em Atibaia, Mairiporã, Bragança Paulista e regiões próximas. Qualidade, preço acessível e acabamento impecável.",
  keywords: [
    "pintura",
    "pintura residencial",
    "pintura comercial",
    "Atibaia",
    "Mairiporã",
    "Bragança Paulista",
    "pintura de qualidade",
    "serviços de pintura",
    "pintor profissional",
  ],
  robots: "follow, index",
  creator: "Luiz Thiago",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
