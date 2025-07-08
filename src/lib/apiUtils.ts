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

/* Pokemon List and Pagination */
export async function fetchPokemonListWithDetails(offset = 0, limit = 10) {
  try {
    const res = await pokeApi.get(`pokemon?limit=${limit}&offset=${offset}`);
    const pokemons = res.data.results;

    const details = await Promise.all(
      pokemons.map((p: any) => pokeApi.get(p.url).then((res) => res.data))
    );

    return {
      results: details,
      total: 1000,
    };
  } catch (error) {
    console.error("Fetch error", error);
    return { results: [], total: 0 };
  }
}

/* Pokemon Search */
export async function searchPokemonByName(search: string) {
  if (!search) return { results: [], total: 0 };

  try {
    const res = await pokeApi.get(`pokemon/${search.toLowerCase()}`);
    const data = res.data;
    return {
      results: [data],
      total: 1,
    };
  } catch (error) {
    console.error("Not found:", error);
    return { results: [], total: 0 };
  }
}

/* Fetch Videogames List with details */
export async function fetVideogamesListWithDetails(offset = 0, limit = 10) {
  try {
    const res = await pokeApi.get(`version?limit=${limit}&offset=${offset}`);
    const videogames = res.data.results;

    const details = await Promise.all(
      videogames.map((p: any) => pokeApi.get(p.url).then((res) => res.data))
    );

    return {
      results: details,
      total: 46,
    };
  } catch (error) {
    console.error("Fetch error", error);
    return { results: [], total: 0 };
  }
}

/* Search videogame */
export async function searchVideogameByName(search: string) {
  if (!search) return { results: [], total: 0 };

  try {
    const res = await pokeApi.get(`version/${search.toLowerCase()}`);
    const data = res.data;
    return {
      results: [data],
      total: 1,
    };
  } catch (error) {
    console.error("Not found:", error);
    return { results: [], total: 0 };
  }
}
