import { MenuTrayIcon } from "./MenuTrayIcon";
import Logo from '../assets/Logo.png'
import Avatar from '../assets/Avatar.png'

export const TopBar = () => {
  return (
    <div className="px-[25px] flex justify-between items-center">
      <div className="h-auto w-auto flex justify-center items-center">
          <MenuTrayIcon />
      </div>
      <div className="w-[83.33px] h-[25px] flex justify-center">
          <img src={Logo} alt="Audiologo" className="mr-[9px]" />
          <div className="font-bold text-[19.05px]">Audio</div>
      </div>
      <div>
      <img src={Avatar} alt="Avatar" className="" />
      </div>
    </div>
  );
};
