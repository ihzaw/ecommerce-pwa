import { useState } from "react";

const styling = {
  selected: "rounded-[30px] bg-emerald px-[15px] py-[10px] text-white cursor-pointer",
  regular: "px-[15px] py-[10px] text-grey-dark cursor-pointer",
};

export const Badge = ({ name, selectedBadge, id, setSelectedBadge }) => {
  return (
    <div
      id={id}
      className={id === selectedBadge ? styling.selected : styling.regular}
      onClick={() => setSelectedBadge(id)}
    >
      <div className="text-sm leading-5">{name}</div>
    </div>
  );
};

// "rounded-[30px] bg-emerald px-[15px] py-[10px] text-white" : "px-[15px] py-[10px] text-grey-dark"
