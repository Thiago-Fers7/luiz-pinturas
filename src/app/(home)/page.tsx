import { Button } from "@/components/button";
import { Header } from "@/components/header";
import Link from "next/link";
import { WhatsAppIcon } from "@/assets/icons/WhatsAppIcon";
import { Services } from "./components/services";
import { About } from "./components/about";
import { Localization } from "./components/localization";

export default function Home() {
  return (
    <>
      <div className="animate-slidein300 opacity-0">
        <Header />
      </div>

      <main className="size-full pt-16 sm:pt-24 lg:pt-32">
        <section className="mx-auto max-w-screen-xl px-5 lg:px-7">
          <h1 className="animate-slidein300 text-center text-4xl font-extrabold tracking-tight text-slate-900 opacity-0 sm:text-5xl lg:text-6xl">
            Transforme seu espaço com a nossa expertise em pintura!
          </h1>

          <p className="mx-auto mt-6 max-w-3xl animate-slidein500 text-center text-lg text-slate-600 opacity-0">
            Especialistas em pintura para casas, escritórios e ambientes
            comerciais, garantindo um acabamento impecável.
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

        <section className="mx-auto mt-20 flex max-w-3xl animate-slidein700 flex-col-reverse items-center justify-center px-5 opacity-0 sm:mt-24 md:flex-row lg:mt-32">
          <div className="h-44 w-11/12 -translate-y-9 rounded-md bg-red-400 bg-[url('/images/homem-pintando-parede.jpg')] bg-cover bg-center md:w-80 md:-translate-y-0 md:translate-x-9" />
          <div className="h-80 w-full rounded-md bg-blue-200 bg-[url('/images/rolo-de-tinta-e-pinceis.jpg')] bg-cover bg-center md:size-96" />
        </section>

        <Services />

        <Localization />

        <About />

        <section className="mb-72" />
      </main>
    </>
  );
}
