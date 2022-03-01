import { StatusBar } from "../components/StatusBar";
import { TopBar } from "../components/TopBar";

export const HomePage = ({ setPage }) => {
  return (
    <div className="h-[844px] w-[390px] border-2 border-black">
      <div className="pt-3.5 pb-3 pl-[19.89px] pr-[18.26px]">
        <StatusBar />
      </div>
      <TopBar />
      <button className="" onClick={() => setPage("Login")}>
        Homepage
      </button>
    </div>
  );
};
