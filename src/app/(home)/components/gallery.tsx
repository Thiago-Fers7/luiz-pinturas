"use client";

import { Button } from "@/components/button";
import { SectionContainer } from "@/components/section-container";
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const images = [
  {
    path: "/images/gallery/5e5e064b-ef1b-4ab8-8baf-7e5208ced4d4.jpeg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/e888b255-92be-4767-8147-68c54de05c02.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/7eca4c6a-ceb9-4e24-84c5-494b51fbf31c.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/e9938369-3d67-4aee-84e5-10c930c8ecd2.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/f6cb5133-acd7-44b9-965e-ca8970e0b99d.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/4772bbf6-6fa4-4947-97a0-86801c86602b.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/3e15757e-45e0-43b9-85c3-e5f3938e741f.jpeg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/50f287a9-d6f8-456e-9817-757c51439cb6.jpeg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/6840c4aa-aeb5-41d7-b33f-9a7c1ee618de.jpeg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/d139d155-7681-48e2-952a-5e23dcc1be1b.jpeg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/0c967d45-3408-40b1-aa66-676c065f9587.jpeg",
    description: "",
    title: "",
  },
  // {
  //   path: "/images/gallery/13023f80-5696-48e9-a50b-14b8bae62996.webp",
  //   description: "",
  //   title: "",
  // },
  {
    path: "/images/gallery/13592076-fd0f-4271-a330-3a8522497b3b.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/1ee56ede-a74f-4c4f-bb46-092ebe206c80.webp",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/ad92b1fa-9b4c-405c-81cd-fcbf1d384c42.jpeg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/9736b3a1-e2e6-493c-9815-9e1f5b3c5517.jpeg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/347cac97-dcae-4db0-8610-4d6e9f60079a.jpeg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/a97d76e3-918b-4d7c-bd25-45a524522efd.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/c3d43fd5-8dce-4f6f-bfa5-a6eacc2ea849.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/376dc661-31f4-41f5-89f7-ba58c1010b36.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/4132cd20-36d3-4b65-b42d-261cb9f897a5.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/468836a9-4344-4b6b-9c79-c7170738742a.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/cad8cb2a-9d50-45d7-b3c7-c6599f6cdba6.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/64538eec-97fa-459b-8732-2e60225e264b.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/efc99c46-99f0-43e4-8d3d-26041078ca91.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/64da1586-3693-42c7-97c5-28bcd68e8180.jpg",
    description: "",
    title: "",
  },
  // {
  //   path: "/images/gallery/74e9bbb9-e1cc-482c-8a4a-facfd0bf0852.jpg",
  //   description: "",
  //   title: "",
  // },
  {
    path: "/images/gallery/79ea7171-a6be-4183-828e-021944db977c.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/7af8e91d-1766-48b6-b097-0b567ef81599.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/a194e3a1-c0e7-497d-a119-383c8c39434d.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/bda319ef-6867-47c7-855d-e59ff1842959.webp",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/d81693c1-de99-4b5d-b8f7-2f65aa8b657f.jpg",
    description: "",
    title: "",
  },
  {
    path: "/images/gallery/db9b6873-2469-4af2-9f4d-3e6a8d0a1e1e.jpg",
    description: "",
    title: "",
  },
];

const bannerImages = [
  images[0],
  images[1],
  images[2],
  images[3],
  images[4],
  images[5],
  images[14],
  images[7],
];

