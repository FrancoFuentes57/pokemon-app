export const typeColors = {
  normal: "#d1d5db", // gray-300
  fire: "#ef4444", // red-500
  water: "#60a5fa", // blue-400
  electric: "#fde047", // yellow-300
  grass: "#4ade80", // green-400
  ice: "#bfdbfe", // blue-200
  fighting: "#ea580c", // orange-600
  poison: "#9333ea", // purple-600
  ground: "#ca8a04", // yellow-600
  flying: "#7dd3fc", // sky-300
  psychic: "#ec4899", // pink-500
  bug: "#a3e635", // lime-400
  rock: "#78350f", // yellow-800
  ghost: "#4338ca", // indigo-700
  dragon: "#3730a3", // indigo-800
  dark: "#1f2937", // gray-800
  steel: "#6b7280", // gray-500
  fairy: "#f9a8d4", // pink-300
  shadow: "#737373", // neutral-500 (optional)
  unknown: "#9ca3af", // gray-400 (optional)
};

export type PokemonType = keyof typeof typeColors;
