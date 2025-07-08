/* Components */
import { HomeSection } from "@/components/ui/Sections/HomeSection";
import { PokemonCarousel } from "@/features/Carousel/PokemonCarousel";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home-data`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to load home data");
  }

  const { carouselPokemons, characterPokemons, games } = await res.json();

  return (
    <>
      <PokemonCarousel carouselPokemons={carouselPokemons} />
      <HomeSection
        sectionTitle="Characters Essentials"
        items={characterPokemons}
        type={"Pokemon"}
      />
      <HomeSection sectionTitle="Videogames" items={games} type="Videogame" />
    </>
  );
}
