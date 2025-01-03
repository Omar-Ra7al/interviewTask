// Compnents >>
import Logo from "../shared/Logo";
// Locals >>
import { useTranslation } from "react-i18next";
// Constants >>
import { navLogoClass } from "../../constants/constants";
import { FaGripLines } from "react-icons/fa";
import { useState } from "react";
import SideNav from "./SideNav";

// Styles >>
const btnClass =
  "w-full bg-secondary text-white p-2 transition duration-300 hover:bg-main ";

const HeadNav = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full bg-main md:bg-gray-200 px-12  md:p-0    flex  items-center  justify-between md:justify-end  h-20 ">
      {/* Language buttons */}
      <div className="flex gap-2 md:gap-0  md:flex-col justify-center items-center">
        <button className={btnClass} onClick={() => changeLanguage("en")}>
          English
        </button>
        <button className={btnClass} onClick={() => changeLanguage("ar")}>
          العربية
        </button>
      </div>
      {/* Logo */}
      <div className={`md:fixed top-0 right-0 h-20 px-3 ${navLogoClass} `}>
        <Logo />
      </div>
      <div className="md:hidden">
        <FaGripLines
          className="text-2xl text-white cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>
      <SideNav toggle={toggle} />
      {toggle && (
        <div className="absolute z-50 top-20 right-0 h-screen w-full bg-black/10 text-white transform transition-transform duration-300"></div>
      )}
    </div>
  );
};

export default HeadNav;
