/* Components */
import { HomeSection } from "@/components/ui/Sections/HomeSection";
import { PokemonCarousel } from "@/features/Carousel/PokemonCarousel";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/home-data", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to load home data");
  }

  const { carouselPokemons, characterPokemons, games } = await res.json();

  console.log(carouselPokemons);
  console.log(characterPokemons);
  console.log(games);

  return (
    <div>
      <main>
        <PokemonCarousel carouselPokemons={carouselPokemons} />
        <HomeSection
          sectionTitle="Characters Essentials"
          items={characterPokemons}
          type={"Pokemon"}
        />
        <HomeSection sectionTitle="Videogames" items={games} type="Videogame" />
      </main>
    </div>
  );
}
