/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
/* Hooks */
import { usePaginatedSearch } from "@/hooks/usePaginatedSearch";
/* Components */
import { Searchbar } from "@/components/ui/Searchbar";
import { Pagination } from "@/components/ui/Pagination";
import { ItemCard } from "@/features/Cards/ItemCard";
/* Utils */
import { transformGame } from "@/lib/transformers";
import {
  fetVideogamesListWithDetails,
  searchVideogameByName,
} from "@/lib/apiUtils";

export default function GamePage() {
  const limit = 10;

  const {
    items: games,
    search,
    setSearch,
    page,
    setPage,
    total,
    loading,
    error,
  } = usePaginatedSearch({
    searchFn: searchVideogameByName,
    fetchFn: fetVideogamesListWithDetails,
    transformFn: transformGame,
    limit,
  });

  return (
    <section className="py-6 space-y-6">
      <Searchbar
        placeholder="Search Video Games..."
        onSearch={(term: string) => setSearch(term)}
      />

      {loading && <p className="text-center text-gray-500">Loading games...</p>}

      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && games.length === 0 && (
        <p className="text-center text-gray-500">No games found.</p>
      )}

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {games.map((game: any) => (
            <ItemCard key={game.id} item={game} type="Game" />
          ))}
        </div>
      )}

      {!search && !loading && games.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(total / limit)}
          onPageChange={setPage}
        />
      )}
    </section>
  );
}
