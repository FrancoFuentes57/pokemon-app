export type Item = {
  id: number;
  description: string;
  image: string;
  stats: { attack: number; defense: number; speed: number };
  types: string[];
  name: string;
  generation: string;
};
