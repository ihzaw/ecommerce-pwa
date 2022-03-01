import { StatusBar } from "../components/StatusBar";
import { TopBar } from "../components/TopBar";
import { SearchBar } from "../components/SearchBar";

export const HomePage = ({ setPage }) => {
  return (
    <div className="h-[844px] w-[390px] border-2 border-black">
      <div className="pt-3.5 pb-3 pl-[19.89px] pr-[18.26px]">
        <StatusBar />
      </div>
      <TopBar />
      <div className="mt-[34px] px-[25px]">
        <div className="text-[16px] leading-[20px] mb-[5px]">Hi, Andrea</div>
        <div className="text-[24px] font-bold leading-[32px]">What are you looking for today?</div>
      </div>
      <SearchBar />
    </div>
  );
};
