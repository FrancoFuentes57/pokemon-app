"use client";
/* Next JS Features */
import Image from "next/image";
/* React Icons */
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
/* Components */
import { NavList } from "./NavList";
import { Button } from "@/components/ui/Button";
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/Drawer";
import { ThemeToggle } from "@/features/DarkAndLightMode/ThemeToggle";

interface ResponsiveMenuProps {
  isUpperMobile: boolean;
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ isUpperMobile }) => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-lg">
          <IoMenuSharp className="size-6" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="mx-auto w-full max-w-sm flex flex-col px-1.5 py-4 space-y-4 overflow-y-auto overflow-x-hidden">
        <div className="flex items-center justify-between px-1 m-0">
          <ThemeToggle />
          <DrawerClose asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <IoMdClose className="size-6" />
            </Button>
          </DrawerClose>
        </div>
        <DrawerHeader className="items-center">
          <Image
            src="/PokeBallMenu.svg"
            alt="Pokemon Pokeballs"
            width={60}
            height={60}
            priority
          />
          <DrawerTitle>Pokémon App</DrawerTitle>
          <DrawerDescription>Directory</DrawerDescription>
        </DrawerHeader>
        <NavList isUpperMobile={isUpperMobile} />
      </DrawerContent>
    </Drawer>
  );
};

export { ResponsiveMenu };
