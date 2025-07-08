import React from "react";
/* NextJS Features */
import Link from "next/link";
/* Components */
import { ItemCard } from "@/features/Cards/ItemCard";
import { Button } from "../Button";
/* Types */
import { Item } from "@/types/types";

interface HomeSectionProps {
  sectionTitle: string;
  items: Item[];
  type: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({
  sectionTitle,
  items,
  type,
}) => {
  const linkPath = type === "Pokemon" ? "/pokemon" : "/videogames";

  return (
    <section className="my-20">
      <h2 className="text-4xl text-center mb-20 md:text-6xl">{sectionTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} type={type} />
        ))}
      </div>
      <div className="w-full my-20 flex justify-center">
        <Link href={linkPath}>
          <Button className="bg-red-500 rounded-sm uppercase text-white hover:bg-red-600 focus:bg-red-600">
            Take me there
          </Button>
        </Link>
      </div>
    </section>
  );
};

export { HomeSection };
