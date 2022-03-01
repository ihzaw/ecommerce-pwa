import React from "react";
// import { ReactComponent as Signal } from '../assets/signal.svg'
import { Signal } from "./Signal";
import { Battery } from "./Battery";
import { Wifi } from "./Wifi";

export const StatusBar = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="justify-items-start p-2 text-white">{`${new Date().getHours()}.${new Date().getMinutes()}`}</div>
      <div className="grid grid-cols-4">
        <div className="flex col-span-2 col-start-3 justify-evenly items-center">
          <Signal />
          <Battery />
          <Wifi />
        </div>
        {/* <div></div>
        <div></div> */}
      </div>
    </div>
  );
};
