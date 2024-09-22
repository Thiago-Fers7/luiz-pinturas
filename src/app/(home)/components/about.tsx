import { SectionContainer } from "@/components/section-container";
import { SectionTitle } from "@/components/section-title";
import Image from "next/image";

export function About() {
  return (
    <div className="border-t-2 border-gray-100">
      <SectionContainer id="about">
        <SectionTitle>Sobre</SectionTitle>

        <div className="flex w-full flex-col gap-10 md:flex-row">
          <div className="w-full space-y-2 text-slate-600 md:w-2/3">
            <p className="mb-4 mt-2 font-bold">
              "Comprometimento, Qualidade e Paixão por Detalhes"
            </p>

            <p>
              Nossa empresa é o reflexo do trabalho de um profissional dedicado,
              apaixonado pela arte de transformar ambientes através da pintura.
              Com anos de experiência no mercado, ofereço serviços
              personalizados, garantindo que cada projeto receba o cuidado e a
              atenção que merece.
            </p>

            <p>
              Desde a escolha das cores até o acabamento final, estou presente
              em cada etapa, assegurando que o resultado supere as expectativas.
              Acredito que a confiança é construída através da transparência, do
              diálogo aberto com o cliente e do compromisso com prazos e
              qualidade. Cada parede, cada detalhe, é tratado com o máximo de
              profissionalismo e carinho, porque sua satisfação é a minha
              prioridade.
            </p>

            <p>
              Aqui, você não encontra apenas um serviço, mas um parceiro para
              transformar seu espaço em um lugar que realmente reflete quem você
              é.
            </p>
          </div>

          <div className="flex-1">
            <div className="w-[300px] rounded-lg border border-gray-200 bg-slate-100 p-5 shadow">
              <Image
                src="/images/foto-luiz.png"
                alt="teste"
                width={200}
                height={200}
                className="h-52 w-full rounded-lg object-cover"
              />

              <div className="">
                <h2 className="mt-4 text-xl font-bold leading-5 text-slate-900">
                  José Luiz
                </h2>
                <span className="text-xs font-semibold italic text-slate-400">
                  Pintor Profissional e Fundador
                </span>

                <p className="mt-2 text-sm font-normal text-slate-700">
                  José Luiz é o coração da empresa. Com mais de 30 anos de
                  experiência, ele combina técnica, precisão e velocidade em
                  cada projeto. Seu compromisso com a excelência garante que
                  cada projeto, seja grande ou pequeno seja concluído com
                  eficiência e qualidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
