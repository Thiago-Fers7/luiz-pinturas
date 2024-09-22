import { Pin } from "@/assets/icons/pin";
import { WhatsAppIcon } from "@/assets/icons/whatsapp";
import { Button } from "@/components/button";
import { SectionContainer } from "@/components/section-container";
import { SectionTitle } from "@/components/section-title";
import Image from "next/image";
import Link from "next/link";

export function Localization() {
  return (
    <div className="border-t-2 border-gray-100">
      <SectionContainer id="localization">
        <SectionTitle>Localização</SectionTitle>

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
              Áreas atendidas
            </h2>

            <ul className="mt-2 max-w-md list-inside list-disc space-y-1">
              <li>
                <strong className="inline-flex items-center gap-2 font-normal">
                  Mairiporã
                  <Pin
                    width="1.2rem"
                    height="1.2rem"
                    className="text-red-500"
                  />
                </strong>
              </li>
              <li>
                <strong className="inline-flex items-center gap-2 font-normal">
                  Atibaia{" "}
                  <Pin
                    width="1.2rem"
                    height="1.2rem"
                    className="text-red-500"
                  />
                </strong>
              </li>
              <li>
                <strong className="inline-flex items-center gap-2 font-normal">
                  Bragança Paulista{" "}
                  <Pin
                    width="1.2rem"
                    height="1.2rem"
                    className="text-red-500"
                  />
                </strong>
              </li>
              <li>
                <strong className="font-normal">Regiões próximas</strong>
              </li>
            </ul>

            <p className="my-4">
              Se você está em uma cidade próxima, entre em contato para saber
              mais sobre a disponibilidade de atendimento.
            </p>

            <Link href="https://wa.me/5511995861460" target="_blank">
              <Button type="button" size="lg" enphasis="high">
                <span className="flex items-center gap-2">
                  Entre em contato
                  <WhatsAppIcon width="1rem" height="1rem" />
                </span>
              </Button>
            </Link>

            <p className="mt-4">
              Nosso objetivo é levar a nossa expertise em pintura para o maior
              número de pessoas possível, transformando ambientes e criando
              espaços que refletem a personalidade e o estilo de cada cliente.
            </p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
