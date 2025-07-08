import React from "react";

interface RhomboidTagProps {
  bgColor: string;
  text: string;
}

const RhomboidTag: React.FC<RhomboidTagProps> = ({
  bgColor = "",
  text = "",
}) => {
  return (
    <span
      className={`inline-block px-6 py-2 ${bgColor} text-white text-sm font-bold transform -skew-x-12`}
    >
      {text}
    </span>
  );
};

export { RhomboidTag };
