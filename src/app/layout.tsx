import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Pintura Residencial em %s | Luiz Pinturas",
    default: "Luiz Pinturas | Especialistas em Pintura Residencial",
  },
  metadataBase: new URL("https://www.luizpinturas.com/"),
  description:
    "Transforme sua casa ou empresa com os melhores serviços de pintura em Atibaia, Mairiporã e Bragança Paulista. Garantimos qualidade, preço justo e acabamento impecável. Solicite seu orçamento agora!",
  keywords: [
    "pintura residencial em Atibaia",
    "melhores pintores em Mairiporã",
    "pintura comercial em Bragança Paulista",
    "pintura de qualidade SP",
    "acabamento impecável",
    "pintor profissional Atibaia",
    "pintura de interiores e exteriores",
    "orçamento pintura Atibaia",
  ],
  verification: {
    google: "wOf6meZyecfWeeaaSNz2d_g3JibDKBh9cEXg310dQp4",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  creator: "Luiz Thiago",
  openGraph: {
    type: "website",
    title: "Luiz Pinturas | Transforme Seu Espaço com Qualidade",
    description:
      "Especialistas em pintura residencial e comercial. Serviços em Atibaia, Mairiporã, Bragança Paulista e região. Acabamento impecável, garantia de qualidade!",
    url: "https://www.luizpinturas.com/",
    images: [
      {
        url: "https://www.luizpinturas.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Luiz Pinturas",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
