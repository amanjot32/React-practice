import { HiBars3BottomLeft, HiOutlineBellAlert, HiMiniMagnifyingGlass, HiUserCircle } from "react-icons/hi2";
import CustomButton from "./main/buttons/custom_button";
import IconButton from "./main/buttons/icon_button";
import TextComponent from "./main/text_styles";

function Header() {
  return (
    <header className="bg-custom-gray h-[55px] flex items-center px-5 text-white">
      <IconButton icon={HiBars3BottomLeft} />
      <div className="border-l border-gray-500 h-8 mx-4"></div>
      <div className="flex">
      <IconButton icon={HiOutlineBellAlert} />
      <div className="px-2"></div>
      <IconButton icon={HiMiniMagnifyingGlass} />
      </div>
      <div className="flex-grow"></div>
      <TextComponent text="News" size="2xl" weight="bold"/>
      <div className="flex-grow"></div>
      <div className="flex space-x-2">
        <CustomButton icon={HiUserCircle} text="Login" />
        <CustomButton icon={HiUserCircle} text="Sign in" />
      </div>
    </header>
  );
}

export default Header;
