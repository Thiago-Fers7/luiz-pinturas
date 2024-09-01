import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { Services } from "./components/services";
import { About } from "./components/about";

export default function Home() {
  return (
    <>
      <div className="animate-slidein300 opacity-0">
        <Header />
      </div>

      <main className="w-full h-full pt-16 sm:pt-24 lg:pt-32">
        <section className="max-w-screen-xl mx-auto px-5 lg:px-7">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center animate-slidein300 opacity-0">
            Transforme seu espaço com a nossa expertise em pintura!
          </h1>

          <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto animate-slidein500 opacity-0">
            Especialistas em pintura para casas, escritórios e ambientes comerciais,
            garantindo um acabamento impecável.
          </p>

          <div className="mt-10 flex justify-center gap-x-5 animate-slidein700 opacity-0">
            <Button
              type="button"
              size="lg"
              enphasis="high"
              className="text-nowrap"
            >
              Orçamento
            </Button>

            <Button
              type="button"
              size="lg"
              enphasis="medium"
              className="text-nowrap"
            >
              Saiba mais
            </Button>
          </div>
        </section>

        <section className="max-w-3xl mx-auto mt-20 sm:mt-24 lg:mt-32 px-5 items-center justify-center flex flex-col-reverse md:flex-row animate-slidein700 opacity-0">
          <div className="rounded-md h-44 w-11/12 md:w-80 bg-red-400 -translate-y-9 md:-translate-y-0 md:translate-x-9 bg-[url('/images/homem-pintando-parede.jpg')] bg-center bg-cover"></div>
          <div className="rounded-md h-80 w-full md:w-96 md:h-96 bg-blue-200 bg-[url('/images/rolo-de-tinta-e-pinceis.jpg')] bg-center bg-cover"></div>
        </section>

        <Services />

        <About />

        <Localization />

        <section className="mb-72" />
      </main>
    </>
  );
}
