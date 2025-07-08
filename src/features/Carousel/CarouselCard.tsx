import React from "react";
/* Next JS Features */
import Link from "next/link";
/* Components */
import { ItemImage } from "@/components/ui/ItemImage";
import { RhomboidTag } from "@/components/ui/RhomboidTag";
import { Button } from "@/components/ui/Button";
/* Utils */
import { getCapitalizeName } from "@/lib/utils";
/* Types */
import { Item } from "@/types/types";

interface CarouselCardProps {
  pokemon: Item;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ pokemon }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 gap-10 md:flex-row lg:gap-32">
        <ItemImage
          customSx="w-[240px] h-[240px] md:w-[300px] lg:w-[400px] md:h-[300px] lg:h-[400px]"
          src={pokemon.image}
        />
        <div className="flex flex-col items-center max-w-[400px] gap-6">
          <div className="self-start">
            <RhomboidTag bgColor="bg-red-500" text={`#${pokemon.id}`} />
          </div>
          <p className="text-justify">{pokemon.description}</p>
          <Link href={`/pokemon/${pokemon.id}`}>
            <Button className="bg-red-500 rounded-sm uppercase text-white focus:bg-red-500 hover:bg-red-600 transition-all">
              Show More
            </Button>
          </Link>
        </div>
      </div>
      <p className="text-2xl text-center font-semibold my-3.5">
        {getCapitalizeName(pokemon.name)}
      </p>
    </>
  );
};

export { CarouselCard };
