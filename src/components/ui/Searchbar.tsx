"use client";
import { useState } from "react";
/* Components */
import { Button } from "./Button";

export const Searchbar = ({
  placeholder,
  onSearch,
}: {
  placeholder: string;
  onSearch: (term: string) => void;
}) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(term.trim());
  };

  const handleReset = () => {
    setTerm("");
    onSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-2 sm:flex-row"
    >
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder={placeholder}
        className="border px-4 py-2 rounded-md w-full"
      />
      <div className="flex flex-row items-center gap-4">
        <Button
          type="submit"
          className="w-[76px] bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white"
        >
          Search
        </Button>
        {term && (
          <Button
            type="button"
            onClick={handleReset}
            className="w-[76px] bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 hover:text-black"
          >
            Reset
          </Button>
        )}
      </div>
    </form>
  );
};
