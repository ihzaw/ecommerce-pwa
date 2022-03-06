import { Mail } from "../components/Mail";
import { Lock } from "../components/Lock";

export const InputBox = ({ type }) => {
  return (
    <label className="relative flex items-center">
      <div className="absolute left-4 flex items-center font-dmsans text-grey-primary">
        <div className="mr-[24.17px] h-auto w-auto">
          {type === "Email" ? <Mail /> : <Lock />}
        </div>
      </div>
      <input
        type={type === "Email" ? "text" : "password"}
        className="h-[50px] w-full rounded-[10px] bg-white py-[15px] px-16 outline-none"
        placeholder={type === "Email" ? "Email" : "Password"}
      />
    </label>
  );
};
