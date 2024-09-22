import { SectionContainer } from "@/components/section-container";
import { SectionTitle } from "@/components/section-title";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Pintura Comum (Látex ou Acrílica)",
    descriptions: [
      "Pintura de paredes e tetos com tinta látex ou acrílica.",
      "Aplicação de massa corrida e lixamento.",
      "Pintura de portas e janelas.",
    ],
    image: "/images/pintura-comum.jpg",
    alt: "Pintura comum",
  },
  {
    id: 2,
    title: "Pintura de Fachadas",
    descriptions: [
      "Pintura de fachadas de casas e prédios.",
      "Pintura de muros e grades.",
      "Pintura de portões e portas de garagem.",
    ],
    image: "/images/pintura-fachadas.png",
    alt: "Pintura de fachadas",
  },
  {
    id: 3,
    title: "Textura Projetada",
    descriptions: [
      "Aplicação de textura projetada em paredes.",
      "Acabamento uniforme e durável.",
      "Personalização de ambientes com diferentes padrões e relevos.",
    ],
    image: "/images/textura-projetada.jpg",
    alt: "Textura projetada",
  },
  {
    id: 4,
    title: "Pintura Esmalte",
    descriptions: [
      "Aplicação de tinta esmalte em portas, janelas, rodapés e outras superfícies de madeira ou metal",
      "Acabamento liso, brilhante ou acetinado, com alta resistência e fácil limpeza",
      "Proteção contra umidade e raios solares.",
    ],
    image: "/images/pintura-esmalte.png",
    alt: "Pintura esmalte",
  },
  {
    id: 5,
    title: "Pintura com Verniz",
    descriptions: [
      "Aplicação de verniz em portas, janelas, móveis e outras superfícies de madeira",
      "Acabamento transparente ou tingido, realçando a beleza da madeira",
      "Proteção contra umidade, raios solares e desgaste natural.",
    ],
    image: "/images/pintura-verniz.jpg",
    alt: "Pintura com verniz",
  },
  {
    id: 6,
    title: "Grafiato e Textura",
    descriptions: [
      "Aplicação de texturas decorativas em paredes.",
      "Acabamento rústico e moderno.",
      "Personalização de ambientes com diferentes padrões e relevos.",
    ],
    image: "/images/grafiato-textura.jpg",
    alt: "Grafiato e textura",
  },
];

export function Services() {
  return (
    <div className="border-t-2 border-gray-100">
      <SectionContainer id="services">
        <div className="pb-6">
          <SectionTitle>Serviços</SectionTitle>

          <p className="mt-2 max-w-3xl  text-slate-500">
            Transforme seu ambiente com nossos serviços de pintura! Oferecemos
            desde a clássica pintura comum até técnicas sofisticadas como
            grafiato e texturas decorativas. Seja para renovar sua casa,
            escritório ou fachada, garantimos um acabamento impecável e
            duradouro. Com opções que vão da pintura epóxi, ideal para garagens
            e áreas industriais, até a pintura com verniz, que realça a beleza
            da madeira. Escolha a cor, o estilo, e deixe o resto com a gente!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {services.map((service) => (
            <div key={service.id} className="w-[381px]">
              <div className="h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={400}
                  height={200}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5 pt-0">
                  <h2 className="mt-4 text-xl font-bold text-slate-900">
                    {service.title}
                  </h2>

                  <ul className="mt-4 space-y-2">
                    {service.descriptions.map((description) => (
                      <li
                        key={description}
                        className="font-normal leading-6 text-slate-700 before:mb-[3px] before:mr-1.5 before:inline-block before:size-1.5 before:rounded-full before:bg-slate-500"
                      >
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
