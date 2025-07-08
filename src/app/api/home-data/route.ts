import { NextResponse } from "next/server";
import {
  fetchPokemonsWithDetails,
  fetchVideogamesWithDetails,
} from "@/lib/apiUtils";
import { transformPokemon, transformGame } from "@/lib/transformers";

export async function GET() {
  try {
    const [pokemons, games] = await Promise.all([
      fetchPokemonsWithDetails(8),
      fetchVideogamesWithDetails(3),
    ]);

    const response = {
      carouselPokemons: pokemons.slice(0, 5).map(transformPokemon),
      characterPokemons: pokemons.slice(5, 8).map(transformPokemon),
      games: games.map(transformGame),
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch home data" },
      { status: 500 }
    );
  }
}
