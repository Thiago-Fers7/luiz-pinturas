import { Button } from "@/components/button";
import { Header } from "@/components/header";
import Link from "next/link";
import { WhatsAppIcon } from "@/assets/icons/whatsapp";
import { Suspense } from "react";
import { Services } from "./components/services";
import { About } from "./components/about";
import { Localization } from "./components/localization";
import { Gallery } from "./components/gallery";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <div className="animate-slidein300 opacity-0">
        <Header />
      </div>

      <main className="size-full pt-16 sm:pt-24 lg:pt-32">
        <section className="mx-auto max-w-screen-xl px-5 lg:px-7">
          <h1 className="animate-slidein300 text-center text-4xl font-extrabold tracking-tight text-slate-900 opacity-0 sm:text-5xl lg:text-6xl">
            Eleve o visual do seu espaço com nosso serviço especializado em
            pintura!
          </h1>

          <h2 className="mx-auto mt-6 max-w-3xl animate-slidein500 text-center text-base text-slate-600 opacity-0 md:text-lg">
            Especialistas em pintura para casas, escritórios e ambientes
            comerciais, garantindo um acabamento impecável com preços acessíveis
            e justos para todos os clientes.
          </h2>

          <strong className="mx-auto mt-6 block max-w-3xl animate-slidein500 text-center text-sm font-normal text-slate-500 opacity-0">
            Mairiporã, Atibaia, Bragança Paulista e região.
          </strong>

          <p className="mx-auto max-w-3xl animate-slidein500 text-center text-sm font-normal text-slate-500 opacity-0">
            Telefone: (11) 99586-1460
          </p>

          <div className="mt-10 flex animate-slidein700 justify-center gap-x-5 opacity-0">
            <Link href="https://wa.me/5511995861460" target="_blank">
              <Button
                type="button"
                size="lg"
                enphasis="high"
                className="text-nowrap"
              >
                <span className="flex items-center gap-2">
                  Orçamento
                  <WhatsAppIcon width="1rem" height="1rem" />
                </span>
              </Button>
            </Link>

            <Link href="/#about">
              <Button
                type="button"
                size="lg"
                enphasis="medium"
                className="text-nowrap"
              >
                Saiba mais
              </Button>
            </Link>
          </div>
        </section>

        <div className="animate-slidein700 opacity-0">
          <Suspense>
            <Gallery />
          </Suspense>
        </div>
        <Services />

        <Localization />

        <About />

        <Footer />
      </main>
    </>
  );
}
