import React from "react";
/* NextJS Features */
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
  handleCloseDrawer?: () => void;
}

const navItems = [
  {
    label: "Pokémon List",
    href: "/pokemon",
    icon: <CgPokemon size={24} />,
  },
  {
    label: "Videogames",
    href: "/videogames",
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

const NavList: React.FC<NavListProps> = ({
  isUpperMobile,
  handleCloseDrawer,
}) => {
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
          onClick={() => {
            if (!isUpperMobile && handleCloseDrawer) handleCloseDrawer();
          }}
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
