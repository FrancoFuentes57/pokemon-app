import React from "react";

interface ChipTagProps {
  bgColor: string;
  color: string;
  text: string;
}

const ChipTag: React.FC<ChipTagProps> = ({
  bgColor = "",
  color = "",
  text = "",
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className="px-3 w-[80px] rounded-full m-4"
    >
      <p className={`text-center ${color}`}>{text}</p>
    </div>
  );
};

export { ChipTag };
