/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
/* Hooks */
import { usePaginatedSearch } from "@/hooks/usePaginatedSearch";
/* Components */
import { Searchbar } from "@/components/ui/Searchbar";
import { Pagination } from "@/components/ui/Pagination";
import { ItemCard } from "@/features/Cards/ItemCard";
/* Utils */
import { transformPokemon } from "@/lib/transformers";
import {
  fetchPokemonListWithDetails,
  searchPokemonByName,
} from "@/lib/apiUtils";

export default function PokemonPage() {
  const limit = 10;

  const {
    items: pokemons,
    search,
    setSearch,
    page,
    setPage,
    total,
    loading,
    error,
  } = usePaginatedSearch({
    searchFn: searchPokemonByName,
    fetchFn: fetchPokemonListWithDetails,
    transformFn: transformPokemon,
    limit,
  });

  return (
    <section className="py-6 space-y-6">
      <Searchbar
        placeholder="Search Pokémon..."
        onSearch={(term: string) => setSearch(term)}
      />

      {loading && (
        <p className="text-center text-gray-500">Loading Pokémon...</p>
      )}

      {error && <p className="text-center text-red-500 font-medium">{error}</p>}

      {!loading && !error && pokemons.length === 0 && (
        <p className="text-center text-gray-500">No Pokémon found.</p>
      )}

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {pokemons.map((pokemon: any) => (
            <ItemCard key={pokemon.id} item={pokemon} type="Pokemon" />
          ))}
        </div>
      )}

      {!search && !loading && pokemons.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(total / limit)}
          onPageChange={setPage}
        />
      )}
    </section>
  );
}
