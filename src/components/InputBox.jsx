import { useState } from "react";
import { Mail } from "../components/Mail";
import { Lock } from '../components/Lock'

export const InputBox = ({ type }) => {
    

  return (
    <label className="flex items-center relative">
      <div className="flex items-center text-grey-primary font-dmsans absolute left-4">
        <div className="w-auto h-auto mr-[24.17px]">
          {type === "Email" ? <Mail /> : <Lock />}
        </div>
      </div>
      <input type={type === "Email" ? "text" : "password"} className="bg-white h-[50px] rounded-[10px] w-full outline-none py-[15px] px-16" placeholder={type === "Email" ? "Email" : "Password"}/>
    </label>
  );
};
