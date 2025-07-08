/* Components */
import { ChipTag } from "@/components/ui/ChipTag";
import { ItemImage } from "@/components/ui/ItemImage";
/* Types */
import { Item } from "@/types/types";
/* Constants */
import { typeColors, PokemonType } from "@/constants/constants";
import { getCapitalizeName } from "@/lib/utils";

interface ItemCardProps {
  item: Item;
  type: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, type }) => {
  const color = item.types
    ? typeColors[item.types[0] as PokemonType] ?? "#fdba74"
    : "#fdba74";

  console.log(color);

  return (
    <div
      className={`w-full max-w-[300px] flex flex-col shadow-md px-6 py-4 rounded-[10px] bg-[radial-gradient(circle_at_50%_0%,_${color}_36%,_#ffffff_36%)] dark:bg-[radial-gradient(circle_at_50%_0%,_#fdba74_36%,_#1f2937_36%)]`}
    >
      <ItemImage
        customSx="w-[230px] h-[230px] mx-auto"
        src={type === "Pokemon" ? item.image : "/VideoGame.png"}
      />
      <p className="text-center text-2xl font-semibold mb-3">
        {getCapitalizeName(item.name)}
      </p>
      {item.generation && (
        <p className="text-center font-light mb-3">
          {getCapitalizeName(item.generation)}
        </p>
      )}
      {item?.types && (
        <div className="flex items-center justify-around mb-3">
          {item.types.map((type: string, index) => {
            const color = typeColors[type as PokemonType] ?? "#f4f4f4";
            return (
              <ChipTag
                key={index}
                bgColor={color}
                color="text-white"
                text={getCapitalizeName(type)}
              />
            );
          })}
        </div>
      )}

      {item.stats && (
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-center">{item.stats.attack}</p>
            <p className="text-center">Attack</p>
          </div>
          <div>
            <p className="font-semibold text-center">{item.stats.defense}</p>
            <p className="text-center">Defense</p>
          </div>
          <div>
            <p className="font-semibold text-center">{item.stats.speed}</p>
            <p className="text-center">Speed</p>
          </div>
        </div>
      )}
    </div>
  );
};

export { ItemCard };
