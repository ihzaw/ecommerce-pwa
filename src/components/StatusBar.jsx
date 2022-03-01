import React from "react";
// import { ReactComponent as Signal } from '../assets/signal.svg'
import { Signal } from "./Signal";
import { Battery } from "./Battery";
import { Wifi } from "./Wifi";

export const StatusBar = ({ variant }) => {
  return (
    <div className="grid grid-cols-2 font-bold">
      <div className={variant === "white" ? "justify-items-start p-2 text-white" : "justify-items-start p-2"}>{`${new Date().getHours()}.${new Date().getMinutes()}`}</div>
      <div className="grid grid-cols-4">
        <div className="flex col-span-2 col-start-3 justify-evenly items-center">
          <Signal variant={variant}/>
          <Wifi variant={variant}/>
          <Battery variant={variant}/>
        </div>
      </div>
    </div>
  );
};
