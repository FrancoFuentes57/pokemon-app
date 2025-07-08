import React from "react";
/* Next JS Features */
import Link from "next/link";
/* react-icons */
import { FaRegHeart } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
/* Components */
import { Button } from "@/components/ui/Button";
/* Types */
import { Item } from "@/types/types";

interface ButtonsTapeProps {
  item: Item;
}

const ButtonsTape: React.FC<ButtonsTapeProps> = ({ item }) => {
  return (
    <>
      <Link href={`/pokemon/${item.id}`}>
        <Button
          variant="outline"
          size="icon"
          className="z-10 absolute rounded-full right-[-14px] top-[-5px] dark:bg-[#1f2937] dark:hover:bg-[#1f2937]"
        >
          <IoArrowForward className="absolute size-5" />
        </Button>
      </Link>

      <Button
        variant="outline"
        size="icon"
        className="z-10 absolute rounded-full left-[-14px] top-[-5px] dark:bg-[#1f2937] dark:hover:bg-[#1f2937]"
      >
        <FaRegHeart className="absolute size-5" />
      </Button>
    </>
  );
};

export { ButtonsTape };
