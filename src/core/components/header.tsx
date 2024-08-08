import { HiBars3BottomLeft, HiOutlineBellAlert, HiMiniMagnifyingGlass, HiUserCircle, HiMoon, HiSun } from "react-icons/hi2";
import CustomButton from "./buttons/custom_button";
import IconButton from "./buttons/icon_button";
import TextComponent from "./text_styles";

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}


function Header({ toggleDarkMode, isDarkMode }: HeaderProps) {
  return (
    <>
    <header className="bg-white dark:bg-custom-gray h-[55px] flex items-center px-5 text-black dark:text-white">
      <IconButton icon={HiBars3BottomLeft} />
      <div className="border-l border-gray-400 h-8 mx-4"></div>
      <div className="flex">
        <IconButton icon={HiOutlineBellAlert} />
        <div className="px-2"></div>
        <IconButton icon={HiMiniMagnifyingGlass} />
      </div>
      <div className="flex-grow"></div>
      <TextComponent text="News" size="2xl" weight="bold" />
      <div className="flex-grow"></div>
      <div className="flex space-x-2">
        <IconButton icon={isDarkMode ? HiSun : HiMoon} onClick={toggleDarkMode} />
        <div className="p-1"></div>
        <CustomButton icon={HiUserCircle} text="Login" />
        <CustomButton icon={HiUserCircle} text="Sign in" />
      </div>
    </header>
      <div className="border-b border-gray-300"></div>
    </>
  );
}

export default Header;
