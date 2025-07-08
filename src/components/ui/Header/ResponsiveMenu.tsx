"use client";
import { useState } from "react";
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
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenDrawer = () => setOpen(true);
  const handleCloseDrawer = () => setOpen(false);

  return (
    <Drawer direction="right" open={open}>
      <Button
        variant="outline"
        size="icon"
        className="rounded-lg"
        onClick={handleOpenDrawer}
      >
        <IoMenuSharp className="size-6" />
      </Button>

      <DrawerContent className="mx-auto w-full max-w-sm flex flex-col px-1.5 py-4 space-y-4 overflow-y-auto overflow-x-hidden">
        <div className="flex items-center justify-between px-1 m-0">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={handleCloseDrawer}
          >
            <IoMdClose className="size-6" />
          </Button>
        </div>
        <DrawerHeader className="items-center">
          <Image
            src="/PokeBallMenu.png"
            alt="Pokemon Pokeballs"
            width={60}
            height={60}
            priority
          />
          <DrawerTitle>Pokémon App</DrawerTitle>
          <DrawerDescription>Directory</DrawerDescription>
        </DrawerHeader>
        <NavList
          isUpperMobile={isUpperMobile}
          handleCloseDrawer={handleCloseDrawer}
        />
      </DrawerContent>
    </Drawer>
  );
};

export { ResponsiveMenu };
