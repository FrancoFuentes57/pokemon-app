"use client";
import React from "react";
/* Lottie Animation */
import Lottie from "react-lottie-player";
import Pokeball from "../../../public/lotties/Pokeball.json";
/* Hooks */
import { useFavorites } from "@/hooks/useFavorites";
/* Components */
import { ItemCard } from "@/features/Cards/ItemCard";
/* Types */
import { Item } from "@/types/types";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <>
      <div className="mx-auto w-[170px] h-[170px] flex flex-col items-center justify-center">
        <Lottie play loop animationData={Pokeball} />
      </div>
      <h2 className="text-4xl sm:text-6xl text-center my-16 font-semibold">
        Your Pokemons trapped!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {favorites.map((pokemon: Item) => (
          <ItemCard key={pokemon.id} item={pokemon} type="Pokemon" />
        ))}
      </div>
    </>
  );
};

export default Favorites;
