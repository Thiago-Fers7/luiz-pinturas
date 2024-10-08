import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Luiz Pinturas",
    default: "Luiz Pinturas",
  },
  metadataBase: new URL("https://luiz-pinturas.netlify.app/"),
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
  verification: {
    google: "wOf6meZyecfWeeaaSNz2d_g3JibDKBh9cEXg310dQp4",
  },
  robots: "follow, index",
  creator: "Luiz Thiago",
  openGraph: {
    images: [
      {
        url: "https://luiz-pinturas.netlify.app/opengraph-image.png",
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
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
