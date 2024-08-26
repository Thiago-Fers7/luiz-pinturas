import Image from "next/image"

const services = [
  {
    title: 'Pintura Comum (Látex ou Acrílica)',
    descriptions: [
      'Pintura de paredes e tetos com tinta látex ou acrílica.',
      'Aplicação de massa corrida e lixamento.',
      'Pintura de portas e janelas.'
    ],
    image: '/images/pintura-comum.jpg',
    alt: 'Pintura comum'
  },
  {
    title: 'Pintura de Fachadas',
    descriptions: [
      'Pintura de fachadas de casas e prédios.',
      'Pintura de muros e grades.',
      'Pintura de portões e portas de garagem.'
    ],
    image: '/images/pintura-fachadas.png',
    alt: 'Pintura de fachadas'
  },
  {
    title: 'Textura Projetada',
    descriptions: [
      'Aplicação de textura projetada em paredes.',
      'Acabamento uniforme e durável.',
      'Personalização de ambientes com diferentes padrões e relevos.'
    ],
    image: '/images/textura-projetada.jpg',
    alt: 'Textura projetada'
  },
  {
    title: 'Pintura Esmalte',
    descriptions: [
      'Aplicação de tinta esmalte em portas, janelas, rodapés e outras superfícies de madeira ou metal',
      'Acabamento liso, brilhante ou acetinado, com alta resistência e fácil limpeza',
      'Proteção contra umidade e raios solares.'
    ],
    image: '/images/pintura-esmalte.png',
    alt: 'Pintura esmalte'
  },
  {
    title: 'Pintura com Verniz',
    descriptions: [
      'Aplicação de verniz em portas, janelas, móveis e outras superfícies de madeira',
      'Acabamento transparente ou tingido, realçando a beleza da madeira',
      'Proteção contra umidade, raios solares e desgaste natural.'
    ],
    image: '/images/pintura-verniz.jpg',
    alt: 'Pintura com verniz'
  },
  {
    title: 'Grafiato e Textura',
    descriptions: [
      'Aplicação de texturas decorativas em paredes.',
      'Acabamento rústico e moderno.',
      'Personalização de ambientes com diferentes padrões e relevos.'
    ],
    image: '/images/grafiato-textura.jpg',
    alt: 'Grafiato e textura'
  },
  {
    title: 'Pintura Epóxi',
    descriptions: [
      'Pintura de pisos de garagem e áreas industriais.',
      'Acabamento resistente e durável.',
      'Impermeabilização e proteção de superfícies.',
      'Ideal para garagens, cozinhas industriais e áreas que exigem durabilidade'
    ],
    image: '/images/pintura-epoxi.webp',
    alt: 'Pintura epóxi'
  },
]

export function Services() {

  return (
    <div className="bg-sky-50">
      <section id="services" className="w-full max-w-screen-xl mx-auto px-5 py-10 sm:mt-24 lg:mt-32">
        <div className="pb-6">
          <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
            Serviços
          </h1>

          <p className="mt-2 max-w-3xl  text-slate-500">
            Transforme seu ambiente com nossos serviços de pintura!
            Oferecemos desde a clássica pintura comum até técnicas sofisticadas como grafiato e texturas decorativas.
            Seja para renovar sua casa, escritório ou fachada, garantimos um acabamento impecável e duradouro.
            Com opções que vão da pintura epóxi, ideal para garagens e áreas industriais, até a pintura com verniz, que realça a beleza da madeira.
            Escolha a cor, o estilo, e deixe o resto com a gente!
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-10">
          {services.map((service, index) => (
            <div key={index} className="w-[386px]">
              <div className="bg-white border border-gray-200 rounded-lg shadow h-full overflow-hidden">
                <Image src={service.image} alt={service.alt} width={400} height={200} className="w-full h-52 object-cover" />

                <div className="p-5 pt-0">
                  <h2 className="mt-4 text-xl font-bold text-slate-900">{service.title}</h2>

                  <ul className="mt-4 space-y-2">
                    {service.descriptions.map((description, index) => (
                      <li key={index} className="font-normal text-slate-700 leading-6 before:inline-block before:h-1.5 before:w-1.5 before:bg-slate-500 before:rounded-full before:mr-1.5 before:mb-[3px]">
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}