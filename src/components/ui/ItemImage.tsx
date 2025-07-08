/* Next JS Features */
import Image from "next/image";

interface ItemImageProps {
  customSx: string;
  src: string;
}

const ItemImage: React.FC<ItemImageProps> = ({ customSx, src = "" }) => {
  return (
    <div className={`relative flex-shrink-0 ${customSx}`}>
      <Image
        src={src}
        alt="Pokémon Item"
        fill
        style={{ objectFit: "contain" }}
        sizes="100%"
        priority
      />
    </div>
  );
};

export { ItemImage };
