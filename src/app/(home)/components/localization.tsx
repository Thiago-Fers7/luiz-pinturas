import { Button } from "@/components/button";
import Image from "next/image";

export function Localization() {
  return (
    <section className="mx-auto max-w-screen-xl px-5 py-10 lg:px-7">
      <h1 className="inline-block text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">
        🎨 Áreas Atendidas
      </h1>

      <p className="mb-1 mt-2 text-slate-500">
        Atendemos em diversas regiões, principalmente em Mairiporã e Atibaia.
      </p>

      <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
        <div className="w-full lg:w-3/5">
          <Image
            src="/images/regiao-de-atendimento-mapa.png"
            alt="mapa"
            quality={100}
            width={800}
            height={600}
            className="w-full  rounded-lg"
          />
        </div>

        <div className="flex-1 text-slate-600">
          <h2 className="text-lg font-semibold text-slate-900">
            Areas atendidas
          </h2>

          <ul className="mt-2 max-w-md list-inside list-disc space-y-1">
            <li>
              <strong className="font-normal">Mairiporã 📌</strong>
            </li>
            <li>
              <strong className="font-normal">Atibaia 📌</strong>
            </li>
            <li>
              <strong className="font-normal">Bragança Paulista 📌</strong>
            </li>
            <li>
              <strong className="font-normal">Regiões próximas</strong>
            </li>
          </ul>

          <p className="my-4">
            Se você está em uma cidade próxima, entre em contato para saber mais
            sobre a disponibilidade de atendimento.
          </p>

          <Button
            type="button"
            size="lg"
            enphasis="high"
            className="mb-4 text-nowrap"
          >
            Entrar em contato
          </Button>

          <p className="mt-auto">
            Nosso objetivo é levar a nossa expertise em pintura para o maior
            número de pessoas possível, transformando ambientes e criando
            espaços que refletem a personalidade e o estilo de cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
}
