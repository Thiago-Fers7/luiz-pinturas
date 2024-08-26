import Image from "next/image";
import { useEffect } from "react";

export function About() {

  return (
    <section className="max-w-screen-xl mx-auto px-5 py-10 lg:px-7">
      <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
        🎨 Sobre
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-2/3 space-y-2 text-slate-600">
          <p className="font-bold mt-2 mb-4">"Comprometimento, Qualidade e Paixão por Detalhes"</p>

          <p>
            Nossa empresa é o reflexo do trabalho de um profissional dedicado, apaixonado pela arte de transformar ambientes através da pintura. Com anos de experiência no mercado, ofereço serviços personalizados, garantindo que cada projeto receba o cuidado e a atenção que merece.
          </p>

          <p>
            Desde a escolha das cores até o acabamento final, estou presente em cada etapa, assegurando que o resultado supere as expectativas. Acredito que a confiança é construída através da transparência, do diálogo aberto com o cliente e do compromisso com prazos e qualidade. Cada parede, cada detalhe, é tratado com o máximo de profissionalismo e carinho, porque sua satisfação é a minha prioridade.
          </p>

          <p>
            Aqui, você não encontra apenas um serviço, mas um parceiro para transformar seu espaço em um lugar que realmente reflete quem você é.
          </p>

          {/* <strong className="text-4xl">fazer animação de rolo para os títulos das seções</strong> */}
        </div>

        <div className="flex-1">
          <div className="bg-slate-100 shadow border border-gray-200 rounded-lg w-[300px] p-5">
            <Image src="/images/foto-luiz.png" alt="teste" width={200} height={200} className="w-full h-52 object-cover rounded-lg" />

            <div className="">
              <h2 className="mt-4 text-xl font-bold text-slate-900 leading-5">José Luiz</h2>
              <span className="font-semibold text-slate-400 text-xs italic">
                Pintor Profissional e Fundador
              </span>

              <p className="font-normal text-slate-700 text-sm mt-2">
                José Luiz é o coração da empresa. Com mais de 30 anos de experiência,
                ele combina técnica, precisão e velocidade em cada projeto.
                Seu compromisso com a excelência garante que cada projeto, seja grande ou pequeno seja concluído com eficiência e qualidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}