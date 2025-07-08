/* eslint-disable @typescript-eslint/no-explicit-any */
import pokeApi from "./axios";

export async function fetchPokemonsWithDetails(limit = 10) {
  try {
    const listRes = await pokeApi.get(`pokemon?limit=${limit}`);
    const pokemons = listRes.data.results;

    const detailedPokemons = await Promise.all(
      pokemons.map(async (pokemon: { name: string; url: string }) => {
        const [detailsRes, speciesRes] = await Promise.all([
          pokeApi.get(pokemon.url),
          pokeApi.get(`pokemon-species/${pokemon.name}`),
        ]);

        const details = detailsRes.data;
        const species = speciesRes.data;

        // Get English description
        const englishFlavor = species.flavor_text_entries.find(
          (entry: any) => entry.language.name === "en"
        );

        return {
          ...details,
          description: englishFlavor?.flavor_text.replace(/\f/g, " ") || "",
        };
      })
    );

    return detailedPokemons;
  } catch (error) {
    console.error("Failed to fetch Pokemons details", error);
    return [];
  }
}

export async function fetchVideogamesWithDetails(limit = 10) {
  try {
    const listRes = await pokeApi.get(`version?limit=${limit}`);
    const videogames = listRes.data.results;

    const detailedGames = await Promise.all(
      videogames.map(async (game: { url: string }) => {
        const res = await pokeApi.get(game.url);
        return res.data;
      })
    );

    return detailedGames;
  } catch (error) {
    console.error("Failed to fetch Videogames details", error);
    return [];
  }
}
