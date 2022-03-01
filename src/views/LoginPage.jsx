import { StatusBar } from "../components/StatusBar";

export const LoginPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#125038] h-screen">
        <StatusBar />
      <div className="flex justify-center">
        <div className="flex flex-col text-center">
          <div className="mt-20 font-bold text-white text-[51.05px] font-dmsans">
            Audio
          </div>
          <div className="font-bold text-white text-sm font-dmsans">
            It's modular and designed to last
          </div>
        </div>
      </div>
    </div>
  );
};
