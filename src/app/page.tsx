import { headers } from "next/headers";
/* Components */
import { HomeSection } from "@/components/ui/Sections/HomeSection";
import { PokemonCarousel } from "@/features/Carousel/PokemonCarousel";

export default async function Home() {
  // Get current host (domain)
  const headersList = headers();
  const host = (await headersList).get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  const baseUrl = `${protocol}://${host}`;

  try {
    const res = await fetch(`${baseUrl}/api/home-data`, {
      cache: "no-store",
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
  } catch (err) {
    console.error("Home page error:", err);
    return (
      <section className="text-center py-12">
        <h2 className="text-2xl font-bold">Failed to load homepage data 🥲</h2>
      </section>
    );
  }
}
