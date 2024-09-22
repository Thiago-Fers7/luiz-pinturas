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
    path: "https://picsum.photos/800/600?random=11",

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "Imagem 1",
  },
  {
    path: "https://picsum.photos/800/600?random=12",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=13",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=14",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=15",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=16",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=17",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=18",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=19",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=110",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=111",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=112",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=113",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=114",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=115",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=116",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=117",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=118",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=119",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=120",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=121",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=122",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=123",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=124",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=126",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=127",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=128",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=129",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
    title: "",
  },
  {
    path: "https://picsum.photos/800/600?random=130",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum repellendus voluptate, dolorem deleniti voluptatem! Eaque aperiam ipsa, maxime atque harum, quisquam officia veniam itaque doloribus inventore, eius nihil deserunt?",
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
  images[6],
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
                alt="Mountain"
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
            <SectionContainer className="max-h-[86vh] overflow-auto">
              <h2 className="mb-0 text-lg font-semibold text-slate-900">
                Galeria de fotos
              </h2>
              <p className="mt-0 text-lg text-slate-600">
                Todas as fotos são meramente ilustrativas.
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
                      <CarouselItem key={image.path}>
                        <Image
                          src={image.path}
                          alt="Mountain"
                          width={400}
                          height={300}
                          quality={100}
                          className="size-full rounded-lg object-cover"
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
                      className="w-24 overflow-hidden rounded-lg border-2 border-white data-[current-selected=true]:border-sky-500 md:w-36"
                      data-select-button
                      data-current-selected={index + 1 === current}
                      onClick={() => handleChange(index)}
                    >
                      <Image
                        src={image.path}
                        alt="Mountain"
                        width={400}
                        height={300}
                        quality={100}
                        className="pointer-events-none size-full select-none"
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
