"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";
import { CarouselCard } from "./CarouselCard";
/* Types */
import { Item } from "@/types/types";

interface PokemonCarouselProps {
  carouselPokemons: Item[];
}

const PokemonCarousel: React.FC<PokemonCarouselProps> = ({
  carouselPokemons = [],
}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3800, stopOnInteraction: false })
  );

  if (carouselPokemons.length === 0)
    return (
      <p className="text-2xl text-center text-red-500">
        An error occurred while loading the carousel
      </p>
    );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full  mx-auto border border-gray-400 rounded-sm shadow-md"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselPokemons.map((pokemon) => (
          <CarouselItem key={pokemon.id}>
            <div className="p-1">
              <CarouselCard pokemon={pokemon} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export { PokemonCarousel };