export function Gallery() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollAreaRef = useRef<HTMLDivElement>(null);

  function handleChange(index: number) {
    api?.scrollTo(index);
  }

  function handleOpenChange(isOpen: boolean) {
    if (isOpen) {
      setIsModalOpen(true);
      router.push("/?modal=true", {
        scroll: false,
      });
    } else {
      setIsModalOpen(false);
      router.push("/", {
        scroll: false,
      });
    }
  }

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);

      const selected = api.selectedScrollSnap();

      const elementsToSelect = scrollAreaRef.current?.querySelectorAll(
        "button[data-select-button]",
      );

      if (elementsToSelect) {
        const element = elementsToSelect[selected];
        const container = scrollAreaRef.current?.lastElementChild;

        if (!element || !container) {
          return;
        }

        const elementRect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Centraliza o elemento selecionado no centro do container
        const scrollPosition =
          elementRect.left -
          containerRect.left +
          container.scrollLeft -
          containerRect.width / 2 +
          elementRect.width / 2;

        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    });
  }, [api]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        api?.scrollNext();
      } else if (event.key === "ArrowLeft") {
        api?.scrollPrev();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [api]);

  useEffect(() => {
    if (searchParams.get("modal") === "true") {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [searchParams]);

  return (
    <SectionContainer id="gallery" className="my-10 overflow-hidden">
      <div className="pointer-events-none grid h-[300px] select-none place-items-center">
        <div
          className="relative mx-auto h-[200px] w-[270px] animate-rotateGallery"
          style={{ transformStyle: "preserve-3d" }}
        >
          {bannerImages.map((image, index) => (
            <span
              key={image.path}
              className="absolute size-full origin-center"
              style={{
                transform: `rotateY(calc(${index + 1}  * 45deg)) translateZ(350px)`,
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src={image.path}
                alt=""
                width={300}
                height={200}
                quality={100}
                className="absolute size-full rounded-lg object-cover"
              />
            </span>
          ))}
        </div>
      </div>

      <Dialog onOpenChange={handleOpenChange} open={isModalOpen}>
        <div className="mt-4 text-right">
          <DialogTrigger asChild>
            <Button type="button" size="lg" enphasis="medium">
              Ver fotos
            </Button>
          </DialogTrigger>
        </div>

        <DialogPortal>
          <DialogContent className="block max-w-[96vw] overflow-hidden rounded-lg p-0 lg:w-max">
            <SectionContainer className="max-h-[96vh] overflow-auto py-3">
              <h2 className="mb-0 text-lg font-semibold text-slate-900">
                Galeria de fotos
              </h2>
              <p className="mt-0 text-base text-slate-600 md:text-lg">
                Explore nossa galeria e veja os resultados dos nossos trabalhos
                em diversos ambientes.
              </p>

              <div className="mt-4 block place-items-center md:grid">
                <Carousel
                  opts={{
                    align: "center",
                  }}
                  className="w-full md:w-4/5"
                  setApi={setApi}
                >
                  <CarouselContent>
                    {images.map((image) => (
                      <CarouselItem key={image.path} className="h-[50vh]">
                        <Image
                          src={image.path}
                          alt=""
                          width={900}
                          height={700}
                          quality={100}
                          className="size-full rounded-lg object-contain object-center"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <div className="hidden md:block">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </div>

              <p className="mt-1 text-center text-sm text-slate-600">
                {current} de {count}
              </p>

              <ScrollArea
                className="mt-2 w-full select-none"
                onKeyDown={(event) => event.preventDefault()}
                ref={scrollAreaRef}
              >
                <div className="flex gap-2">
                  {images.map((image, index) => (
                    <Button
                      key={image.path}
                      enphasis="lowest"
                      className="h-16 w-24 overflow-hidden rounded-lg border-2 border-white data-[current-selected=true]:border-sky-500 md:h-24 md:w-36"
                      data-select-button
                      data-current-selected={index + 1 === current}
                      onClick={() => handleChange(index)}
                    >
                      <Image
                        src={image.path}
                        alt=""
                        width={144}
                        height={96}
                        quality={75}
                        className="pointer-events-none size-full select-none object-cover object-center"
                      />
                    </Button>
                  ))}
                </div>

                <ScrollBar orientation="horizontal" className="hidden" />
              </ScrollArea>
            </SectionContainer>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </SectionContainer>
  );
}
