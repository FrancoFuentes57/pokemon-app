import React from "react";
/* Next.js */
import Link from "next/link";
/* Icons */
import { CgPokemon } from "react-icons/cg";
import {
  MdOutlineFavoriteBorder,
  MdOutlineVideogameAsset,
} from "react-icons/md";
/* Components */
import { ThemeToggle } from "@/features/DarkAndLightMode/ThemeToggle";

interface NavListProps {
  isUpperMobile: boolean;
}

const navItems = [
  {
    label: "Pokémon List",
    href: "/pokemon",
    icon: <CgPokemon size={24} />,
  },
  {
    label: "Videogames",
    href: "/favorites", // consider updating if this should differ
    icon: <MdOutlineVideogameAsset size={24} />,
  },
  {
    label: "Favorites",
    href: "/favorites",
    icon: <MdOutlineFavoriteBorder size={24} />,
  },
];

const linkBaseClass = "flex items-center px-4";
const mobileClass =
  "gap-3 py-2 rounded hover:bg-accent hover:text-accent-foreground";

const NavList: React.FC<NavListProps> = ({ isUpperMobile }) => {
  return (
    <nav
      className={`flex ${
        isUpperMobile ? "flex-row items-center" : "flex-col space-y-2"
      }`}
    >
      {navItems.map(({ label, href, icon }) => (
        <Link
          key={label}
          href={href}
          className={`${linkBaseClass} ${
            !isUpperMobile ? mobileClass : "uppercase font-bold"
          }`}
        >
          {!isUpperMobile && icon}
          {label}
        </Link>
      ))}

      {isUpperMobile && <ThemeToggle />}
    </nav>
  );
};

export { NavList };
