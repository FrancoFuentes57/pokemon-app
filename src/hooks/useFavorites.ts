// hooks/useFavorites.ts
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "@/store/slices/favoritesSlice";
import type { RootState } from "@/store/store";
import type { Item } from "@/types/types";

export const useFavorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const addFavoritePokemon = (item: Item) => {
    dispatch(addFavorite(item));
  };

  const removeFavoritePokemon = (id: number) => {
    dispatch(removeFavorite(id));
  };

  return {
    favorites,
    addFavoritePokemon,
    removeFavoritePokemon,
  };
};
