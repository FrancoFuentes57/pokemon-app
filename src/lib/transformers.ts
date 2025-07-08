/* eslint-disable @typescript-eslint/no-explicit-any */
export function transformPokemon(pokemon: any) {
  return {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.other["official-artwork"].front_default,
    description: pokemon.description || "", // ✅ Include the new description
    types: pokemon.types.map((t: any) => t.type.name),
    stats: {
      attack: pokemon.stats.find((s: any) => s.stat.name === "attack")
        ?.base_stat,
      defense: pokemon.stats.find((s: any) => s.stat.name === "defense")
        ?.base_stat,
      speed: pokemon.stats.find((s: any) => s.stat.name === "speed")?.base_stat,
    },
  };
}

export function transformGame(game: any) {
  return {
    id: game.id,
    name: game.name,
    generation: game.version_group?.name,
  };
}
