"use client";
import React from "react";
/* Next JS Features */
import Image from "next/image";
/* Hooks */
import { useMediaQuery } from "@/hooks/useMediaQuery";
/* Components */
import { NavList } from "./NavList";
import { ResponsiveMenu } from "./ResponsiveMenu";

const Header = () => {
  const isUpperMobile = useMediaQuery("(min-width:768px)");

  return (
    <header className="z-10 bg-blue-300 flex items-center justify-between mx-auto mb-6 px-4 py-2 sticky top-0 md:my-6 md:px-10 md:py-4 md:w-[95%] md:rounded-md">
      <Image
        src="/PokemonLogo.png"
        alt="Pokemon Logo"
        width={150}
        height={80}
        priority
      />
      {isUpperMobile ? (
        <NavList isUpperMobile={isUpperMobile} />
      ) : (
        <ResponsiveMenu isUpperMobile={isUpperMobile} />
      )}
    </header>
  );
};

export { Header };
