import { StatusBar } from "../components/StatusBar";
import { TopBar } from "../components/TopBar";
import { SearchBar } from "../components/SearchBar";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "../components/Badge";
import { useState } from "react";

export const HomePage = ({ setPage }) => {
  const badges = ["Headphone", "Headband", "Earpad"]
  const [selectedBadge, setSelectedBadge] = useState(null)
  
  return (
    <AnimatePresence>
      <motion.div
        className="h-[844px] w-[390px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="pt-3.5 pb-3 pl-[19.89px] pr-[18.26px]">
          <StatusBar />
        </div>
        <TopBar />
        <div className="mt-[34px] px-[25px]">
          <div className="mb-[5px] text-[16px] leading-[20px]">Hi, Andrea</div>
          <div className="text-[24px] font-bold leading-[32px]">
            What are you looking for today?
          </div>
        </div>
        <SearchBar />
        <div className="mt-[25px] h-full rounded-t-[30px] bg-grey-light p-6 pt-8">
          <div>
            <div className="flex pl-6 justify-evenly">
              {/* capsule start */}
              {badges.map((badge, index) => {
                return <Badge key={index} name={badge} id={index + 1} selectedBadge={selectedBadge} setSelectedBadge={setSelectedBadge}/>
              })}
              {/* capsule end */}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
