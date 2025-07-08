/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import pokeApi from "@/lib/axios";
import { Button } from "@/components/ui/Button";
import { getCapitalizeName } from "@/lib/utils";

type Params = Promise<{ id: string }>;

export default async function PokemonDetailPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;

  try {
    const res = await pokeApi.get(`pokemon/${id}`);
    const pokemon = res.data;

    return (
      <section>
        <Link href="/pokemon">
          <Button className="bg-red-500 rounded-sm uppercase text-white focus:bg-red-500 hover:bg-red-600 transition-all">
            ← Back to Pokémon
          </Button>
        </Link>

        <div className="flex flex-col justify-center items-center mt-4 border border-gray-400 rounded-sm shadow-md max-w-[400px] mx-auto py-4">
          <h1 className="text-4xl font-bold mb-6">
            {`#${pokemon.id} ${getCapitalizeName(pokemon.name)}`}
          </h1>
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            width={250}
            height={250}
          />
          <div className="mt-2 space-y-2 self-start mx-16">
            <p>
              <strong>Order:</strong> {pokemon?.order || "-"}
            </p>
            <p>
              <strong>Base experience:</strong> {pokemon.base_experience || "-"}
            </p>
            <p>
              <strong>Height:</strong> {pokemon?.height || "-"}
            </p>
            <p>
              <strong>Weight:</strong> {pokemon.weight || "-"}
            </p>
            {pokemon.types && (
              <p>
                <strong>Types:</strong>{" "}
                {pokemon.types
                  .map((t: any) => getCapitalizeName(t.type.name))
                  .join(", ")}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Pokemon fetch error:", error);
    return (
      <section className="flex flex-col items-center justify-center px-4 py-12 h-[calc(100dvh-200px)]">
        <h2 className="text-2xl font-bold mb-4 text-center">
          No Pokémon found with that name or ID 🥲
        </h2>
        <Link href="/pokemon">
          <Button className="bg-red-500 rounded-sm uppercase text-white focus:bg-red-500 hover:bg-red-600 transition-all">
            Back to list
          </Button>
        </Link>
      </section>
    );
  }
}
